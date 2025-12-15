import { useEffect, useState } from "react";

import SalesForceLogo from '../assets/images/Technology Icons/Salesforce Logo.png'
import AccelQLogo from '../assets/images/Technology Icons/AccelQ Logo.png'
import AzureDevOps from '../assets/images/Technology Icons/Azure DevOps Logo.png'
import ConfluenceLogo from '../assets/images/Technology Icons/Confluence Logo.png'
import SonarQubeLogo from '../assets/images/Technology Icons/SonarQube Logo.png'

export default function KnownTechnologies() {
    const tech = [
      { name: "Salesforce", logo: SalesForceLogo },
      { name: "AccelQ", logo: AccelQLogo },
      { name: "Azure DevOps", logo: AzureDevOps },
      { name: "Confluence", logo: ConfluenceLogo },
      { name: "SonarQube", logo: SonarQubeLogo },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % tech.length);
        }, 2000);
        return () => clearInterval(interval);
      }, []);
  
    return (
    <div className="w-full flex justify-center items-center py-10">
        <div className="relative w-full max-w-lg overflow-hidden">
        <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
        >
            {tech.map((t) => (
            <div
                key={t.name}
                className="flex-shrink-0 w-full flex justify-center"
            >
                <img
                src={t.logo}
                alt={t.name}
                className="w-52 h-52 object-contain drop-shadow-xl"
                />
            </div>
            ))}
        </div>
        </div>
    </div>
    );
}