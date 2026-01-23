import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from '../assets/images/Personal Images/Image 1.png'
import img2 from '../assets/images/Personal Images/Image 2.png'
import img3 from '../assets/images/Personal Images/Image 3.png'
import img4 from '../assets/images/Personal Images/Image 4.png'
import img5 from '../assets/images/Personal Images/Image 5.png'
import img6 from '../assets/images/Personal Images/Image 6.png'

export default function PersonalGallery() {
    const images = [img1, img2, img3, img4, img5, img6];
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState('next');
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        goToSlide((active + 1) % images.length, 'next');
      }, 5000);
  
      return () => clearInterval(interval);
    }, [active, images.length]);

    const goToSlide = (index, dir) => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setActive(index);
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    };
  
    const next = () => goToSlide((active + 1) % images.length, 'next');
    const prev = () => goToSlide((active - 1 + images.length) % images.length, 'prev');
  
    return (
      <section className="py-24 bg-bg px-4">
        <div className="max-w-4xl mx-auto text-center">
  
          <h2 className="text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Beyond Software
            </span>
          </h2>
  
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-bg flex items-center justify-center h-[480px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Personal moment ${index + 1}`}
                  className={`
                    absolute h-[480px] w-auto max-w-full object-contain
                    transition-all duration-500 ease-in-out
                    ${index === active 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : direction === 'next'
                        ? 'opacity-0 translate-x-full scale-95'
                        : 'opacity-0 -translate-x-full scale-95'
                    }
                  `}
                />
              ))}
            </div>
  
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
            >
              <FaChevronLeft />
            </button>
  
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
  
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index, index > active ? 'next' : 'prev')}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === active
                    ? "bg-indigo-500 scale-125"
                    : "bg-gray-500 hover:bg-gray-400 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }