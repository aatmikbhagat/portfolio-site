import { useState } from "react";
import cibcLogo from '../assets/images/CIBC Logo.png';
import farmBoyLogo from '../assets/images/Farm Boy.png';
import somLogo from '../assets/images/SoM Logo.png';
import cybersecLogo from '../assets/images/CyberSec Logo.png';


const jobs = [
  {
    id: 0,
    company: "CIBC",
    logo: cibcLogo,
    role: "Application/Software Developer",
    contractLen: "Co-op",
    date : "Sept. 2025 - Present",
    bullets: [
      "Collaborated with QA teams to evaluate and test AccelQ as a potential automation tool, serving as the primary developer supporting the research and hands-on testing to determine it's suitability for the development workflow.",
      "Developed and tested functionality using Salesforce's AgentForce AI, building a tool to automatically fetch user stories while leveraging AI-generated task guidance to improve developer productivity and workflow efficiency.",
      "Researched and assessed SonarQube as a code-quality solution, providing recommendations on how it could enhance code reviews on how it could enhance code reviews, improve maintainability, and strengthen development practices across the team."
    ]
  },
  {
    id: 1,
    company: "Laurier CyberSecurity",
    logo: cybersecLogo,
    role: "Project Developer",
    contractLen: "",
    date: "Sept. 2024 – Aug. 2025",
    bullets: [
      "Worked in a team to create and maintain LCIC website",
      "Streamlined communication between front-end and back-end systems to ensure real-time updates of event planning calendars",
      "Enhanced user experience by providing accurate and timely information for effective event scheduling and coordination"
    ]
  },
  {
    id: 2,
    company: "SoakNScrub",
    logo: null,
    role: "Field Service Technician",
    date: "Jun. 2023 – Aug. 2024",
    bullets: [
        "Cleaned residential and commercial windows, delivering streak-free results with industry-standard tools",
        "Provided excellent customer service, addressing client requests and completing tasks on schedule with high attention to detail",
        "Maintained equipment and supplies to ensure quality and efficiency on each job"
    ]
  },
  {
    id: 3,
    company: "Farm Boy Inc.",
    logo: farmBoyLogo,
    role: "Customer Sales Representative",
    date: "Jun. 2022 - Sept. 2022",
    bullets: [
        "Learned to identify customer needs or desires to recommend the appropriate product or service",
        "Worked with colleagues to resolve customer complaints",
        "Stocked and maintained shelves of merchandise"
    ]
  },
  {
    id: 4,
    company: "Spirit of Math Inc.",
    logo: somLogo,
    role: "Assistant Teacher",
    date: "Oct. 2019 - Jun. 2022",
    bullets: [
        "Maintained open communication with parents, teachers, and administrators to discuss student progress and address individual needs",
        "Supported classroom success through collaboration on curriculum design, project development, assessments, and grading",
        "Fostered a safe and engaging learning environment, encouraging student development and active participation"
    ]
  }
];

export default function WorkTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3 flex flex-col gap-4">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActive(index)}
                className={`text-left px-4 py-3 rounded-lg transition font-medium ${
                  index === active
                    ? "bg-blue-700 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {job.role} <br />
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{job.company}</span>
                  {job.logo && <img 
                    src={job.logo}
                    alt={'${job.company} Logo'}
                    className="w-6 h-6 md:w-6 md:h-6 ml-auto"
                  />}
                </div>
                
              </button>
            ))}
          </div>

          <div
            key={jobs[active].id}
            className="md:w-2/3 bg-gray-800 p-6 rounded-lg transition-all duration-500 ease-in-out animate-fade-in-up"
            >
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold mb-1">{jobs[active].role}</h3>
              {jobs[active].logo && <img
                src={jobs[active].logo}
                alt={'${jobs[active].company} Logo'}
                className="w-6 h-6 md:w-9 md: h-9 ml-auto"
                />}
            </div>
            <p className="text-blue-400 mb-2">{jobs[active].company}</p>
            <p className="text-sm text-gray-400 mb-4">{jobs[active].date}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {jobs[active].bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}