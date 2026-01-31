import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`bg-white dark:bg-slate-900 my-[60px] p-[40px] md:p-[60px] rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 scroll-mt-28 ${className}`}
    >
      <div className="flex flex-col mb-12">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-extrabold relative inline-block">
          {title}
          <div className="absolute -bottom-3 left-0 w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </h2>
      </div>
      <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;