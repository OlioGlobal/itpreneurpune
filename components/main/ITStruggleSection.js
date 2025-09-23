"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react"; // Step 1: Import the Play icon

const ITStruggleSection = ({
  data = {
    videoSrc: "/videos/Java.mp4",
    posterSrc: "/thumbnails/full-stack-java-thumnail.png",
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
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Step 2: Create a handler to play the video
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="px-[5%] py-12 max rm bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Content */}
        <div className="w-full lg:w-[65%]">
          <div className="mb-6">
            <h2 className="font-bold text-[#163123] h2t leading-[1.2] mb-3">
              {title}
            </h2>
            <p className="text-[#4D5C54] text-[15px] md:text-[16px] leading-relaxed">
              {description}
            </p>
          </div>

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

          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative bg-[#017D3E] text-white text-[16px] font-bold py-3 px-8 rounded-[10px] cursor-pointer shadow-lg shadow-[#017D3E]/20 transition-all duration-300 hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {ctaText}
              </span>
              <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 animate-[shine_2.5s_linear_infinite]"></span>
              <span className="absolute inset-0 rounded-[10px] border-2 border-[#017D3E] opacity-70 animate-[glow_3s_ease-in-out_infinite]"></span>
            </button>
          </div>
        </div>

        {/* Right side - Video */}
        <div className="w-full lg:w-[35%]">
          {/* Step 3: Create the relative container */}
          <div className="relative overflow-hidden rounded-xl bg-black h-[500px] md:h-[500px] lg:h-[550px]">
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls={isPlaying} // Show controls only after play
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>

            {/* Step 4: Conditionally render the play button */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full w-18 h-18 flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 z-10"
              >
                <Play className="w-9 h-9 text-[#017D3E] fill-[#017D3E]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITStruggleSection;
