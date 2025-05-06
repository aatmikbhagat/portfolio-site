import ProjectCard from './ProjectCard';

export default function Projects({ children }) {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}