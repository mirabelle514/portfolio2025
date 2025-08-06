import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Indeed",
      role: "UX Frontend Engineer | AI Automation Engineer",
      duration: "July 2021 - July 2025 • 4 years",
      location: "Remote",
      achievements: [
        "Participated in Claude AI Pilot Program, implementing AI-powered features that increased team productivity by 40%",
        "Created Design System AI agent, automating documentation processes and improving developer efficiency",
        "Developed intelligent chatbot for company Design System website, significantly improving user engagement metrics by 35%",
        "Built MCP-servers for email React library, streamlining development processes and increasing team productivity by 25%",
        "Developed React components within the existing design system",
        "Collaborated with designers to implement UI specifications",
        "Built responsive, accessible web interfaces serving millions of users",
        "Maintained and updated existing React components for consistency and performance",
        "Worked with design tokens and component libraries to ensure brand alignment"
      ],
      categories: ["AI Automation Engineer (Nov 2024 - July 2025)", "UX Frontend Engineer (July 2021 - July 2025)"]
    },
    {
      company: "AAA",
      role: "Developer / Designer", 
      duration: "April 2017 - July 2021 • 4+ years",
      location: "On-site",
      achievements: [
        "Designed and developed HTML campaigns for all marketing products, achieving 95%+ cross-client compatibility",
        "Implemented A/B testing frameworks, driving 25% improvement in engagement metrics through data optimization",
        "Established ADA compliance standards, creating accessible patterns adopted company-wide and reducing accessibility issues by 80%",
        "Managed high-volume production workflows, consistently delivering 50+ marketing assets monthly",
        "Collaborated with creative teams using Adobe Photoshop, reaching 500K+ user audiences"
      ],
      categories: ["Frontend Development", "Marketing Technology"]
    },
    {
      company: "Quantum",
      role: "Web Developer & Designer",
      duration: "November 2015 - December 2016 • 1+ year", 
      location: "On-site",
      achievements: [
        "Mentored junior developers in web development best practices, improving team code quality scores by 40%",
        "Created reusable HTML template systems, reducing campaign development time by 50%",
        "Developed strategic recommendations for marketing programs, contributing to 15% improved campaign performance"
      ],
      categories: ["Web Development", "Template Systems"]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Experience
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-left text-gray-600">
            8+ years of professional experience in frontend development, and recently fell in love with all AI integration technologies
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
                          if (category === "AI Automation Engineer (Nov 2024 - July 2025)") return achIndex < 4;
                          if (category === "UX Frontend Engineer (July 2021 - July 2025)") return achIndex >= 4;
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