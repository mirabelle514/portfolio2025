import React from 'react';
import { ArrowRight, Heart, Brain, Users, MessageCircle, Home, Smartphone, Globe, Crown, Clock } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Healthcare Application - Loving Paws Pal",
      description: "Comprehensive pet health management web application featuring medication reminders, appointment scheduling, and health history tracking for multiple pets.",
      icon: Heart,
      tags: ["Node.js v18+", "JavaScript", "HTML5", "CSS3", "Web APIs", "Mobile Development", "React Native"],
      link: "https://github.com/mirabelle514/loving-paws-pal",
      status: "In Progress",
      impact: "Streamlined pet health management for multiple pets"
    },
    {
      id: 2,
      title: "AI Content Analyzer",
      description: "Advanced AI-powered content analysis with real-time insights, confidence scoring, and progressive disclosure patterns.",
      icon: Brain,
      tags: ["React", "Vite", "TypeScript", "AI Analysis"],
      link: "https://ai-interface-studio.com/",
      impact: "Real-time AI insights with confidence scoring"
    },
    {
      id: 3,
      title: "AI-Powered Onboarding System",
      description: "AI-powered onboarding system featuring intelligent chat support, personalized user profiling, and comprehensive cheat sheet generation for development teams.",
      icon: Users,
      tags: ["React 18", "Vite", "Tailwind CSS", "AI Integration", "Node.js"],
      link: "https://github.com/mirabelle514/onboarding-your-team",
      status: "In Progress",
      impact: "Reduced developer setup time by 60%"
    },
    {
      id: 4,
      title: "AI Chatbot for Insurance Customer Service",
      description: "Modern, accessible AI chatbot interface showcasing UX best practices for insurance customer service. Features Liberty Mutual's design system, WCAG compliance, smart suggestions, and realistic conversation flow with typing indicators.",
      icon: MessageCircle,
      tags: ["React", "TypeScript", "AI Integration", "Design Systems", "Accessibility"],
      link: "https://github.com/mirabelle514/AIChatbot",
      status: "Demo",
      impact: "Enhanced customer service with AI-powered assistance"
    },
    {
      id: 5,
      title: "Home Design Assistant App",
      description: "Intelligent home design assistant app leveraging AI recommendation algorithms for personalized DIY project suggestions based on style and budget.",
      icon: Home,
      tags: ["AI APIs", "React Native", "Mobile Development", "Data Modeling"],
      link: "https://github.com/mirabelle514/DesignMyMaison",
      impact: "Personalized design recommendations based on user preferences"
    },
    {
      id: 6,
      title: "Tour Manager Mobile Application",
      description: "Comprehensive tour management mobile application supporting both iOS and Android platforms with complex business features and 50+ reusable components.",
      icon: Smartphone,
      tags: ["React Native", "TypeScript", "Redux Toolkit", "Mobile Development"],
      link: "https://github.com/mirabelle514/myTourKit",
      status: "In Progress",
      impact: "Cross-platform tour management with 50+ reusable components"
    },
    {
      id: 7,
      title: "The Wednesday Collective Website",
      description: "Professional React-based website for digital agency using modern JavaScript and component-based architecture with custom Lumière Design System.",
      icon: Globe,
      tags: ["React 18", "JavaScript ES6+", "Tailwind CSS", "PostCSS"],
      link: "https://thewednesdaycollective.com/",
      impact: "Modern agency website with custom design system"
    },
    {
      id: 8,
      title: "U.S. Presidents Interactive Website",
      description: "Comprehensive React.js single-page application featuring 46 U.S. presidential biographies with imagined correspondence and custom CSS3 styling.",
      icon: Crown,
      tags: ["React.js", "JavaScript ES6+", "React Router", "CSS3"],
      link: "https://frompresidentstopresidents.com/",
      impact: "Interactive educational platform with 46 presidential profiles"
    },
    {
      id: 9,
      title: "Contractor Tracker App - Professional Time & Invoice Management",
      description: "A modern, feature-rich web application for tracking work hours, managing clients, creating professional invoices, and calculating taxes. Built with React, Vite, and Tailwind CSS.",
      icon: Clock,
      tags: ["React 18", "Vite", "Tailwind CSS", "Local Storage"],
      link: "https://contractortracker.app/",
      impact: "Complete contractor management solution with time tracking and invoicing"
    }
  ];

  return (
    <section id="projects" className="py-3xl bg-lumiere-ivory">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="text-center mb-2xl">
          <h2 className="text-4xl font-bold mb-lg text-lumiere-navy md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-lumiere-navy font-opensans">
            A collection of projects showcasing my expertise in AI integration, frontend development, and mobile applications
          </p>
        </div>

        {/* All Projects - 3 columns */}
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden relative rounded-3xl shadow-lg transition-all duration-500 transform bg-lumiere-ivory group hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center items-center h-32 bg-lumiere-dove">
                <project.icon className="w-12 h-12 transition-colors duration-300 text-lumiere-navy group-hover:text-lumiere-burgundy" />
              </div>
              <div className="p-md">
                <div className="flex flex-wrap gap-xs mb-md">
                  {project.status && (
                    <span className="text-xs font-medium rounded-md px-sm py-xs bg-lumiere-sage">
                      {project.status}
                    </span>
                  )}
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-md px-sm py-xs text-lumiere-navy bg-lumiere-dove"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-sm text-lumiere-navy">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-sm text-lumiere-navy font-opensans">
                  {project.description}
                </p>
                {project.impact && (
                  <p className="text-xs font-bold mb-md text-lumiere-navy">
                    Impact: {project.impact}
                  </p>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium transition-colors duration-300 text-lumiere-burgundy hover:text-lumiere-navy"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ml-xs group-hover:translate-x-1" />
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