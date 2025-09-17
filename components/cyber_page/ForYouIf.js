// components/CyberSecurityBenefits.js
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play } from "lucide-react";

export default function CyberSecurityBenefits({ reasons, title, subtitle }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample testimonial videos - replace with your actual video data
  const testimonialVideos = [
    {
      id: 1,
      thumbnail: "/thumbnails/testimonial1.jpg", // Replace with actual thumbnail
      videoUrl: "/videos/testimonial1.mp4", // Replace with actual video URL
    },
    {
      id: 2,
      thumbnail: "/thumbnails/testimonial2.jpg",
      videoUrl: "/videos/testimonial2.mp4",
    },
    {
      id: 3,
      thumbnail: "/thumbnails/testimonial3.jpg",
      videoUrl: "/videos/testimonial3.mp4",
    },
    {
      id: 4,
      thumbnail: "/thumbnails/testimonial4.jpg",
      videoUrl: "/videos/testimonial4.mp4",
    },
  ];

  const openVideoPopup = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = "hidden";
  };

  const closeVideoPopup = () => {
    setSelectedVideo(null);
    setIsPopupOpen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  return (
    <div className="px-[5%] rm max" data-aos="zoom-in">
      <div className="text-center mb-8">
        <h2 className="font-bold text-[#163123] h2t leading-[1.2]">{title}</h2>
        <p className="text-[#4D5C54] text-[15px] md:text-[16px] mt-2">
          {subtitle}
        </p>
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {testimonialVideos.map((video) => (
          <div
            key={video.id}
            className="bg-[#F1F3EF] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => openVideoPopup(video)}
          >

            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={`Testimonial ${video.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

   
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play
                    className="w-8 h-8 text-[#017D3E] ml-1"
                    fill="currentColor"
                  />
                </div>
              </div>


              <div className="absolute top-3 right-3">
                <div className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  Reel
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* {isPopupOpen &&
        selectedVideo &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
            style={{ zIndex: 99999 }}
          >
            <div className="relative w-full max-w-md mx-auto">
   
              <button
                onClick={closeVideoPopup}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>


              <div className="bg-black rounded-lg overflow-hidden h-auto">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onError={(e) => console.error("Video error:", e)}
                >
                  Your browser does not support the video tag.
                </video>
              </div>


              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Testimonial Video
                </h3>
              </div>
            </div>


            <div
              className="absolute inset-0 -z-10"
              onClick={closeVideoPopup}
            ></div>
          </div>,
          document.body
        )} */}

      {/* Original commented code preserved */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#F1F3EF] p-6 flex flex-col items-start gap-5 justify-between rounded-xl text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col gap-5">
              <Image
                src="/icon/que.png"
                alt="question icon"
                width={54}
                height={54}
              />
              <p className="text-[17px]  sm:text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#163123] leading-[1.3]">
                {reason}
              </p>
            </div>
            <div className=" w-6 rounded"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative bg-[#017D3E] text-white text-[16px] font-bold py-3 px-8 
             rounded-[10px] cursor-pointer shadow-lg shadow-[#017D3E]/20 transition-all duration-300
             hover:bg-white hover:text-[#017D3E] hover:shadow-[#017D3E]/20 overflow-hidden"
        >
          {/* Text + Icons */}
          <span className="relative z-10 flex items-center gap-2">
            Get Free Career Consultation
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
  );
}
