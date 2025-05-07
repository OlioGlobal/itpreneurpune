import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Form2({ idPrefix = "top", pageSource = "itpm_25" }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

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

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            pageSource,
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
          });

          setFormData({ name: "", email: "", mobile: "" });
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
      <div className="bg-white p-4 sm:p-6 rounded-[5px] shadow-md w-full">
        <h2 className="text-[22px] mb-6 leading-[30px] font-bold text-[#0a1f14]">
          Get Your Job Offer Now!
        </h2>
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id={`name`}
              value={formData.name}
              onChange={handleChange}
              className="w-full border text-black border-[#26784E] px-4 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={`${idPrefix}name`}
              className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Name
            </label>
            {errors.name && (
              <p className="text-red-600 text-[16px] mt-1">{errors.name}</p>
            )}
          </div>

          {/* Mobile Field */}
          <div className="relative">
            <input
              type="text"
              name="mobile"
              id={`mobile`}
              maxLength={10}
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border text-black border-[#26784E] px-4 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={`${idPrefix}mobile`}
              className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Mobile
            </label>
            {errors.mobile && (
              <p className="text-red-600 text-[16px] mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id={`email`}
              value={formData.email}
              onChange={handleChange}
              className="w-full border text-black border-[#26784E] px-4 pt-5 pb-2 focus:outline-none focus:ring-1 focus:ring-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={`${idPrefix}email`}
              className="absolute text-[16px] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-600 text-[16px] mt-1">{errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-[15px] text-white sm:text-[16px] cursor-pointer bg-[#5BD253] font-medium py-3 rounded transition duration-200 hover:bg-[#48c240]"
          >
            {loading ? "Sending..." : "Get Free Career Consultation"}
          </button>
        </form>
        {success && (
          <p className="text-green-600 text-center mt-4 font-medium">
            {success}
          </p>
        )}
      </div>
    </div>
  );
}
