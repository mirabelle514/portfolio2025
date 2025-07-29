import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Healthcare Application - Loving Paws Pal",
      description: "Comprehensive pet health management web application featuring medication reminders, appointment scheduling, and health history tracking for multiple pets.",
      image: "https://images.pexels.com/photos/4269505/pexels-photo-4269505.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Node.js v18+", "JavaScript", "HTML5", "CSS3", "Web APIs"],
      link: "#",
      status: "In Progress",
      featured: true
    },
    {
      id: 2,
      title: "AI Content Analyzer",
      description: "Advanced AI-powered content analysis with real-time insights, confidence scoring, and progressive disclosure patterns.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Vite", "TypeScript", "AI Analysis"],
      link: "https://ai-interface-studio.com/",
      impact: "Real-time AI insights with confidence scoring",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Onboarding System",
      description: "AI-powered onboarding system featuring intelligent chat support, personalized user profiling, and comprehensive cheat sheet generation for development teams.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React 18", "Vite", "Tailwind CSS", "AI Integration", "Node.js"],
      link: "#",
      impact: "Reduced developer setup time by 60%",
      featured: true
    },
    {
      id: 7,
      title: "Home Design Assistant App",
      description: "Intelligent home design assistant app leveraging AI recommendation algorithms for personalized DIY project suggestions based on style and budget.",
      image: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI APIs", "React", "Mobile Development", "Data Modeling"],
      link: "#",
      featured: false
    },
    {
      id: 4,
      title: "Tour Manager Mobile Application",
      description: "Comprehensive tour management mobile application supporting both iOS and Android platforms with complex business features and 50+ reusable components.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "TypeScript", "Redux Toolkit", "Expo"],
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "The Wednesday Collective Website",
      description: "Professional React-based website for digital agency using modern JavaScript and component-based architecture with custom Lumière Design System.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React 18", "JavaScript ES6+", "Tailwind CSS", "PostCSS"],
      link: "#",
      featured: false
    },
    {
      id: 6,
      title: "U.S. Presidents Interactive Website",
      description: "Comprehensive React.js single-page application featuring 46 U.S. presidential biographies with imagined correspondence and custom CSS3 styling.",
      image: "https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React.js", "JavaScript ES6+", "React Router", "CSS3"],
      link: "#",
      featured: false
    },
    {
      id: 8,
      title: "E-commerce Dashboard",
      description: "Modern React dashboard for e-commerce analytics with real-time data visualization, inventory management, and sales tracking features.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "TypeScript", "Chart.js", "REST APIs"],
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI integration, frontend development, and mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.status && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">
                      {project.status}
                    </span>
                  )}
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                {project.impact && (
                  <p className="text-sm text-blue-600 mb-4 font-medium">
                    Impact: {project.impact}
                  </p>
                )}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(project => !project.featured).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;