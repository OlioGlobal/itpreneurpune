import React, { useState, useRef, useEffect } from "react";

const StickyVideoPlayer = ({
  position = "bottom-right",
  margin = 20,
  gifUrl,
  videoUrl,
  width = 200,
  height = 150,
  autoPlay = true,
  showCloseButton = true,
  zIndex = 1000,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Dynamic inline styles for custom margins
  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return { top: `${margin}px`, left: `${margin}px` };
      case "top-right":
        return { top: `${margin}px`, right: `${margin}px` };
      case "bottom-left":
        return { bottom: `${margin}px`, left: `${margin}px` };
      case "bottom-right":
      default:
        return { bottom: `${margin}px`, right: `${margin}px` };
      case "center":
        return { top: "50%", left: "50%" };
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsVideoLoading(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVideoLoading(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky Video Container with Close Button Outside */}
      <div
        className={`
          fixed transition-all duration-300 ease-out
          ${
            isModalOpen
              ? "opacity-0 scale-80 pointer-events-none"
              : "animate-in slide-in-from-bottom-5 duration-500"
          }
        `}
        style={{
          ...getPositionStyles(),
          width: `${width}px`,
          height: `${height}px`,
          zIndex: zIndex,
        }}
      >
        {/* Close Button Outside - Top Right Corner */}
        {showCloseButton && (
          <button
            className="absolute -top-5 -right-5   text-black rounded-full w-7 h-7 flex items-center justify-center transition-all duration-200  z-10"
            onClick={() => setIsVisible(false)}
            aria-label="Close sticky video player"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        {/* Video Container */}
        <div
          className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl backdrop-blur-md border-2 border-white/10 cursor-pointer hover:scale-105 hover:shadow-3xl transition-all duration-300 group"
          onClick={openModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
          aria-label="Open video player"
        >
          {/* GIF or Placeholder */}
          {gifUrl ? (
            <img
              src={gifUrl}
              alt="Video preview"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-gray-800 transition-all duration-300 hover:bg-white hover:scale-110">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Full Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-300"
          style={{ zIndex: zIndex + 1000 }}
          ref={modalRef}
          onClick={handleModalClick}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-400 ease-out">
            {/* Modal Close Button */}
            <button
              className="absolute -top-12 right-0 bg-white/10 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-red-600/80 hover:scale-110 backdrop-blur-md"
              onClick={closeModal}
              aria-label="Close video player"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              {/* Loading Spinner */}
              {isVideoLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 backdrop-blur-sm">
                  <div className="animate-spin rounded-full h-10 w-10 border-3 border-white/30 border-t-white mb-4"></div>
                  <p className="text-sm">Loading video...</p>
                </div>
              )}

              {/* Video Element */}
              <video
                ref={videoRef}
                className={`w-full h-full max-h-[80vh] rounded-xl transition-opacity duration-300 ${
                  isVideoLoading ? "opacity-0" : "opacity-100"
                }`}
                controls
                onLoadedData={handleVideoLoad}
                onError={() => setIsVideoLoading(false)}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyVideoPlayer;
