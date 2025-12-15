import SalesForceLogo from "../assets/images/Technology Icons/Salesforce Logo.png";
import AccelQLogo from "../assets/images/Technology Icons/AccelQ Logo.png";
import AzureDevOps from "../assets/images/Technology Icons/Azure DevOps Logo.png";
import ConfluenceLogo from "../assets/images/Technology Icons/Confluence Logo.png";
import SonarQubeLogo from "../assets/images/Technology Icons/SonarQube Logo.png";
import VercelLogo from "../assets/images/Technology Icons/Vercel Logo.png";
import GithubLogo from "../assets/images/Technology Icons/Github Logo.png";

const tech = [
  { name: "Salesforce", logo: SalesForceLogo },
  { name: "AccelQ", logo: AccelQLogo },
  { name: "Azure DevOps", logo: AzureDevOps },
  { name: "Confluence", logo: ConfluenceLogo },
  { name: "SonarQube", logo: SonarQubeLogo },
  { name: "Vercel", logo: VercelLogo},
  { name: "Github", logo: GithubLogo},
];

export default function KnownTechnologies() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tech.map((t) => (
            <div
              key={t.name}
              className="group bg-card border border-border rounded-2xl
                         flex flex-col items-center justify-center p-6
                         transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
            >
              <img
                src={t.logo}
                alt={t.name}
                className="w-20 h-20 object-contain mb-4
                           transition group-hover:scale-110"
              />

              <p className="text-sm text-muted group-hover:text-text transition">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}