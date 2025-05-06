export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#home"> Aatmik Bhagat</a>
        </div>
        <div className="flex space-x-8">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#work" className="hover:text-blue-400">Work</a>
          <a href="#certifications" className="hover:text-blue-400">Certifications</a>
        </div>
      </div>
    </nav>
  );
}
