import React from 'react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const downloadResume = () => {
    // Convert Google Drive view link to direct download link
    const driveId = '1YUtmPlY0rSbPBwtTueX1kNkFxnIWhA1I';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Diksha_Katiyar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Diksha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">A Cyber Security enthusiast and software developer passionate about building secure and scalable solutions.</p>
        </div>
        
        <div className="mb-12">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"></p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection('projects')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105">
            View My Work
          </button>
          <button onClick={downloadResume} className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105">
            Download Resume
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-4 border border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-float opacity-40" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-50" style={{
      animationDelay: '4s'
    }}></div>
    </section>;
};
export default Hero;