import React, { useState } from "react";
import { useRouter } from "next/router";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
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

    // Clear error as user types
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
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setSuccess("Form Successfully Submitted");
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
    <div className="flex items-center justify-center bg-opacity-60 w-full">
      <div className="bg-white p-5 sm:p-8 rounded-xl shadow-md w-full">
        <h2 className="text-[22px] mb-5 leading-[30px] font-bold text-[#0a1f14]">
          Get Your Job Offer Now!
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-[16px] font-semibold text-[#333333] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border text-[#333333] border-[#333333] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#333333]"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[16px] font-semibold text-[#333333] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border text-[#333333] border-[#333333] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#333333]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-[16px] font-semibold text-[#333333] mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              maxLength={10}
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border text-[#333333] border-[#333333] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#333333]"
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#26784E] text-white px-6 py-3 rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-800"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
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
