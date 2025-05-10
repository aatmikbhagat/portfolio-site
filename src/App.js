import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import About from "./components/About"
import WorkTabs from './components/WorkTabs';
import Certifications from './components/Certifications';
import CertificationCard from './components/CertificationCard';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects>
        <ProjectCard
          title="Personal Portfolio"
          description="This portfolio website, designed with Tailwind and React."
          tech={["React", "Tailwind"]}
          link="https://github.com/aatmikbhagat/portfolio-site"
        />
        <ProjectCard
          title="Stock Tracker"
          description="A responsive app to search and track live stock prices with real-time charting."
          tech={["React", "Yahoo Finance API", "HTML", "CSS"]}
          link="https://github.com/aatmikbhagat/stock-website"
        />
      </Projects>
      <WorkTabs />
      <Certifications>
        <CertificationCard
        title="Learning Java 11"
        issuer="LinkedIn"
        date="Oct. 2024"
        certificateUrl="/certificates/Aatmik Bhagat - LinkedIn Learning Java 11 Certification.pdf"
        />
        <CertificationCard
        title="Python Essential Training"
        issuer="LinkedIn"
        date="Oct. 2024"
        certificateUrl="/certificates/Aatmik Bhagat - LinkedIn Learning Python Essential Training.pdf"
        />
        <CertificationCard
        title="Databricks Accredited Generative AI Fundamentals"
        issuer="Databricks"
        date="May 2025"
        certificateUrl="/certificates/Aatmik Bhagat - Databricks Accredited Generative AI Fundamentals Certificate.pdf"
        />
      </Certifications>
    </div>
  );
}

export default App;