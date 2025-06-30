
import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, ExternalLink, Instagram } from 'lucide-react';
import PixelatedTrees from '../components/PixelatedTrees';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                ZABDIEL GUDINO
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-indigo-50"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-indigo-50"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-indigo-50"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-indigo-50"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-700 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-indigo-700 block px-4 py-3 rounded-md text-base font-semibold w-full text-left transition-all duration-300 hover:bg-indigo-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-indigo-700 block px-4 py-3 rounded-md text-base font-semibold w-full text-left transition-all duration-300 hover:bg-indigo-50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-indigo-700 block px-4 py-3 rounded-md text-base font-semibold w-full text-left transition-all duration-300 hover:bg-indigo-50"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-indigo-700 block px-4 py-3 rounded-md text-base font-semibold w-full text-left transition-all duration-300 hover:bg-indigo-50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 animate-fade-in tracking-tight">
                ZABDIEL
                <br />
                <span className="text-indigo-700">GUDINO</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8 animate-fade-in font-light">
                Business Administration Student & AI Enthusiast
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl leading-relaxed animate-fade-in">
                Passionate about AI and video games, I'm pursuing my dreams through coding and AI learning 
                to develop custom programs and websites for clients who need innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-start items-start">
                <a 
                  href="mailto:Zabdielgu05@gmail.com" 
                  className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail size={22} />
                  Get In Touch
                </a>
                <a 
                  href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Linkedin size={22} />
                  LinkedIn Profile
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/a5069ef8-9682-4f1c-bb7c-8172748bdbab.png" 
                    alt="Zabdiel Gudino - Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-700 rounded-2xl shadow-lg"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-200 rounded-2xl shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-16 text-center">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Goals</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm currently a student at San Diego City College, pursuing a degree in Business Administration. 
                  My academic journey is driven by my passion for technology, particularly AI and video games.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My goal is to bridge the gap between business acumen and technological innovation. I'm actively 
                  learning to code and exploring AI applications to develop custom solutions for clients.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                  🏆 Gaming Achievement
                </h3>
                <p className="text-gray-700 text-lg">
                  Won over 200 Fortnite games in the past 3 years - demonstrating strategic thinking, 
                  quick decision-making, and perseverance under pressure!
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                  🎯 I Also Sell Pokemon Cards!
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This hobby has taught me valuable lessons about market analysis, customer service, 
                  and entrepreneurship - skills that complement my business studies perfectly and have 
                  given me real-world experience in commerce and client relations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">Education</h4>
                  <p className="text-gray-700">Business Administration<br />San Diego City College</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">Interests</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Artificial Intelligence</li>
                    <li>• Video Game Development</li>
                    <li>• Web Development</li>
                    <li>• Pokemon Card Trading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-16 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600">Passionate about AI learning and exploring applications for custom solutions and automation.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Administration</h3>
              <p className="text-gray-600">Currently studying business principles, market analysis, and entrepreneurship strategies.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600">Learning to code and develop custom websites and programs for client solutions.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gaming Strategy</h3>
              <p className="text-gray-600">Strategic thinking and quick decision-making demonstrated through competitive gaming achievements.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🃏</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600">Experience in market trends and customer service through Pokemon card trading business.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Problem Solving</h3>
              <p className="text-gray-600">Combining business acumen with technological innovation to create custom solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-16 text-center">Let's Connect</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-indigo-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:Zabdielgu05@gmail.com" className="text-indigo-700 hover:text-indigo-800 transition-colors text-lg">
                      Zabdielgu05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Linkedin className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-lg"
                    >
                      Zabdiel Gudino Sanchez
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Instagram className="text-pink-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <a 
                      href="https://www.instagram.com/zabdiel.gudino/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center gap-2 text-lg"
                    >
                      @zabdiel.gudino
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              ZABDIEL GUDINO
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Business Administration Student & AI Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="mailto:Zabdielgu05@gmail.com"
              className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/zabdiel.gudino/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-pink-600 hover:bg-pink-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              © 2024 Zabdiel Gudino. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Pixelated Trees at Bottom */}
        <PixelatedTrees />
      </footer>
    </div>
  );
};

export default Index;
