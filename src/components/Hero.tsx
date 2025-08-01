import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative justify-center items-center min-h-screen bg-white">
      <div className="relative z-10 px-6 mx-auto max-w-4xl text-center lg:px-8">
        <div className="space-y-xl">
          <div className="space-y-md">
            <div className="space-y-sm">
              <p className="text-lg font-medium tracking-wide uppercase text-lumiere-burgundy md:text-xl font-opensans">
                UX Frontend Engineer 
              </p>
              <h1 className="text-5xl font-bold tracking-tight leading-tight text-lumiere-navy md:text-7xl">
              AI Automation
                <span className="block text-lumiere-burgundy">
                Engineer
                </span>
              </h1>
            </div>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-lumiere-navy md:text-2xl font-opensans">
              UX Frontend Engineer at Indeed for 4 years, where I discovered a passion for AI automation through side initiatives during my final year. Built AI automation solutions and explored iOS development alongside my core frontend responsibilities. 8+ years total Frontend engineering experience.
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-md mt-xl sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center font-medium rounded-full shadow-lg transition-all duration-300 transform px-lg py-md text-lumiere-ivory bg-lumiere-navy hover:bg-lumiere-burgundy hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center font-medium rounded-full border shadow-lg transition-all duration-300 transform px-lg py-md text-lumiere-navy bg-lumiere-ivory border-lumiere-gold hover:border-lumiere-burgundy hover:scale-105 hover:shadow-xl"
            >
              About Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center text-sm font-medium rounded-full border transition-all duration-300 px-md py-sm text-lumiere-burgundy bg-lumiere-dove border-lumiere-gold hover:border-lumiere-burgundy hover:bg-lumiere-sage"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute left-1/2 animate-bounce transform -translate-x-1/2 bottom-lg">
          <ArrowDown className="w-6 h-6 text-lumiere-gold" />
        </div>
      </div>
    </section>
  );
};

export default Hero;