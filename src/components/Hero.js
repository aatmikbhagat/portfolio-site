import { FaLinkedin, FaEnvelope } from "react-icons/fa";

  export default function Hero() {
    return (
      <section
        id="home"
        className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center text-center px-4"
        >
        <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Aatmik 👋</h1>
        <p className="text-lg max-w-xl mb-6">
          I'm a student and web developer focused on building elegant, fast, and accessible web apps.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/aatmik-bhagat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Download Resume
          </a>

          <a
            href="mailto:aatmik@gmail.com"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </a>
        </div>
      </section>
    );
  }