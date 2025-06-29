
import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-purple-300 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-purple-800">Zabdiel Gudino</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-purple-700 hover:text-purple-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-purple-700 hover:text-purple-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-purple-700 hover:text-purple-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-purple-700 hover:text-purple-900 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-purple-700 hover:text-purple-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-purple-700 hover:text-purple-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-purple-700 hover:text-purple-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6 animate-fade-in">
            Zabdiel Gudino
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-800 mb-8 animate-fade-in">
            Business Administration Student & AI Enthusiast
          </h2>
          <p className="text-lg sm:text-xl text-purple-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Passionate about AI and video games, I'm pursuing my dreams through coding and AI learning 
            to develop custom programs and websites for clients who need innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:Zabdielgu05@gmail.com" 
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              LinkedIn Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-8 text-center">About Me</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm currently a student at San Diego City College, pursuing a degree in Business Administration. 
                My academic journey is driven by my passion for technology, particularly AI and video games.
              </p>
              
              <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-purple-800 text-xl">I also sell Pokemon cards!</strong> This hobby has taught me valuable lessons about 
                  market analysis, customer service, and entrepreneurship - skills that complement my business studies perfectly.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                My goal is to bridge the gap between business acumen and technological innovation. I'm actively 
                learning to code and exploring AI applications to develop custom solutions for clients who need 
                unique programs and websites.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Gaming Achievement</h3>
                <p className="text-gray-700">
                  🏆 Won over 200 Fortnite games in the past 3 years - demonstrating strategic thinking, 
                  quick decision-making, and perseverance under pressure!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Education</h3>
                  <p className="text-gray-700">Business Administration at San Diego City College</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Interests</h3>
                  <ul className="text-gray-700 space-y-1">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-8 text-center">Contact Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-purple-800 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-600" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:Zabdielgu05@gmail.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                      Zabdielgu05@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-600" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/zabdiel-gudino-sanchez-5928b630a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      Zabdiel Gudino Sanchez
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Pixelated Trees at Bottom */}
      <PixelatedTrees />
    </div>
  );
};

export default Index;
