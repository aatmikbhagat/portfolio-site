import headshot from '../assets/images/headshot.png';

export default function About() {
    return (
      <section id="about" className="py-24 bg-bg text-text px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
          <img
            src={headshot}
            alt="Aatmik Headshot"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
  
          <div>
            <h2 className="text-4xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                 Me
              </span>
            </h2>

            <p className="text-lg text-muted leading-relaxed">
              I'm Aatmik, a Computer Science student and developer from Wilfrid Laurier University. I am passionate about building responsive and user-focused applications.
              <br />
              <br /> 
              I've worked with technologies like {" "} 
              <span className="text-indigo-400">Salesforce</span> during my time at
              CIBC, and{" "}
              <span className="text-indigo-400">React</span> and{" "}
              <span className="text-indigo-400">Flask</span> through personal
              projects.
            </p>
          </div>
        </div>
      </section>
    );
  }