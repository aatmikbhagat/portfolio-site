import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certifications({ children }) {
  const [active, setActive] = useState(0);
  const cards = Array.isArray(children) ? children : [children];

  const next = () => setActive((prev) => (prev + 1) % cards.length);
  const prev = () => setActive((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section id="certifications" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>

        {/* Arrows + Card Container */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>

          {/* Fixed-size Card Container */}
          <div className="w-[500px] min-h-[300px] flex items-center justify-center">
            <div
              key={active}
              className="transition-all duration-500 ease-in-out animate-fade-in w-full"
            >
              {cards[active]}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Bubble Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === active ? "bg-blue-500 scale-110" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}