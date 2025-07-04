
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate cybersecurity enthusiast and software developer currently pursuing my 
              BTech in Computer Science & Engineering with a specialization in Cyber Security at 
              Dr. A.P.J. Abdul Kalam Technical University, Lucknow.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With a strong foundation in multiple programming languages and cybersecurity principles, 
              I focus on creating secure, efficient, and innovative solutions. My journey spans from 
              leading technical communities to building full-stack applications with security at their core.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in continuous learning and have earned numerous certifications from Microsoft, 
              Salesforce, and other leading platforms, always staying current with the latest in 
              technology and security trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white">BTech Computer Science & Engineering</h4>
                  <p className="text-purple-400">Cyber Security Specialization</p>
                  <p className="text-gray-400">Dr. A.P.J. Abdul Kalam Technical University</p>
                  <p className="text-gray-500">Dec 2022 – Jul 2026 | GPA: 8.22/10</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Intermediate (ISC)</h4>
                  <p className="text-gray-400">Nurture International School, Kanpur</p>
                  <p className="text-gray-500">Grade: 84.2/100 | Jul 2022</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Leadership</h3>
              <div>
                <h4 className="text-xl font-semibold text-white">Co-Chair</h4>
                <p className="text-purple-400">Women in Engineering (IEEE-PSIT)</p>
                <p className="text-gray-400">Apr 2023 – Mar 2024</p>
                <p className="text-gray-500 mt-2">
                  Led inclusion-focused events and mentoring initiatives, promoting women in tech 
                  through workshops and team leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
