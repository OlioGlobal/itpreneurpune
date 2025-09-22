import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProfessionalMarqueeForSimpleText = () => {
  const [key, setKey] = useState(0);

  const marqueeItems = [
    "iTpreneur is a hallmark of quality and a highly regarded IT Training & Job Placement institute in India",
  ];

  // Reset animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Create content with separators
  const createMarqueeContent = () => {
    const content = [];

    // Repeat items 2 times for seamless loop
    for (let repeat = 0; repeat < 1; repeat++) {
      marqueeItems.forEach((item, index) => {
        content.push(
          <div
            key={`item-${repeat}-${index}`}
            className="flex items-center flex-shrink-0"
          >
            {/* Star separator */}
            <motion.div
              className="text-green-400 mx-3 sm:mx-4 md:mx-6"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </motion.div>

            {/* Text content */}
            <span className="text-white text-xs sm:text-sm md:text-[15px] font-bold tracking-wide drop-shadow-sm whitespace-nowrap">
              {item}
            </span>
          </div>
        );
      });
    }

    return content;
  };

  return (
    <div className="z-[50] w-full bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 border-b border-green-500/20 shadow-lg backdrop-blur-sm overflow-hidden">
      {/* Responsive height */}
      <div className="h-10 sm:h-12 md:h-13 flex items-center">
        <div className="w-full overflow-hidden relative">
          <motion.div
            key={key} // Force re-render for reset
            className="flex whitespace-nowrap"
            initial={{ x: "50%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{
              transition: { duration: 40, ease: "linear" },
            }}
          >
            {createMarqueeContent()}
          </motion.div>
        </div>
      </div>

      {/* Mobile optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          .whitespace-nowrap {
            animation-duration: 35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-safe {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalMarqueeForSimpleText;
