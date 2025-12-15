import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Certifications({ children }) {
  const [active, setActive] = useState(0);
  const cards = Array.isArray(children) ? children : [children];

  const next = () => setActive((prev) => (prev + 1) % cards.length);
  const prev = () => setActive((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section id="certifications" className="py-24 bg-bg text-text px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Certifications
          </span>
        </h2>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-card border border-border hover:border-indigo-500 hover:shadow-xl transition"
            aria-label="Previous certification"
          >
            <FaChevronLeft />
          </button>
          <div className="w-[500px] min-h-[300px] flex items-center justify-center">
            <div
              key={active}
              className="w-full transition-all duration-500 ease-in-out animate-fade-in"
            >
              {cards[active]}
            </div>
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-card border border-border hover:border-indigo-500 hover:shadow-xl transition"
            aria-label="Next certification"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition transform 
              ${
                index === active ? "bg-gradient-to-r from-indigo-500 to-purple-600 scale-110" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}