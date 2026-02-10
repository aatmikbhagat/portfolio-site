export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-white"
        >
          Aatmik Bhagat
        </a>

        <div className="flex space-x-8 text-sm font-medium">
          {["Home", "About", "Work", "Projects", "Certifications", "Technologies"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}