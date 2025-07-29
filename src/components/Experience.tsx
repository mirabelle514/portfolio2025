import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Indeed",
      role: "Frontend Engineer / UX Developer",
      duration: "July 2021 - July 2025 • 4 years",
      location: "Remote",
      achievements: [
        "Built MCP-server for React library, streamlining development workflows",
        "Developed AI agent for Design System, automating component documentation", 
        "Created intelligent chatbot, enhancing user engagement",
        "Implemented AI-powered documentation server, saving engineering time",
        "Participated in Claude AI pilot program, establishing best practices",
        "Built scalable React components using TypeScript and CSS3",
        "Created comprehensive documentation, increasing team productivity",
        "Optimized UI/UX interfaces, enhancing user engagement",
        "Implemented responsive design patterns across multiple projects",
        "Developed React components for marketing products with cross-client compatibility",
        "Established ADA compliance standards, reducing accessibility issues",
        "Managed high-volume production workflows, delivering quality assets"
      ],
      categories: ["AI Integration & Innovation", "Frontend Development"]
    },
    {
      company: "AAA",
      role: "Developer / Designer", 
      duration: "April 2017 - July 2021 • 4+ years",
      location: "On-site",
      achievements: [
        "Developed React components for marketing products with cross-client compatibility",
        "Established ADA compliance standards, reducing accessibility issues",
        "Managed high-volume production workflows, delivering quality assets"
      ],
      categories: ["Frontend Development", "Marketing Technology"]
    },
    {
      company: "Quantum",
      role: "Web Developer & Designer",
      duration: "November 2015 - December 2016 • 1+ year", 
      location: "On-site",
      achievements: [
        "Contributed to web development best practices, improving code quality",
        "Created reusable HTML template systems, reducing development time",
        "Developed strategic recommendations for marketing programs"
      ],
      categories: ["Web Development", "Template Systems"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Experience
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            8+ years of professional experience in frontend development, AI integration, and mobile technologies
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex flex-col mb-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building2 className="mr-2 w-5 h-5 text-lumiere-navy" />
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-lumiere-navy">{exp.role}</h4>
                  <div className="flex flex-col gap-4 mb-4 text-gray-600 sm:flex-row sm:items-center">
                    <div className="flex items-center">
                      <Calendar className="mr-2 w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {exp.categories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h5 className="mb-3 text-lg font-semibold text-gray-900">{category}</h5>
                    <ul className="space-y-2">
                      {exp.achievements
                        .filter((_, achIndex) => {
                          if (category === "AI Integration & Innovation") return achIndex < 5;
                          if (category === "Frontend Development") return achIndex >= 5;
                          return true;
                        })
                        .map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="flex-shrink-0 mt-2 mr-3 w-2 h-2 rounded-full bg-lumiere-navy"></div>
                            <span className="leading-relaxed text-gray-700">{achievement}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;