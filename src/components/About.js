import headshot from '../assets/images/headshot.png';

export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
          <img
            src={headshot}
            alt="Aatmik Headshot"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
  
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Aatmik, a Computer Science student and developer from Wilfrid Laurier University. I am passionate about building responsive and user-focused applications. 
              In the past I have worked with technologies such as Salesforce from my time at CIBC, as well as React and Flask from my personal projects.
            </p>
          </div>
        </div>
      </section>
    );
  }