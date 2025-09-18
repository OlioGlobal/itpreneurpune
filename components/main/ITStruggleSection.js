import React from "react";
import Image from "next/image";

const ITStruggleSection = ({
  data = {
    videoSrc: "/videos/career-counseling.mp4",
    posterSrc: "/thumbnails/career-counseling-poster.jpg",
    title: "Struggling to Kick Start a Career in IT?",
    description:
      "We understand the struggle of trying to break into the IT industry. The endless job applications, the pressure to have hands-on experience, and the feeling of being overlooked despite your potential.",
    struggles: [
      "Struggling to crack interviews?",
      "Not getting interview calls?",
      "No hands-on experience?",
      "Unsure how to bridge your career gap?",
      "Rejected despite the right qualifications?",
      "Confused by industry tools and tech?",
      "Overwhelmed by job market competition?",
      "Want to switch to IT from another field?",
      "Lost confidence after rejections?",
      "Lack the right connections?",
      "Don't know which IT skill to focus on?",
      "Unsure where to start your IT career?",
    ],
    ctaText: "Get Free Career Consultation",
  },
}) => {
  const { videoSrc, posterSrc, title, description, struggles, ctaText } = data;

  return (
    <section className="px-[5%] py-12 max rm bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* left side - Content (60%) */}
        <div className="w-full lg:w-[60%]">
          <div className="border-gray-200 rounded-xl">
            {/* Header */}
            <div className="mb-6">
              <h2 className="font-bold text-[#163123] h2t leading-[1.2] mb-3">
                {title}
              </h2>
              <p className="text-[#4D5C54] text-[15px] md:text-[16px] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Struggles in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {struggles?.map((struggle, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#017D3E] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-[15px] md:text-[16px] text-[#163123] font-medium">
                    {struggle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group relative bg-[#017D3E] text-white text-[16px] font-bold py-3 px-8 
                 rounded-[10px] cursor-pointer shadow-lg shadow-[#017D3E]/20 transition-all duration-300
                 hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
              >
                {/* Text + Icons */}
                <span className="relative z-10 flex items-center gap-2">
                  {ctaText}
                </span>

                {/* Shine sweep */}
                <span
                  className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 
                   animate-[shine_2.5s_linear_infinite]"
                ></span>

                {/* Glow pulse ring */}
                <span
                  className="absolute inset-0 rounded-[10px] border-2 border-[#017D3E] opacity-70 
                   animate-[glow_3s_ease-in-out_infinite]"
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Video (40%) */}
        <div className="w-full lg:w-[40%]">
          <div className="aspect-video rounded-xl">
            <Image
              src="/icon/why.png"
              alt="IT Training"
              width={1500}
              height={1500}
              className="rounded-xl w-full object-cover"
            />
            {/* <video
              src={videoSrc}
              controls
              poster={posterSrc}
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ITStruggleSection;
