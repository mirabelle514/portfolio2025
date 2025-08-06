import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative justify-center items-center min-h-[75vh] bg-white pt-24 sm:pt-28 md:pt-20 lg:pt-16">
      <div className="relative z-10 px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <p className="text-sm font-medium tracking-wide uppercase text-lumiere-burgundy sm:text-base md:text-lg lg:text-xl font-opensans">
                UX Frontend Engineer 
              </p>
              <h1 className="text-3xl font-bold tracking-tight leading-tight text-lumiere-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                AI Automation
                <span className="block text-lumiere-burgundy">
                  Engineer
                </span>
              </h1>
            </div>
            <p className="px-4 mx-auto max-w-3xl text-base leading-relaxed text-left text-lumiere-navy sm:text-lg md:text-xl lg:text-2xl font-opensans sm:px-6">
              UX Frontend Engineer at Indeed for 4 years, where I discovered a passion for AI automation through side initiatives during my final year. Built AI automation solutions and explored iOS development alongside my core frontend responsibilities. 8+ years total Frontend engineering experience.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:gap-6 sm:mt-12 lg:mt-16 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded shadow-lg transition-all duration-300 transform sm:px-6 sm:py-3 sm:text-base text-lumiere-ivory bg-lumiere-navy hover:bg-lumiere-burgundy hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded shadow-lg transition-all duration-300 transform sm:px-6 sm:py-3 sm:text-base text-lumiere-ivory bg-lumiere-navy hover:bg-lumiere-burgundy hover:scale-105 hover:shadow-xl"
            >
              About Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded shadow-lg transition-all duration-300 transform sm:px-6 sm:py-3 sm:text-base text-lumiere-ivory bg-lumiere-navy hover:bg-lumiere-burgundy hover:scale-105 hover:shadow-xl"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;