import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Form2({ idPrefix = "top", pageSource = "itpm_25" }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    education: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const educationOptions = [
    "Bachelor of Engineering",
    "Bachelor of Science",
    "Bachelor of Commerce",
    "Bachelor of Arts",
    "Diploma Holder",
    "12th Pass",
    "Other",
  ];

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

    return newErrors;
  };

  const getTrafficSource = () => {
    if (typeof window === "undefined") return "direct";

    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("utm_source")) return urlParams.get("utm_source");
    if (urlParams.get("source")) return urlParams.get("source");

    return "direct";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      try {
        const fullUrl = window.location.href;
        const source = getTrafficSource();

        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            pageSource,
            fullUrl,
            source,
          }),
        });

        if (res.ok) {
          setSuccess("Form Successfully Submitted");
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "Lead_Success_ITPM",
            formId: "leadFormPopup",
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            city: formData.city,
            education: formData.education,
          });

          setFormData({
            name: "",
            email: "",
            mobile: "",
            city: "",
            education: "",
          });
          setTimeout(() => {
            router.push("/thank-you");
          }, 2000);
        } else {
          const errorText = await res.text();
          console.error("Failed to send email:", res.status, errorText);
          setSuccess("Error. Please try again later.");
        }
      } catch (err) {
        console.error("Error sending email:", err.message || err);
        setSuccess("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        style={{ background: "#eceff5" }}
        className="bg-[] p-4 sm:p-6 rounded-[5px] shadow-md w-full"
      >
        <div className="mb-5">
          <h2 className="text-[22px] leading-[30px] font-bold text-[#0a1f14]">
            Register For Free
          </h2>
          <p className="text-[#0a1f14]">
            Register yourself to get Free IT Career Counselling
          </p>
        </div>
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
                className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-4 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor={`${idPrefix}name`}
                className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter Full Name
              </label>
              {errors.name && (
                <p className="text-red-600 text-[14px] mt-1">{errors.name}</p>
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
                className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-4 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor={`${idPrefix}city`}
                className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter City
              </label>
              {errors.city && (
                <p className="text-red-600 text-[14px] mt-1">{errors.city}</p>
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
                className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-4 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor={`${idPrefix}mobile`}
                className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter Mobile
              </label>
              {errors.mobile && (
                <p className="text-red-600 text-[14px] mt-1">{errors.mobile}</p>
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
                className="w-full border text-black border-[#B8D0C4] rounded-[5px] px-3 pt-4 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
                placeholder=" "
              />
              <label
                htmlFor={`${idPrefix}email`}
                className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Enter Email Address
              </label>
              {errors.email && (
                <p className="text-red-600 text-[14px] mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Education Dropdown - Full Width */}
          <div className="relative">
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
                Select Your Highest Education
              </option>
              {educationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
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
              <p className="text-red-600 text-[14px] mt-1">
                {errors.education}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-[15px] text-white sm:text-[16px] cursor-pointer bg-[#017D3E] hover:bg-[#076b39] font-medium py-3 rounded-[5px]"
          >
            {loading ? "Sending..." : "Register Now"}
          </button>
        </form>
        {success && (
          <p className="text-green-600 text-center mt-4 font-medium">
            {success}
          </p>
        )}

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
            <span className="text-[#017D3E]">2735</span> Students Have
            Registered So Far!
          </span>
        </div>

        <div className="text-black text-center mt-2 font-inter italic text-[14px] leading-[161%]">
          Limited Seats.{" "}
          <span className="font-bold not-italic">Register now.</span>
        </div>
      </div>
    </div>
  );
}
