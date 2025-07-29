import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide uppercase">
                Frontend Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                Expanding into
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI & Mobile
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Frontend Developer with 8+ years of experience, currently expanding into AI integration and mobile development. Passionate about learning emerging technologies and building user-centric interfaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              About Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-full border border-blue-200 hover:border-blue-300 hover:bg-blue-100 transition-all duration-200 text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;