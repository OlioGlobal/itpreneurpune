import Image from "next/image";

export default function WhyChooseITpreneur() {
  return (
    <div className="flex px-[5%] flex-col md:flex-row items-center justify-between  py-16 bg-white gap-3 md:gap-8">
      <div className="w-full  md:w-1/2">
        <Image
          src="/icon/why.png" // ⬅️ Replace this with your actual image path (e.g., '/images/cyber-training.jpg')
          alt="IT Training"
          width={200}
          height={200}
          className="rounded-xl  w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[22px] md:text-[28px] font-bold text-[#163123]">
          Why Choose ITpreneur?
        </h2>
        <p className="text-[16px] text-[#4D5C54] mt-2">
          iTpreneur is one of Maharashtra’s leading IT training institutes,
          known for its industry-aligned curriculum and strong placement
          support. With expert mentors and hands-on learning, we prepare
          students to confidently step into real-world IT roles — especially in
          high-demand fields like Cyber Security.
        </p>
        <button className="bg-[#5BD253] cursor-pointer mt-5 hover:bg-[#2db63e] text-white font-semibold py-4 px-6 rounded-[5px]">
          Learn More
        </button>
      </div>
    </div>
  );
}
