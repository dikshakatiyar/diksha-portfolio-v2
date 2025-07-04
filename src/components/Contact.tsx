
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    { name: "Email", value: "dikshakatiyarmemories@gmail.com", href: "mailto:dikshakatiyarmemories@gmail.com" },
    { name: "Phone", value: "+91 9305504683", href: "tel:+919305504683" },
    { name: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/diksha-katiyar-9459192a6/" },
    { name: "GitHub", value: "View my code", href: "https://github.com/dikshakatiyar" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-wider mb-4">Get In Touch</p>
          <h2 className="text-5xl font-bold gradient-text mb-8">Contact.</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg font-semibold transition-all duration-300 neon-glow hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & 3D Element */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just having a conversation about technology and cybersecurity.
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">
                        {link.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{link.name}</p>
                      <p className="text-gray-400 text-sm">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Floating 3D sphere representation */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full animate-float"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-400/40 to-blue-400/40 rounded-full animate-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
