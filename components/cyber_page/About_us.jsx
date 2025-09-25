"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import CountUp from "../utils/CountUp";

export default function About_us({ title, para, subtitle }) {
  const stats = [
    {
      to: 12000,
      label: "Happy Students",
      img: "/icon/happystud.png",
    },
    {
      to: 13,
      label: "Years of Experience",
      img: "/icon/yearsexp.png",
    },
    {
      to: 4000,
      label: "Hiring Companies",
      img: "/icon/hiringcom.png",
    },
    {
      to: 2000,
      label: "Off Campus Drives",
      img: "/icon/offcam.png",
    },
  ];

  // 🎥 Video logic
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      id="about"
      className="max flex px-[5%] flex-col md:flex-row items-center justify-between py-16 bg-white gap-3 md:gap-10"
    >
      {/* Left Side - Video Section instead of static image */}
      <div className="w-full md:w-[30%]">
        <div className="relative overflow-hidden rounded-xl bg-black h-[400px] md:h-[450px] lg:h-[650px]">
          <video
            ref={videoRef}
            src="/videos/about_us.mp4"
            poster="/thumbnails/about_us.png"
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls={isPlaying}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white/80 backdrop-blur-sm rounded-full w-18 h-18 flex items-center 
                justify-center cursor-pointer transition-transform hover:scale-110 
                active:scale-95 z-10"
            >
              <Play className="w-9 h-9 text-[#017D3E] fill-[#017D3E]" />
            </button>
          )}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[70%] flex gap-5 md:gap-10 flex-col">
        <div>
          {subtitle && (
            <p className="text-[#26784e] text-[18px] md:text-[22px] font-bold">
              {subtitle}
            </p>
          )}
          <h2 className="h2t font-bold text-[#163123] leading-[1.3]">
            {title}
          </h2>
          <p className="text-[16px] text-[#4D5C54] mt-2">{para}</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div>
                <Image src={stat.img} height={60} width={60} alt={stat.label} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="font-bold text-[#163123] text-[24px] sm:text-[32px] md:text-[32px] lg:text-[36px] leading-[1.2]">
                    <CountUp
                      from={stat.from}
                      to={stat.to}
                      duration={2}
                      direction="up"
                      className="inline"
                    />
                    <span>+</span>
                  </div>
                </div>
                <div className="text-[#26784E] font-bold mt-2 text-[15px] leading-[1.3] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative bg-[#017D3E] text-white text-[16px] font-bold py-3 px-8 
            rounded-[10px] cursor-pointer shadow-lg shadow-[#017D3E]/20 transition-all duration-300
            hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Free Career Consultation
            </span>
            <span
              className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/30 skew-x-12 
               animate-[shine_2.5s_linear_infinite]"
            ></span>
            <span
              className="absolute inset-0 rounded-[10px] border-2 border-[#017D3E] opacity-70 
               animate-[glow_3s_ease-in-out_infinite]"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
