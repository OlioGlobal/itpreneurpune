import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, StarHalf, StarOff } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Dhanshree Thekal",
    date: "2025-04-03",
    avatar: "https://i.pravatar.cc/40?img=1",
    rating: 4,
    review:
      "I really appreciate ITpreneur for organizing the Open Campus drive. It was a well-managed event, providing a great platform for freshers and job seekers to connect with potential employers. The staff was very supportive, Thank you, ITpreneur..!!",
  },
  {
    id: 2,
    name: "sujit khojare",
    date: "2025-04-03",
    avatar: "https://i.pravatar.cc/40?img=2",
    rating: 5,
    review:
      "Huge thanks to ITPRENEUR Pune for helping me land a job at Myospaz Software Technologies! The training by Vinayak Sir was outstanding, with in-depth knowledge and hands-on experience that truly made a difference. The placement support from Ms. Vivek Shukla was exceptional, guiding me at every step and ensuring a smooth hiring process. The entire team at ITPRENEUR is dedicated, supportive, and committed to student success. I highly recommend this institute to anyone looking for quality training and guaranteed career growth!",
  },
  {
    id: 1,
    name: "Snehal Mahasagar",
    date: "2025-04-03",
    avatar: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    review:
      "Big thanks to ITPRENEUR Pune for placing me in Myospaz Software technologies. Aishwarya Mam's training was outstanding, and the placement support from Ms. Vivek Shukla was very helpful. Highly recommend this institute!",
  },
  {
    id: 2,
    name: "Vishakha Taur",
    date: "April 2, 2024",
    avatar: "https://i.pravatar.cc/40?img=2",
    rating: 5,
    review:
      "It was really fascinating experience . All teachers are really helping and supporting All team members help till got job . I will be always thankful for support and guidance .",
  },

  {
    id: 1,
    name: "Apeksha Chavan",
    date: "2025-04-03",
    avatar: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    review:
      "I had a great experience with iTpreneur. The training was well-structured, covering all the essential concepts with hands-on practice. The trainers were highly knowledgeable, supportive, and always ready to clarify doubts. The placement team provided excellent guidance, from resume building to interview preparation. Their continuous support helped me secure a great opportunity. I appreciate the efforts of the entire team in making this journey smooth and successful.",
  },
  {
    id: 2,
    name: "Mahesh Chivare",
    date: "2025-04-03",
    avatar: "https://i.pravatar.cc/40?img=2",
    rating: 5,
    review:
      "Big thanks to ITPRENEUR Pune for placing me in Myopsaz Technology Ltd. Vinayak sir training was outstanding, and the placement support from Ms. Vivek Shukla was very helpful. Highly recommend this institute!",
  },

  {
    id: 1,
    name: "Rohan Kumbhojkar",
    date: "2025-04-02",
    avatar: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    review:
      "I appreciate the efforts of ITpreneur Institute in providing quality training and career guidance. The course content was well-structured, and the faculty was knowledgeable and supportive.The job openings were always aligned with my skill set.",
  },
  {
    id: 2,
    name: "shivam mandlik",
    date: "2025-04-02",
    avatar: "https://i.pravatar.cc/40?img=2",
    rating: 5,
    review:
      "It was a great experience while training in Itprenur. All the teachers and mentors are very cooperative. Especially Vinayak sir. He is great mentor. Also thankful for placement department. We received many great opportunities to get our dream job.",
  },
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [progress, setProgress] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setProgress(
        (emblaApi.selectedScrollSnap() /
          (emblaApi.scrollSnapList().length - 1)) *
          100
      );
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const toggleReadMore = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-[5%] py-16 text-center">
      <div className="mb-8">
        <p className="text-[#26784e] mb-2 text-[18px] md:text-[22px] font-bold">
          TESTIMONIALS
        </p>
        <h2 className="text-[#0a1f14] font-bold text-[24px]  sm:text-[32px] md:text-[35px] lg:text-[40px]  leading-[1.2]">
          Hear It From Our Students
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap:5 sm:gap-10 ">
        <div className="lg:w-[20%] flex flex-col justify-center items-center">
          <p className="text-[18px] md:text-[24px] font-bold">EXCELLENT</p>

          <div className="flex items-center gap-1 mt-2  text-yellow-500">
            <img src="/icon/full.png" alt="" className="h-8" />
            <img src="/icon/full.png" alt="" className="h-8" />
            <img src="/icon/full.png" alt="" className="h-8" />
            <img src="/icon/full.png" alt="" className="h-8" />
            <img src="/icon/half.png" alt="" className="h-8" />
          </div>
          <p className="text-[16px] mt-2 sm:text-[18px]">
            Based on <span className="font-bold">2042 reviews</span>
          </p>
          <img src="/icon/google-1.png" alt="" className="h-20" />
        </div>
        <div className="lg:w-[80%]">
          <div className="text-center  flex flex-col gap-8   relative">
            <div className="relative w-full overflow-hidden">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container flex">
                  {reviews.map((review) => {
                    const isExpanded = expandedId === review.id;
                    const shortReview = review.review.slice(0, 150) + "...";

                    return (
                      <div
                        key={review.id}
                        className="embla__slide shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2"
                      >
                        <div className="bg-gray-100 p-4 rounded-xl shadow-lg text-left flex flex-col h-full">
                          {/* Top: Avatar, Name, Date, Logo */}
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-3">
                              <img
                                src={"/icon/google.png"}
                                alt="google"
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <h4 className="text-[14px] font-medium">
                                  {review.name}
                                </h4>
                                <p className="text-[12px] text-gray-500">
                                  {review.date}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={i < review.rating ? "#FFD700" : "#E5E7EB"}
                                viewBox="0 0 24 24"
                                className="w-4 h-4"
                              >
                                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.865L19.336 24 12 20.126 4.664 24 6 15.613 0 9.748l8.332-1.593z" />
                              </svg>
                            ))}
                          </div>

                          {/* Review Text */}
                          <p className="text-[15px] text-[#000000]">
                            {isExpanded ? review.review : shortReview}
                          </p>

                          {/* Read More / Less */}
                          <button
                            className="text-[13px] text-gray-500 cursor-pointer hover:text-gray-700 mt-1 text-start hover:underline
                          "
                            onClick={() => toggleReadMore(review.id)}
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollPrev}
                className=" text-white  rounded-full"
              >
                <img src="/icon/a1.png" alt="" className="h-8 " />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollNext}
                className=" text-white p-2 rounded-full"
              >
                <img src="/icon/a2.png" alt="" className="h-8 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
