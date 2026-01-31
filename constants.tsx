import React from 'react';
import { Linkedin, Twitter, Mail, MessageCircle, MapPin } from 'lucide-react';
import { NavItem, SkillCategory, Project, ExperienceItem, EducationItem, SocialLink, ContactMethod } from './types';

// Icons wrapper to ensure consistent sizing
const IconWrapper = ({ children }: { children?: React.ReactNode }) => (
  <span className="w-[30px] h-[30px] flex items-center justify-center">{children}</span>
);

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills & Tools' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME',
    icon: <IconWrapper><Linkedin className="w-full h-full" /></IconWrapper>
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/YOUR-TWITTER-HANDLE',
    icon: <IconWrapper><Twitter className="w-full h-full" /></IconWrapper>
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@gmail.com',
    icon: <IconWrapper><Mail className="w-full h-full" /></IconWrapper>
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/2348012345678',
    icon: <IconWrapper><MessageCircle className="w-full h-full" /></IconWrapper>
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Customer Support Platforms',
    skills: ['HubSpot', 'Freshdesk', 'Zendesk', 'Intercom', 'Slack']
  },
  {
    title: 'CRM & Sales Tools',
    skills: ['Salesforce CRM', 'Salesforce Administration', 'Customer Data Management', 'Sales Pipeline Management', 'Reporting & Analytics']
  },
  {
    title: 'Project Management',
    skills: ['Trello', 'Monday.com', 'ClickUp', 'Asana', 'Task Coordination']
  },
  {
    title: 'Automation & Integration',
    skills: ['Zapier', 'Workflow Automation', 'Process Optimization', 'Software Integration', 'Recurring Task Automation']
  },
  {
    title: 'Scheduling & Time Management',
    skills: ['Calendly', 'Clockify', 'Time Doctor', 'Appointment Booking', 'Time Tracking']
  },
  {
    title: 'File Management & Organization',
    skills: ['Google Drive', 'Dropbox', 'File Organization', 'Document Sharing', 'Cloud Storage Management']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Salesforce CRM Implementation',
    description: 'Successfully set up and customized Salesforce CRM for a growing e-commerce business, including custom fields, workflows, and automated reporting dashboards that improved sales tracking efficiency by 40%.',
    tags: ['Salesforce', 'CRM Setup', 'Automation']
  },
  {
    title: 'Customer Support System Optimization',
    description: 'Redesigned customer support workflow using Zendesk and Intercom, reducing average response time from 4 hours to 45 minutes and increasing customer satisfaction scores by 35%.',
    tags: ['Zendesk', 'Customer Success', 'Process Improvement']
  },
  {
    title: 'Multi-Tool Automation Integration',
    description: 'Created automated workflows using Zapier to connect HubSpot, Google Drive, Slack, and Monday.com, eliminating 15+ hours of manual data entry per week for a marketing agency.',
    tags: ['Zapier', 'Integration', 'Time Savings']
  },
  {
    title: 'Project Management System Setup',
    description: 'Implemented and trained team members on Asana for a remote startup, creating custom project templates, automations, and reporting systems that improved project delivery time by 25%.',
    tags: ['Asana', 'Team Training', 'Templates']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Customer Support Specialist',
    company: 'CloudMita',
    period: 'November 2024 - October 2025',
    description: 'Provided comprehensive customer support services, managing customer inquiries, resolving technical issues, and ensuring high customer satisfaction rates through efficient support processes.'
  },
  {
    role: 'Marketing Head',
    company: 'Chivis Vintage & Vogue',
    period: 'September 2022 - July 2024',
    description: 'Led marketing initiatives and customer engagement strategies, overseeing customer relationship management and implementing marketing campaigns to drive business growth.'
  },
  {
    role: 'Customer Service Representative',
    company: 'Nobbcomm',
    period: 'September 2019 - August 2022',
    description: 'Delivered exceptional customer service, handled customer inquiries and complaints, maintained customer records, and contributed to improving overall customer satisfaction metrics.'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Federal College of Education, Akoka',
    description: 'Foundation in education and professional development'
  },
  {
    institution: 'Trailhead by Salesforce',
    description: 'Salesforce Administrator Training and Certification'
  },
  {
    institution: 'Digital Witch IT Support Training',
    description: 'Technical support and IT service management training'
  }
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: <span className="text-2xl">✉️</span>,
    title: 'Email Me',
    value: 'your.email@gmail.com',
    link: 'mailto:your.email@gmail.com'
  },
  {
    icon: <span className="text-2xl">💬</span>,
    title: 'WhatsApp',
    value: '+234 801 234 5678',
    link: 'https://wa.me/2348012345678'
  },
  {
    icon: <span className="text-2xl">👔</span>,
    title: 'LinkedIn',
    value: 'Connect with me',
    link: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME'
  }
];