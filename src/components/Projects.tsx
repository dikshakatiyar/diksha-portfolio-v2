
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "C-Sarathi",
      subtitle: "College Helpdesk Web App",
      description: "Full-stack secure web application built using Node.js and REST APIs. Integrated Helmet.js for comprehensive security headers and implemented academic support features for students.",
      tech: ["Node.js", "REST APIs", "Helmet.js", "Security Headers"],
      period: "Sep 2023 – Dec 2023",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Snake and Ladder Game",
      subtitle: "Python GUI Application",
      description: "Interactive game developed using Tkinter with object-oriented programming principles. Features include dice logic, player movement tracking, and dynamic board visualization.",
      tech: ["Python", "Tkinter", "OOP", "GUI Development"],
      period: "Aug 2024 – Sep 2024",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Cybersecurity Research",
      subtitle: "Security Analysis Projects",
      description: "Various security research projects focusing on web application vulnerabilities, secure coding practices, and implementation of security frameworks.",
      tech: ["Security Analysis", "Vulnerability Assessment", "Secure Coding"],
      period: "Ongoing",
      gradient: "from-cyan-600 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">My Work</h2>
          <p className="text-xl text-gray-400 mb-8">Projects & Innovations</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="glass-effect rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-purple-500/50">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-2xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                <p className="text-purple-400 text-center mb-4">{project.subtitle}</p>
                <p className="text-gray-400 text-sm text-center mb-6">{project.period}</p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project reflects my ability to solve complex problems and work with different technologies.
          </p>
          <a
            href="https://github.com/dikshakatiyar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
