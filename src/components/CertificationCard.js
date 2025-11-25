export default function CertificationCard({ title, issuer, date, certificateUrl }) {
    return (
      <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg text-left w-full max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-400 mb-1">{issuer}</p>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
        >
          View Certificate
        </a>
      </div>
    );
  }