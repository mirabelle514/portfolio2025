import React from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mirabelle.doiron@gmail.com",
      href: "mailto:mirabelle.doiron@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com/mirabelle514"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mirabelle-doiron-84955a28/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mirabelle514", label: "GitHub" },
    { icon: Mail, href: "mailto:mirabelle.doiron@gmail.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-left text-gray-600">
            I'm actively seeking opportunities as a Frontend Engineer with a focus on AI-powered web applications.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="text-left">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Get in Touch</h3>
            
            <div className="mb-12 space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex justify-start items-center p-4 bg-gray-50 rounded-xl transition-colors duration-200 hover:bg-gray-100 group"
                >
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 bg-blue-100 rounded-full transition-colors duration-200 group-hover:bg-blue-200">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4 text-left">
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="font-medium text-gray-900">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full transition-all duration-200 transform hover:bg-blue-100 hover:text-blue-600 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;