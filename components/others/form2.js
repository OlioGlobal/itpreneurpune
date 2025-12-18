import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Form2WithOTP({
  idPrefix = "top",
  pageSource = "itpm_25",
}) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    education: "",
    passoutYear: "",
    itpCenter: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [timer, setTimer] = useState(90);
  const [canResend, setCanResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: OTP, 3: Success

  const router = useRouter();
  const otpRefs = useRef([]);

  const educationOptions = [
    { label: "BTech / BE (CS/IT)", value: "BTech-BE-CS-IT" },
    {
      label: "BTech / BE (Mechanical/Electrical/E&T)",
      value: "BTech-BE-Mech-Elec-EET",
    },
    { label: "BCA / MCA", value: "BCA-MCA" },
    { label: "BSc / MSc (Any Stream)", value: "Bsc-Msc-Any-Stream" },
    { label: "Other Engineering Degree", value: "Other-Engineering-Degree" },
    { label: "Graduation (Any Stream)", value: "Graduation-Any-Stream" },
    {
      label: "Diploma / Undergraduate / 12th",
      value: "Diploma-Undergraduate-12th",
    },
  ];

  const getEducationLabel = (value) => {
    const opt = educationOptions.find((o) => o.value === value);
    return opt ? opt.label : value;
  };

  const itpCenters = ["Shivajinagar, Pune", "Akurdi, PCMC"];

  const passoutYears = ["2021", "2022", "2023", "2024", "2025"];

  // Timer effect for OTP
  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuccess("");

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleOTPChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");

    // Auto-focus next input
    if (value && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter Valid Mobile Number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.education.trim()) {
      newErrors.education = "Education is required.";
    }

    if (!formData.passoutYear.trim()) {
      newErrors.passoutYear = "Passout Year is required.";
    }

    if (!formData.itpCenter.trim()) {
      newErrors.itpCenter = "ITP Center is required.";
    }

    return newErrors;
  };

  const getTrafficSource = () => {
    if (typeof window === "undefined") return "direct";

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("utm_source")) return urlParams.get("utm_source");
    if (urlParams.get("source")) return urlParams.get("source");

    return "direct";
  };

  const sendOTP = async () => {
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: formData.mobile,
          customerId:
            process.env.NEXT_PUBLIC_MESSAGE_CENTRAL_CUSTOMER_ID ||
            "C-C209A3C46F214AC",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setVerificationId(data.verificationId);
        setStep(2);
        setTimer(90);
        setCanResend(false);

        // Analytics tracking
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "OTP_Sent",
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          city: formData.city,
          education: formData.education,
          itpCenter: formData.itpCenter,
          pageSource,
        });

        return true;
      } else {
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP Send Error:", error);
      setSuccess("Failed to send OTP. Please try again.");
      return false;
    }
  };

  const validateOTP = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 4) {
      setOtpError("Please enter complete OTP");
      return;
    }

    setOtpLoading(true);
    setOtpError("");

    try {
      const response = await fetch("/api/validate-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verificationId,
          otp: otpString,
          mobileNumber: formData.mobile,
          customerId:
            process.env.NEXT_PUBLIC_MESSAGE_CENTRAL_CUSTOMER_ID ||
            "C-C209A3C46F214AC",
        }),
      });

      const data = await response.json();

      if (data.success) {
        // OTP verified successfully
        setStep(3);

        // Analytics tracking
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "OTP_Verified",
          mobile: formData.mobile,
          name: formData.name,
          email: formData.email,
          city: formData.city,
          education: formData.education,
          itpCenter: formData.itpCenter,
          pageSource,
        });

        // Save lead data
        await saveLeadData();
      } else {
        setOtpError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Validation Error:", error);
      setOtpError("Something went wrong. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  };

  const saveLeadData = async () => {
    try {
      const fullUrl = window.location.href;
      const source = getTrafficSource();
      // Analytics tracking
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Lead_Success_ITPM",
        formId: "leadFormPopup",
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        city: formData.city,
        education: formData.education,
        itpCenter: formData.itpCenter,
        isVerified: true,
      });

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageSource,
          fullUrl,
          source,
          isVerified: true,
        }),
      });

      if (res.ok) {
        setSuccess("Registration Successful!");

        try {
          if (typeof window.datafast === "function") {
            window.datafast("ITMP_LEAD", {
              name: formData.name,
              email: formData.email,
              mobile: formData.mobile,
              city: formData.city,
              education: formData.education,
              itpCenter: formData.itpCenter,
              page_source: pageSource,
              traffic_source: source,
              is_verified: true,
            });
          }
        } catch (trackingError) {
          console.error("DataFast tracking error:", trackingError);
        }

        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          education: "",
          itpCenter: "",
        });

        // Redirect after delay
        setTimeout(() => {
          router.push("/thank-you");
        }, 200);
      } else {
        throw new Error("Failed to save lead data");
      }
    } catch (error) {
      console.error("Save Lead Error:", error);
      setOtpError("Failed to save your data. Please try again.");
    }
  };

  const resendOTP = async () => {
    setResendLoading(true);
    const success = await sendOTP();
    if (success) {
      setOtp(["", "", "", ""]);
      setTimer(90);
      setCanResend(false);
    }
    setResendLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);

      // Analytics tracking
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "Form_Complete",
        mobile: formData.mobile,
        pageSource,
      });

      const otpSent = await sendOTP();
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const maskedMobile = formData.mobile
    ? `+91-XXXXX-XX${formData.mobile.slice(-3)}`
    : "";

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div
          style={{ background: "#eceff5" }}
          className="bg-[] p-4 sm:p-6 rounded-[5px] shadow-md w-full"
        >
          <div className="mb-5">
            <h2 className="text-[22px] leading-[30px] font-bold text-[#0a1f14]">
              {step === 1 && "Get In Touch"}
              {step === 2 && "Verify Mobile Number"}
              {step === 3 && "Registration Successful!"}
            </h2>
            <p className="text-[#0a1f14]">
              {step === 1 && "Register yourself to get IT Career Counselling"}
              {step === 2 && `Enter 4-digit OTP sent to ${maskedMobile}`}
              {step === 3 && "Thank you for registering with us!"}
            </p>
          </div>

          {/* Step 1: Form */}
          {step === 1 && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* First Row: Name and City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id={`${idPrefix}name`}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={`${idPrefix}name`}
                    className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-3 scale-90 top-2 z-10 origin-[0] left-3 bg-[#eceff5] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:top-2"
                  >
                    Enter Full Name
                  </label>
                  {errors.name && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* City Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="city"
                    id={`${idPrefix}city`}
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={`${idPrefix}city`}
                    className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-3 scale-90 top-2 z-10 origin-[0] left-3 bg-[#eceff5] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:top-2"
                  >
                    Enter City
                  </label>
                  {errors.city && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Second Row: Mobile and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="mobile"
                    id={`${idPrefix}mobile`}
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={`${idPrefix}mobile`}
                    className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-3 scale-90 top-2 z-10 origin-[0] left-3 bg-[#eceff5] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:top-2"
                  >
                    Enter Mobile
                  </label>
                  {errors.mobile && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id={`${idPrefix}email`}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={`${idPrefix}email`}
                    className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-3 scale-90 top-2 z-10 origin-[0] left-3 bg-[#eceff5] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-2 peer-focus:scale-90 peer-focus:-translate-y-3 peer-focus:top-2"
                  >
                    Enter Email Address
                  </label>
                  {errors.email && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative sm:col-span-2">
                  <select
                    name="education"
                    id={`${idPrefix}education`}
                    value={formData.education}
                    onChange={handleChange}
                    className={`w-full border border-[#B8D0C4] rounded-[5px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-600 appearance-none ${
                      formData.education ? "text-black" : "text-gray-500"
                    }`}
                    style={{ background: "#eceff5" }}
                  >
                    <option value="" disabled>
                      Education Qualification
                    </option>
                    {educationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  {errors.education && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.education}
                    </p>
                  )}
                </div>
              </div>

              {/* Third Row: Education and Passout Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Education Dropdown */}

                {/* Passout Year Dropdown */}
                <div className="relative">
                  <select
                    name="passoutYear"
                    id={`${idPrefix}passoutYear`}
                    value={formData.passoutYear || ""}
                    onChange={handleChange}
                    className={`w-full border border-[#B8D0C4] rounded-[5px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-600 appearance-none ${
                      formData.passoutYear ? "text-black" : "text-gray-500"
                    }`}
                    style={{ background: "#eceff5" }}
                  >
                    <option value="" disabled>
                      Passout Year
                    </option>
                    {passoutYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  {errors.passoutYear && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.passoutYear}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <select
                    name="itpCenter"
                    id={`${idPrefix}itpCenter`}
                    value={formData.itpCenter}
                    onChange={handleChange}
                    className={`w-full border border-[#B8D0C4] rounded-[5px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-600 appearance-none ${
                      formData.itpCenter ? "text-black" : "text-gray-500"
                    }`}
                    style={{ background: "#eceff5" }}
                  >
                    <option value="" disabled>
                      Select ITP Center
                    </option>
                    {itpCenters.map((center, index) => (
                      <option key={index} value={center}>
                        {center}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  {errors.itpCenter && (
                    <p className="text-red-600 text-[16px] mt-1">
                      {errors.itpCenter}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-[15px] text-white sm:text-[16px] cursor-pointer bg-[#017D3E] hover:bg-[#076b39] font-medium py-3 rounded-[5px] transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending OTP...
                    </div>
                  ) : (
                    "Register Now"
                  )}
                </button>
                <div className="flex items-center font-medium gap-2 border-red-300 text-red-500 text-[13.5px] mt-2">
                  <span>
                    *Minimum eligibility is graduation. Final-year students may
                    also apply.
                  </span>
                </div>
              </div>
            </form>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <div className="space-y-6">
              {/* OTP Input */}
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    className="w-14 h-14 text-center text-xl font-bold text-black border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    maxLength={1}
                  />
                ))}
              </div>

              {/* Error Message */}
              {otpError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center">{otpError}</p>
                </div>
              )}

              {/* Timer and Resend */}
              <div className="text-center">
                {!canResend ? (
                  <p className="text-gray-500 text-sm">
                    Resend OTP in{" "}
                    <span className="font-semibold text-green-600">
                      {formatTime(timer)}
                    </span>
                  </p>
                ) : (
                  <button
                    onClick={resendOTP}
                    disabled={resendLoading}
                    className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors disabled:opacity-50"
                  >
                    {resendLoading ? "Sending..." : "Resend OTP"}
                  </button>
                )}
              </div>

              {/* Verify Button */}
              <button
                onClick={validateOTP}
                disabled={otpLoading || otp.join("").length !== 4}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {otpLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  "Verify OTP"
                )}
              </button>

              {/* Back Button */}
              <button
                onClick={() => {
                  setStep(1);
                  setOtp(["", "", "", ""]);
                  setOtpError("");
                }}
                className="w-full text-gray-600 font-medium  hover:text-gray-800 transition-colors"
              >
                ← Back to Form
              </button>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  width="48"
                  height="48"
                  aria-hidden="true"
                  role="img"
                >
                  {/* circle pop */}
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="#D1FAE5"
                    strokeWidth="8"
                  />
                  {/* subtle scale animation on the whole svg */}
                  <g transform="translate(0,0)">
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      from="0.9"
                      to="1"
                      begin="0s"
                      dur="300ms"
                      fill="freeze"
                    />
                  </g>

                  {/* check path (draw animation) */}
                  <path
                    d="M14 25 L21 32 L34 18"
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="40"
                    strokeDashoffset="40"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="40"
                      to="0"
                      begin="0.12s"
                      dur="320ms"
                      fill="freeze"
                    />
                  </path>
                </svg>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Submission Successful
                </h4>
                <p className="text-sm text-gray-600">
                  Your form has been submitted successfully.
                </p>
              </div>
            </div>
          )}

          {success && step === 1 && (
            <p className="text-green-600 text-center mt-4 font-medium">
              {success}
            </p>
          )}

          {step === 1 && (
            <>
              <div className="flex items-center rounded-md bg-white px-3 py-2 w-full mt-4 animate-floatText">
                <div className="flex -space-x-3 flex-shrink-0">
                  <img
                    src="/icon/student-1.png"
                    alt="Student 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/icon/student-2.png"
                    alt="Student 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/icon/student-3.png"
                    alt="Student 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span className="ml-4 text-[15px] font-bold text-[#133522]">
                  <span className="text-[#017D3E]">12000+</span> Students Have
                  Registered So Far!
                </span>
              </div>

              <div className="text-black text-center mt-2 font-inter italic text-[16px] leading-[161%]">
                Limited Seats.{" "}
                <span className="font-bold not-italic">Register now.</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
