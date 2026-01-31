import React from 'react';

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  description: string;
}

export interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  linkText?: string;
}