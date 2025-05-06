import { useState } from "react";

const jobs = [
  {
    id: 0,
    company: "Laurier CyberSecurity",
    role: "Web Developer",
    date: "Sept. 2024 – Present",
    bullets: [
      "Worked in a team to create and maintain LCIC website",
      "Streamlined communication between front-end and back-end systems to ensure real-time updates of event planning calendars",
      "Enhanced user experience by providing accurate and timely information for effective event scheduling and coordination"
    ]
  },
  {
    id: 1,
    company: "SoakNScrub",
    role: "Window Cleaner",
    date: "Jun. 2023 – Aug. 2024",
    bullets: [
        "Cleaned residential and commercial windows, delivering streak-free results with industry-standard tools",
        "Provided excellent customer service, addressing client requests and completing tasks on schedule with high attention to detail",
        "Maintained equipment and supplies to ensure quality and efficiency on each job"
    ]
  },
  {
    id: 2,
    company: "Farm Boy Inc.",
    role: "Customer Sales Representative",
    date: "Jun. 2022 - Sept. 2022",
    bullets: [
        "Learned to identify customer needs or desires to recommend the appropriate product or service",
        "Worked with colleagues to resolve customer complaints",
        "Stocked and maintained shelves of merchandise"
    ]
  },
  {
    id: 3,
    company: "Spirit of Math Inc.",
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

        <div className="flex flex-col md:flex-row gap-8">
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
                <span className="text-sm text-gray-400">{job.company}</span>
              </button>
            ))}
          </div>

          <div
            key={jobs[active].id}
            className="md:w-2/3 bg-gray-800 p-6 rounded-lg transition-all duration-500 ease-in-out animate-fade-in-up"
            >
            <h3 className="text-2xl font-bold mb-1">{jobs[active].role}</h3>
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