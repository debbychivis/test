import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header 
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-5 z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-wide uppercase">
            Salesforce & Customer Success
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-500">Business Operations</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
            Professional Virtual Assistant and Salesforce Administrator dedicated to streamlining workflows and maximizing customer satisfaction.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/25 flex items-center gap-2 group"
            >
              Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={social.platform}
                  className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all shadow-sm"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new opportunities in Lagos, Nigeria
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800">
             <div className="flex flex-col gap-4">
               <div className="h-4 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
               <div className="grid grid-cols-2 gap-4 mt-4">
                 <div className="h-24 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex flex-col justify-center px-4">
                    <span className="text-primary-600 font-bold text-2xl">40%</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Efficiency Gain</span>
                 </div>
                 <div className="h-24 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex flex-col justify-center px-4">
                    <span className="text-emerald-600 font-bold text-2xl">35%</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">CSAT Increase</span>
                 </div>
               </div>
               <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-4"></div>
             </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl -z-10 rotate-12"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 dark:bg-emerald-900 rounded-full -z-10 animate-bounce"></div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;