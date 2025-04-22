// components/WhyCyberSecurity.js
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

// Each card now has a unique ID
const cards = [
  {
    id: 1,
    name: "Dhanshree Thekal",
    label: "Student",
    description:
      "I really appreciate ITpreneur for organizing the Open Campus drive. It was a well-managed event, providing a great platform for freshers and job seekers to connect with potential employers. The staff was very supportive, Thank you, ITpreneur..!!",
  },
  {
    id: 2,
    name: "Sujit Khojare",
    label: "Student",
    description:
      "Huge thanks to ITPRENEUR Pune for helping me land a job at Myospaz Software Technologies! The training by Vinayak Sir was outstanding, with in-depth knowledge and hands-on experience that truly made a difference. The placement support from Ms. Vivek Shukla was exceptional, guiding me at every step and ensuring a smooth hiring process. The entire team at ITPRENEUR is dedicated, supportive, and committed to student success. I highly recommend this institute to anyone looking for quality training and guaranteed career growth!",
  },
  {
    id: 3,
    name: "Snehal Mahasagar",
    label: "Student",
    description:
      "Big thanks to ITPRENEUR Pune for placing me in Myospaz Software technologies. Aishwarya Mam's training was outstanding, and the placement support from Ms. Vivek Shukla was very helpful. Highly recommend this institute!",
  },
  {
    id: 4,
    name: "Vishakha Taur",
    label: "Student",
    description:
      "It was really fascinating experience . All teachers are really helping and supporting All team members help till got job . I will be always thankful for support and guidance .",
  },
  {
    id: 5,
    name: "Apeksha Chavan",
    label: "Student",
    description:
      "I had a great experience with iTpreneur. The training was well-structured, covering all the essential concepts with hands-on practice. The trainers were highly knowledgeable, supportive, and always ready to clarify doubts. The placement team provided excellent guidance, from resume building to interview preparation. Their continuous support helped me secure a great opportunity. I appreciate the efforts of the entire team in making this journey smooth and successful.",
  },
  {
    id: 6,
    name: "Mahesh Chivare",
    label: "Student",
    description:
      "Big thanks to ITPRENEUR Pune for placing me in Myopsaz Technology Ltd. Vinayak sir training was outstanding, and the placement support from Ms. Vivek Shukla was very helpful. Highly recommend this institute!",
  },
  {
    id: 7,
    name: "Rohan Kumbhojkar",
    label: "Student",
    description:
      "I appreciate the efforts of ITpreneur Institute in providing quality training and career guidance. The course content was well-structured, and the faculty was knowledgeable and supportive.The job openings were always aligned with my skill set.",
  },
  {
    id: 8,
    name: "Shivam Mandlik",
    label: "Student",
    description:
      "It was a great experience while training in Itprenur. All the teachers and mentors are very cooperative. Especially Vinayak sir. He is great mentor. Also thankful for placement department. We received many great opportunities to get our dream job.",
  },
];

export default function HearFromStud() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [showFull, setShowFull] = useState({}); // use id instead of index

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div id="testimonials">
      <section className="px-[5%] rm bg-white">
        <div className="text-center mb-10">
          <h2 className="font-bold text-[#163123] h2t leading-[1.2]">
            Hear It From Our Students
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card) => {
                const shortDesc =
                  card.description.split(" ").slice(0, 40).join(" ") + "...";
                const isLong = card.description.split(" ").length > 20;

                return (
                  <div
                    key={card.id}
                    className="embla__slide shrink-0 px-3 md:basis-1/2 lg:basis-1/3 basis-full"
                  >
                    <div className="bg-[#F1F3EF] border-[1px] border-[#EDF2E4] flex flex-col items-start gap-14 rounded-xl h-full p-5 text-left hover:shadow-lg transition-all duration-200">
                      <div className="flex flex-col gap-5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Image
                              key={i}
                              src="/icon/star.png"
                              alt="Star"
                              width={20}
                              height={20}
                              priority
                            />
                          ))}
                        </div>

                        <h3 className="text-[16px] font-normal text-[#163123] mb-2">
                          {showFull[card.id] ? card.description : shortDesc}
                          {isLong && (
                            <span
                              onClick={() =>
                                setShowFull((prev) => ({
                                  ...prev,
                                  [card.id]: !prev[card.id],
                                }))
                              }
                              className="text-[#26784E] ml-2 cursor-pointer underline"
                            >
                              {showFull[card.id] ? "Read Less" : "Read More"}
                            </span>
                          )}
                        </h3>

                        <div>
                          <p className="text-[#163123] text-[20px] font-bold">
                            {card.name}
                          </p>
                          <p className="text-[16px] mt-2 font-normal text-[#163123] ">
                            {card.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            disabled={!canScrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}
