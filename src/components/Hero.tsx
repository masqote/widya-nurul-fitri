import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://masqote.github.io/medhy/assets/img/thumb/Capture.PNG"
              alt="Profile"
              className="w-40 h-44 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-white"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Widya Nurul Fitri
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            HRBP Ngeri - crafting digital experiences that inspire and engage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-slate-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;