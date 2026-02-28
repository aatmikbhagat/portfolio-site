import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-bg text-text flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I’m{" "}
        <span
          className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Aatmik
        </span>{" "}
        👋
      </h1>

      <p className="text-lg md:text-xl text-muted max-w-xl mb-8">
        I build applications and enjoy applying data analysis to solve real-world problems
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://www.linkedin.com/in/aatmik-bhagat"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl flex items-center gap-2 font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>

        <a
          href="mailto:aatmik@gmail.com"
          className="px-6 py-3 rounded-xl flex items-center gap-2 font-medium bg-card border border-border text-text hover:border-indigo-500 transition"
        >
          <FaEnvelope className="text-lg" />
          Email Me
        </a>
      </div>
    </section>
  );
}