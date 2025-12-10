'use client';

import { experiences } from "@/utils/data/experience";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ExpCard from "./exp-card.jsx";

function Experience() {
  // Start at index 1 because we'll add a clone at the beginning
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef(null);

  // Create extended array with clones for infinite loop
  const extendedExperiences = [
    experiences[experiences.length - 1], // Clone of last item at the beginning
    ...experiences,
    experiences[0], // Clone of first item at the end
  ];

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because of the clone at the beginning
  };

  // Handle the transition end to create infinite loop effect
  const handleTransitionEnd = () => {
    // If we're at the clone of the last item (index 0), jump to the real last item
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(experiences.length);
    }
    // If we're at the clone of the first item (last position), jump to the real first item
    else if (currentIndex === experiences.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Re-enable transitions after jumping
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24">
      <div className="mb-8">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#2F2F2F] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            EXPERIENCE
          </span>
          <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      <div className="pt-24 relative">
        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous experience"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next experience"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden">
            <div
              ref={transitionRef}
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedExperiences.map((experience, index) => (
                <div
                  key={`exp-${index}`}
                  className="w-full flex-shrink-0 px-12"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-300">
                    <ExpCard exp={experience} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  (currentIndex === index + 1) || 
                  (currentIndex === 0 && index === experiences.length - 1) ||
                  (currentIndex === experiences.length + 1 && index === 0)
                    ? "w-10 h-3 bg-gradient-to-r from-pink-500 to-violet-600"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
