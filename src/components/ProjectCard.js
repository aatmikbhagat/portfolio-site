export default function ProjectCard({ title, description, tech = [], link }) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-2xl font-semibold text-indigo-400 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-sm text-muted mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 group-hover:border-indigo-500/50 transition">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
          >
            View on GitHub 
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        )}
      </div>
    );
  }