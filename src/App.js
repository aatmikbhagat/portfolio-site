import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import About from "./components/About"
import WorkTabs from './components/WorkTabs';
import Certifications from './components/Certifications';
import CertificationCard from './components/CertificationCard';
import Skills from './components/Skills';
import KnownTechnologies from './components/KnownTechnologies';
import Footer from './components/Footer';

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
          tech={["React", "JavaScript", "Tailwind CSS"]}
          link="https://github.com/aatmikbhagat/portfolio-site"
        />
        <ProjectCard
          title="Stock Website"
          description="A responsive app to search and track live stock prices with real-time charting."
          tech={["Flask", "Yahoo Finance API", "HTML", "CSS", "SQLAlchemy"]}
          link="https://github.com/aatmikbhagat/stock-website"
        />
        <ProjectCard
          title="Finance Tracker"
          description="A full-stack finance tracker app that lets users record, categorize, and view their income and expenses, built with React, Node.js, Express, and MongoDB."
          tech={["React", "MongoDB", "TypeScript", "Axios", "Node.js", "CORS"]}
          link="https://github.com/aatmikbhagat/finance-tracker"
        />
      </Projects>
      <WorkTabs />
      <Certifications>
        <CertificationCard
        title="Databricks Accredited Generative AI Fundamentals"
        issuer="Databricks"
        date="May 2025"
        certificateUrl="/certificates/Aatmik Bhagat - Databricks Accredited Generative AI Fundamentals Certificate.pdf"
        />
        <CertificationCard
        title="C Programming Foundations"
        issuer="LinkedIn"
        date="May 2025"
        certificateUrl="/certificates/Aatmik Bhagat - LinkedIn Learning C Programming Foundations.pdf"
        />
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
        
      </Certifications>
      <KnownTechnologies />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;