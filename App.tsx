import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { CheckCircle2, Award, Briefcase, GraduationCap, Mail, Phone, ExternalLink } from 'lucide-react';
// Added SOCIAL_LINKS to the constants import list below to resolve the error on line 235
import { SKILL_CATEGORIES, PROJECTS, EXPERIENCE, EDUCATION, CONTACT_METHODS, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      <Hero />

      <main className="max-w-[1200px] mx-auto px-5 pb-20">
        
        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="mb-6">
                I am a dedicated Customer Support Professional and Salesforce Administrator with over 5 years of experience helping businesses streamline their operations, enhance customer satisfaction, and optimize their workflows. My expertise spans customer service management, CRM administration, project management, and process automation.
              </p>
              <p className="mb-8">
                I specialize in creating efficient systems that save time, reduce costs, and improve customer experiences. Whether you need support managing customer relationships, automating repetitive tasks, or organizing your business operations, I bring the technical skills and customer-focused mindset to help your business thrive.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-1">5+ Years</h4>
                  <p className="text-sm opacity-80">Professional Experience</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">20+ Clients</h4>
                  <p className="text-sm opacity-80">Worldwide Success</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
               <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Award className="text-primary-500" size={20} /> Certifications
                  </h4>
                  <ul className="space-y-3 list-none p-0 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>Salesforce Certified Administrator</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>Advanced IT Support Specialist</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 size={16} className="text-primary-500 shrink-0 mt-0.5" />
                      <span>HubSpot Service Hub Certified</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="services" title="Services I Offer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Customer Success Management', 
                desc: 'Delivering exceptional customer experiences through professional support services, ticket management, and satisfaction tracking.',
                icon: '🎯'
              },
              { 
                title: 'Salesforce Administration', 
                desc: 'Complete Salesforce CRM setup, customization, user management, and reporting to maximize your investment.',
                icon: '☁️'
              },
              { 
                title: 'Process Automation', 
                desc: 'Streamline workflows by automating repetitive tasks using Zapier and custom integrations.',
                icon: '⚡'
              },
              { 
                title: 'Project Management', 
                desc: 'Organize and manage projects efficiently using Asana, ClickUp, or Trello to ensure deadlines are met.',
                icon: '📈'
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-primary-500/5">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-slate-900 dark:text-white mb-3 text-xl font-bold group-hover:text-primary-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills & Tools">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-all hover:border-primary-300 dark:hover:border-primary-700"
              >
                <h4 className="text-slate-900 dark:text-white mb-4 text-lg font-bold">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="bg-white dark:bg-slate-900 py-1.5 px-3 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx}
                className="flex flex-col bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 group"
              >
                <div className="h-4 w-full bg-gradient-to-r from-primary-500 to-emerald-500"></div>
                <div className="p-8">
                  <h4 className="text-slate-900 dark:text-white mb-4 text-xl font-bold">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-8 space-y-12">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-white dark:bg-slate-950 border-4 border-primary-500 rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                   <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h4>
                   <span className="text-sm font-bold py-1 px-3 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                     {job.period}
                   </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  <Briefcase size={16} /> {job.company}
                </div>
                <p className="text-slate-600 dark:text-slate-400">{job.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl flex gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-2xl h-fit shrink-0">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold mb-2">{edu.institution}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact/CTA Section */}
        <div 
          id="contact" 
          className="relative bg-slate-900 dark:bg-slate-900 text-white rounded-[3rem] overflow-hidden my-20 p-10 md:p-20 shadow-2xl"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let's build something <span className="text-primary-400">extraordinary</span> together.</h2>
            <p className="text-xl text-slate-300 mb-12">
              Ready to streamline your business operations and delight your customers? I'm just a message away.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="mailto:your.email@gmail.com"
                className="w-full md:w-auto px-8 py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <Mail size={20} /> Send an Email
              </a>
              <a 
                href="https://wa.me/2348012345678"
                className="w-full md:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <Phone size={20} /> WhatsApp Me
              </a>
            </div>
            
            <div className="pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-10">
               {SOCIAL_LINKS.map((link) => (
                 <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-medium"
                 >
                   {link.platform} <ExternalLink size={14} />
                 </a>
               ))}
            </div>
          </div>
        </div>

      </main>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
          <p>&copy; 2025 Professional Customer Support & Salesforce Services.</p>
          <div className="flex gap-6">
            <p>📍 Lagos, Nigeria</p>
            <p>Available Globally</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;