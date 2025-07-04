
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS"],
      icon: "💻"
    },
    {
      title: "Cybersecurity",
      skills: ["Helmet.js", "CSP", "Secure HTTP Headers", "Clickjacking Prevention"],
      icon: "🔒"
    },
    {
      title: "Web Development",
      skills: ["Node.js", "REST APIs", "Full-Stack Development", "GUI Development"],
      icon: "🌐"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Gitpod", "Tkinter", "Microsoft Azure"],
      icon: "🛠️"
    }
  ];

  const certifications = [
    { name: "Microsoft Learn", count: "60+ modules", badge: "SC 200 Security Operations Analyst" },
    { name: "Salesforce Trailhead", count: "20+ Badges", badge: "AgentBlazer Champion" },
    { name: "HackerRank", count: "5⭐ Problem Solving", badge: "4⭐ Python" },
    { name: "LeetCode", count: "100+ Problems", badge: "DSA Solutions" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold gradient-text mb-4 text-center">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-center">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold gradient-text text-center mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 border-l-4 border-purple-500">
                <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-purple-400 mb-1">{cert.count}</p>
                <p className="text-gray-400">{cert.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
