export default function ProjectCard({ title, description, tech = [], link }) {
    return (
      <div className="bg-gray-700 rounded-lg p-6 text-left shadow-md hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
        <p className="mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-500"
          >
            View Code →
          </a>
        )}
      </div>
    );
  }