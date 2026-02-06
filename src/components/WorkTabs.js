import { useState } from "react";
import cibcLogo from '../assets/images/Company Logos/CIBC Logo.png';
import farmBoyLogo from '../assets/images/Company Logos/Farm Boy.png';
import somLogo from '../assets/images/Company Logos/SoM Logo.png';
import cybersecLogo from '../assets/images/Company Logos/CyberSec Logo.png';


const jobs = [
  {
    id: 0,
    company: "CIBC",
    logo: cibcLogo,
    role: "Application/Software Developer",
    contractLen: "Co-op",
    date : "Sept. 2025 - Dec. 2025",
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
        "Supported student learning and progress through structured problem-solving and individualized instruction"
    ]
  }
];

export default function WorkTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="py-24 bg-bg px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-1/3 space-y-3">
            {jobs.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActive(index)}
                className={`w-full text-left rounded-xl px-4 py-3 transition
                  border ${
                    index === active
                      ? "bg-card border-indigo-500/50 shadow-[0_0_25px_rgba(99,102,241,0.2)]"
                      : "bg-card border-border hover:border-indigo-500/30"
                  }`}
              >
                <p className="font-medium text-sm">{job.role}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted">{job.company}</span>
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-5 h-5 ml-auto object-contain"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div
            key={jobs[active].id}
            className="md:w-2/3 bg-card border border-border rounded-2xl p-6
                       animate-fade-in-up"
          >
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-semibold">
                {jobs[active].role}
              </h3>

              {jobs[active].logo && (
                <img
                  src={jobs[active].logo}
                  alt={`${jobs[active].company} logo`}
                  className="w-7 h-7 ml-auto object-contain"
                />
              )}
            </div>

            <p className="text-indigo-400 font-medium">
              {jobs[active].company}
            </p>
            <p className="text-sm text-muted mb-4">
              {jobs[active].date}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
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