import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      let current = '';
      const sections = document.querySelectorAll<HTMLElement>('section, header, div[id="contact"]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-slate-200 dark:border-slate-800' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        {/* Logo / Name */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Portfolio<span className="text-primary-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-medium transition-colors duration-200 
                    ${activeSection === item.id 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400'}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle Icons */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[60px] bg-white dark:bg-slate-950 z-40 transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <ul className="flex flex-col items-center justify-start pt-10 gap-8 list-none p-0 m-0 h-full">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-2xl font-semibold transition-colors
                  ${activeSection === item.id ? 'text-primary-600' : 'text-slate-600 dark:text-slate-400'}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;