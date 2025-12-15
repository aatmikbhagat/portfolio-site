export default function CertificationCard({ title, issuer, date, certificateUrl }) {
    return (
      <div className="bg-card text-text rounded-2xl p-8  w-full max-w-xl mx-auto border border-border shadow-lg transition hover:shadow-xl">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-indigo-400 font-medium mb-1">{issuer}</p>
        <p className="text-sm text-muted mb-6">{date}</p>
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
        >
          View Certificate
        </a>
      </div>
    );
  }