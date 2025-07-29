import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "8+" },
    { icon: Users, label: "Years at Indeed", value: "4" },
    { icon: Coffee, label: "AI Projects Built", value: "5+" },
    { icon: Heart, label: "Certifications", value: "3" },
  ];

  const skills = [
    "AI Integration",
    "Claude AI",
    "MCP-server Development",
    "iOS Development",
    "Swift",
    "React Native",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "HTML5",
    "CSS3"
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a Frontend Developer with 8+ years of experience, currently expanding into AI integration and mobile development. Over my 4 years at Indeed, I've evolved from UX Developer to Frontend Developer with AI specialization, demonstrating my ability to learn and adapt to new technologies.
              </p>
              <p>
                My top achievements include participating in AI's program where I built an MCP-server for our React components library, developed an AI agent for our Design System, and created an intelligent chatbot for our company website. I also recently transitioned to iOS development, learning mobile proficiency while maintaining my frontend expertise.
              </p>
              <p>
                What sets me apart is my eagerness to learn emerging technologies, and hands-on experience implementing AI solutions in real applications. I'm currently seeking opportunities in Frontend Development, AI Integration, or iOS Development roles.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
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
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mirabelle Doiron"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-600 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">AI/ML Integration</h3>
              <div className="space-y-3">
                {["Claude AI", "MCP-server Development", "AI Agent Architecture", "Chatbot Development", "Python (Learning)"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mobile Development</h3>
              <div className="space-y-3">
                {["iOS Development", "Swift (Learning)", "React Native", "SwiftUI (Learning)", "Cross-platform Development"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
              <div className="space-y-3">
                {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Node.js"].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Certifications (2025)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Anthropic AI Fluency</h4>
                <p className="text-sm text-gray-600">July 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Python 3 Certification</h4>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Swift UI Meta</h4>
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