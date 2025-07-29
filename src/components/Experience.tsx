import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Indeed",
      role: "Software Engineer / UX Developer",
      duration: "July 2021 - July 2025 • 4 years",
      location: "Remote",
      achievements: [
        "Built MCP-server for React library, streamlining development workflows",
        "Developed AI agent for Design System, automating component documentation", 
        "Created intelligent chatbot, enhancing user engagement",
        "Implemented AI-powered documentation server, saving engineering time",
        "Participated in Claude AI pilot program, establishing best practices",
        "Transitioned to iOS development, contributing to mobile architecture",
        "Built scalable React components using TypeScript and CSS3",
        "Created comprehensive documentation, increasing team productivity"
      ],
      categories: ["AI Integration & Innovation", "Mobile & Frontend Development"]
    },
    {
      company: "AAA",
      role: "Developer / Designer", 
      duration: "April 2017 - July 2021 • 4+ years",
      location: "On-site",
      achievements: [
        "Developed HTML campaigns for marketing products with cross-client compatibility",
        "Implemented A/B testing frameworks, improving engagement metrics",
        "Established ADA compliance standards, reducing accessibility issues",
        "Managed high-volume production workflows, delivering quality assets",
        "Collaborated with creative teams using Adobe Photoshop"
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            8+ years of professional experience in frontend development, AI integration, and mobile technologies
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <h4 className="text-xl text-blue-600 font-semibold mb-3">{exp.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {exp.categories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">{category}</h5>
                    <ul className="space-y-2">
                      {exp.achievements
                        .filter((_, achIndex) => {
                          if (category === "AI Integration & Innovation") return achIndex < 5;
                          if (category === "Mobile & Frontend Development") return achIndex >= 5;
                          return true;
                        })
                        .map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
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