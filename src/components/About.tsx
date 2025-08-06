import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Users, label: "Years at Indeed", value: "4" },
    { icon: Coffee, label: "AI Projects Built", value: "5+" },
    { icon: Heart, label: "Certifications", value: "3" },
  ];

  const skills = [
    "React Component Development",
    "UI/UX Implementation",
    "Accessibility",
    "Design Token Usage",
    "Component Maintenance",
    "Claude AI",
    "MCP-server Development",
    "AI Agent Development",
    "Chatbot Development",
    "Workflow Automation",
    "AI Documentation Systems",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "REST APIs",
    "GraphQL",
    "Redux"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                UX Frontend Engineer at Indeed for 4 years, where I discovered a passion for AI automation through side initiatives during my final year. Built AI automation solutions and explored iOS development alongside my core frontend responsibilities. 8+ years total software engineering experience.
              </p>
              <p>
                Recently available due to Indeed's company-wide workforce reduction. During my time at Indeed, I participated in the Claude AI Pilot Program, implementing AI-powered features that increased team productivity by 40%. I created a Design System AI agent, automating documentation processes and improving developer efficiency.
              </p>
              <p>
                I'm seeking UX Frontend Engineer roles or opportunities to grow into AI Automation positions where I can leverage my proven skills while continuing to explore emerging technologies. Passionate about building user-centric experiences and exploring how AI can enhance development workflows.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-lumiere-navy">
                    <stat.icon className="w-6 h-6 text-lumiere-ivory" />
                  </div>
                  <div className="mb-1 text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl aspect-w-4 aspect-h-5">
              <img
                src="https://mirabelledoiron.com/MirabelleDoiron.png"
                alt="Mirabelle Doiron"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20 bg-lumiere-navy"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-20 bg-lumiere-burgundy"></div>
          </div>
        </div>

        <div className="p-12 mt-24 rounded-2xl bg-lumiere-ivory">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-6 text-xl font-bold text-lumiere-navy">UX Frontend Development</h3>
              <div className="space-y-3">
                {["React Component Development", "UI/UX Implementation", "Accessibility", "Design Token Usage", "Component Maintenance"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3 w-2 h-2 rounded-full bg-lumiere-navy"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-xl font-bold text-lumiere-navy">AI Automation Engineer</h3>
              <div className="space-y-3">
                {["Claude AI", "MCP-server Development", "AI Agent Development", "Chatbot Development", "Workflow Automation", "AI Documentation Systems"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3 w-2 h-2 rounded-full bg-lumiere-burgundy"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-xl font-bold text-lumiere-navy">Frontend Technologies</h3>
              <div className="space-y-3">
                {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Node.js", "REST APIs", "GraphQL", "Redux"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3 w-2 h-2 rounded-full bg-lumiere-sage"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-12 mt-24 rounded-2xl bg-lumiere-ivory">
            <h3 className="mb-6 text-2xl font-bold text-center text-lumiere-navy">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-blue-100 rounded-full transition-colors duration-200 text-lumiere-navy hover:bg-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="mt-24 mb-6 text-2xl font-bold text-center text-lumiere-navy">Recent Certifications (2025)</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-lumiere-gold">
                  <Award className="w-8 h-8 text-lumiere-navy" />
                </div>
                <h4 className="font-semibold text-lumiere-navy">Anthropic AI Fluency</h4>
                <p className="text-sm text-gray-600">July 2025</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-lumiere-gold">
                  <Award className="w-8 h-8 text-lumiere-navy" />
                </div>
                <h4 className="font-semibold text-lumiere-navy">Python 3 Certification</h4>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-lumiere-gold">
                  <Award className="w-8 h-8 text-lumiere-navy" />
                </div>
                <h4 className="font-semibold text-lumiere-navy">Apple iOS Development</h4>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;