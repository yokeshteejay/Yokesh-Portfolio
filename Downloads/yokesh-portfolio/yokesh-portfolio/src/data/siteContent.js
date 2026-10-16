/* ---------------------------------------------------------------
   Single source of truth for every piece of portfolio content.
   Edit text, links and projects here - components stay untouched.
---------------------------------------------------------------- */

import ridingPortrait from '../assets/images/profile/yokesh-riding-portrait.webp'
import formalPortrait from '../assets/images/profile/yokesh-formal-portrait.webp'

import speakingSession from '../assets/images/moments/yokesh-speaking-session.webp'
import annualDayTeam from '../assets/images/moments/profenaa-annual-day-team.webp'
import recognitionAward from '../assets/images/moments/yokesh-recognition-award.webp'
import deploymentWalkthrough from '../assets/images/moments/yokesh-deployment-walkthrough.webp'

import amcurioShot from '../assets/images/projects/amcurio-edtech-platform.webp'
import crmShot from '../assets/images/projects/profenaa-staff-crm-dashboard.webp'
import ecaddShot from '../assets/images/projects/ecadd-global-institute.webp'
import pybotShot from '../assets/images/projects/pybot-ai-solutions.webp'
import getzzShot from '../assets/images/projects/getzz-ready-kidzz-school.webp'
import muthurajShot from '../assets/images/projects/dr-muthuraj-madamuthu-website.webp'

export const personalInfo = {
  fullName: 'Yokesh Katraj',
  firstName: 'Yokesh',
  lastName: 'Katraj',
  role: 'MERN Stack Developer',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'yokeshkatraj12102002@gmail.com',
  phoneDisplay: '+91 90428 57947',
  phoneLink: '+919042857947',
  whatsappNumber: '919042857947',
  whatsappMessage: "Hi Yokesh, I saw your portfolio and I'd like to discuss a project.",
  linkedinUrl: 'https://www.linkedin.com/in/yokesh12/',
  resumeUrl: '/Yokesh_Katraj_Resume.pdf',
  company: 'Profenaa Infotech',
  heroPortrait: ridingPortrait,
  aboutPortrait: formalPortrait,
}

export const navigationLinks = [
  { label: 'Home', targetId: 'home' },
  { label: 'About', targetId: 'about' },
  { label: 'Experience', targetId: 'experience' },
  { label: 'Projects', targetId: 'projects' },
  { label: 'Skills', targetId: 'skills' },
  { label: 'Moments', targetId: 'moments' },
  { label: 'Contact', targetId: 'contact' },
]

export const heroRoles = [
  'MERN Stack Developer',
  'React.js Engineer',
  'Node.js API Builder',
  'AI Chatbot Integrator',
  'Production Deployment Pro',
]

export const heroStats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 7, suffix: '', label: 'Live Platforms' },
  { value: 5, suffix: '+', label: 'Project Areas' },
  { value: 100, suffix: '%', label: 'MERN Focused' },
]

export const aboutHighlights = [
  {
    title: 'End-to-End Ownership',
    text: 'From requirements and UI to APIs, database, AI integration, deployment and live support.',
    iconKey: 'rocket',
  },
  {
    title: 'Production Ready',
    text: 'Linux/VPS deployments with Nginx, PM2, SSL/HTTPS, domains and subdomains.',
    iconKey: 'server',
  },
  {
    title: 'AI-Assisted Builder',
    text: 'Prompt engineering and AI tools used to research, build, debug and ship faster.',
    iconKey: 'brain',
  },
  {
    title: 'Reliable Teammate',
    text: 'Clear communication, steady delivery and problem solving that businesses can count on.',
    iconKey: 'handshake',
  },
]

export const experienceTimeline = [
  {
    period: 'Feb 2025 - Present',
    title: 'Full Stack Developer',
    company: 'Profenaa Infotech, Coimbatore',
    badge: '1.8 years full-time',
    points: [
      'Engineered production web apps across 5 project areas using React.js, Node.js, Express.js and MongoDB.',
      'Developed and maintained AmCurio, a full-stack EdTech platform with responsive UI, API integration and database workflows.',
      'Built CRM / Staff Management with projects, tasks, authentication, attendance and live GPS location tracking.',
      'Delivered eCADD Global features including AI chatbot integration, responsive UI and live deployment support.',
      'Deployed frontend and backend apps on Linux/VPS using Nginx, PM2, SSL/HTTPS, environment variables and DNS.',
      'Diagnosed and resolved production issues across APIs, services and configuration for live applications.',
    ],
  },
  {
    period: '3 Months',
    title: 'Full Stack Developer Intern',
    company: 'Profenaa Infotech, Coimbatore',
    badge: 'Internship',
    points: [
      'Learned the production workflow: Git/GitHub, REST API development and responsive UI implementation.',
      'Moved from internship into a full-time role through consistent delivery and ownership.',
    ],
  },
  {
    period: '2020 - 2023',
    title: 'B.Sc. Computer Technology',
    company: 'Kongunadu College of Arts and Science, Coimbatore',
    badge: 'Education',
    points: ['Built the computer science foundation that now powers full-stack product development.'],
  },
]

export const portfolioProjects = [
  {
    id: 'amcurio',
    title: 'AmCurio',
    subtitle: 'EdTech Learning Platform',
    category: 'EdTech',
    image: amcurioShot,
    liveUrl: 'https://www.amcurio.com/login',
    displayUrl: 'amcurio.com',
    description:
      'Full-stack EdTech platform with course discovery, learner dashboards, internship and job guidance, an AI assistant and secure login - maintained in production.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: true,
    accent: 'from-teal-400 to-cyan-500',
  },
  {
    id: 'staff-crm',
    title: 'Profenaa CRM',
    subtitle: 'Staff Management & GPS Tracking',
    category: 'CRM',
    image: crmShot,
    liveUrl: 'https://hr.profenaa.com/',
    displayUrl: 'hr.profenaa.com',
    description:
      'Admin workspace for projects, tasks, attendance, leaves, daily reports and a live staff location map that refreshes every few seconds.',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: true,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'ecadd-global',
    title: 'eCADD GLOBAL',
    subtitle: 'Engineering Training Institute',
    category: 'Institutional',
    image: ecaddShot,
    liveUrl: 'https://www.ecaddglobal.com/',
    displayUrl: 'ecaddglobal.com',
    description:
      'Institutional website with course catalogue, certificate verification, placements, skill test flow and an integrated AI chatbot.',
    stack: ['React.js', 'Node.js', 'AI / API Integration'],
    featured: false,
    accent: 'from-red-500 to-rose-500',
  },
  {
    id: 'pybot-ai',
    title: 'PyBot AI Solutions',
    subtitle: '3D Animated AI Learning Hub',
    category: 'AI & Education',
    image: pybotShot,
    liveUrl: 'https://pybotaisolutions.com/',
    displayUrl: 'pybotaisolutions.com',
    description:
      'Immersive 3D animated website with glass dashboards, interactive hero effects, student portal and skill test - built for an AI academy.',
    stack: ['React.js', 'JavaScript', 'Interactive UI'],
    featured: false,
    accent: 'from-purple-500 to-fuchsia-500',
  },
  {
    id: 'getzz-ready-kidzz',
    title: 'Getzz Ready Kidzz',
    subtitle: 'Preschool & Daycare Website',
    category: 'Institutional',
    image: getzzShot,
    liveUrl: 'https://getzzreadykidzzschool.com/',
    displayUrl: 'getzzreadykidzzschool.com',
    description:
      'Warm, playful school website with an admission enquiry popup, program selection and floating social/contact actions for parents.',
    stack: ['React.js', 'Forms', 'SEO', 'Responsive UI'],
    featured: false,
    accent: 'from-orange-400 to-amber-500',
  },
  {
    id: 'dr-muthuraj',
    title: 'Dr. Muthuraj Madamuthu',
    subtitle: 'Community Leadership Portfolio',
    category: 'Institutional',
    image: muthurajShot,
    liveUrl: 'https://drmuthurajmadamuthu.com/',
    displayUrl: 'drmuthurajmadamuthu.com',
    description:
      'Personal brand website with an elegant hero slider, impact counters, gallery, media section and a language switcher.',
    stack: ['React.js', 'Framer Motion', 'Responsive UI'],
    featured: false,
    accent: 'from-yellow-400 to-amber-500',
  },
  {
    id: 'mepco-global',
    title: 'MEPCO Global',
    subtitle: 'MEP Engineering Consultancy',
    category: 'Institutional',
    image: null,
    liveUrl: 'https://www.mepcoglobal.com/',
    displayUrl: 'mepcoglobal.com',
    description:
      'Corporate website for an MEP design, project management, EPC execution, facility maintenance and global sourcing company.',
    stack: ['React.js', 'Business Website', 'SEO'],
    featured: false,
    accent: 'from-emerald-400 to-teal-500',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    iconKey: 'frontend',
    color: 'from-cyan-400 to-blue-500',
    items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router', 'Axios', 'Responsive Design'],
  },
  {
    title: 'Backend',
    iconKey: 'backend',
    color: 'from-green-400 to-emerald-500',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware', 'API Integration'],
  },
  {
    title: 'Database',
    iconKey: 'database',
    color: 'from-emerald-400 to-lime-500',
    items: ['MongoDB', 'Mongoose', 'CRUD', 'Data Modeling', 'Aggregation Basics'],
  },
  {
    title: 'DevOps & Deployment',
    iconKey: 'devops',
    color: 'from-orange-400 to-rose-500',
    items: ['Linux / VPS', 'Nginx', 'PM2', 'SSL / HTTPS', 'DNS & Subdomains', 'Production Support'],
  },
  {
    title: 'AI & Productivity',
    iconKey: 'ai',
    color: 'from-violet-400 to-fuchsia-500',
    items: ['Prompt Engineering', 'AI Chatbot Integration', 'AI-Assisted Dev', 'LLM Apps (Learning)'],
  },
  {
    title: 'Tools & Mobile',
    iconKey: 'tools',
    color: 'from-slate-300 to-slate-500',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'npm', 'curl', 'React Native (Learning)'],
  },
]

export const techMarqueeItems = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'Vite', 'REST APIs',
  'JWT', 'Git', 'Nginx', 'PM2', 'Linux', 'Postman', 'AI Chatbots', 'Prompt Engineering',
]

export const aiFocusCards = [
  {
    title: 'AI Full Stack Developer',
    text: 'Designing complete AI-powered products - frontend, backend architecture, model/API integration and production deployment.',
    iconKey: 'brain',
  },
  {
    title: 'Conversational Systems',
    text: 'Already shipping AI chatbot integrations in live products like eCADD Global and AmCurio.',
    iconKey: 'chat',
  },
  {
    title: 'Own AI Assistant Platform',
    text: 'Long-term ambition: building an independent AI assistant platform inspired by products like ChatGPT.',
    iconKey: 'spark',
  },
]

export const aiLearningTags = ['LLM Applications', 'AI Agents', 'Model / API Integration', 'Prompt Engineering', 'Scalable Architecture']

export const tamilNaduCities = [
  'Coimbatore', 'Chennai', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tiruppur', 'Erode', 'Pollachi',
  'Tirunelveli', 'Vellore', 'Thanjavur', 'Karur', 'Namakkal', 'Dindigul', 'Hosur', 'Kanyakumari',
]

export const galleryMoments = [
  {
    id: 'moment-speaking',
    image: speakingSession,
    title: 'On Stage',
    caption: 'Speaking with students at a campus session',
    layout: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'moment-award',
    image: recognitionAward,
    title: 'Recognition',
    caption: 'Honoured with a Profenaa award',
    layout: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'moment-deployment',
    image: deploymentWalkthrough,
    title: 'Hands-on Training',
    caption: 'Hosting & deployment walkthrough',
    layout: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'moment-team',
    image: annualDayTeam,
    title: 'Profenaa Family',
    caption: 'Annual celebration with the Profenaa team',
    layout: 'md:col-span-3 md:row-span-1',
  },
]

export const contactMethods = [
  { id: 'email', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, iconKey: 'mail' },
  { id: 'phone', label: 'Call', value: personalInfo.phoneDisplay, href: `tel:${personalInfo.phoneLink}`, iconKey: 'phone' },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Chat instantly',
    href: `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`,
    iconKey: 'whatsapp',
  },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/yokesh12', href: personalInfo.linkedinUrl, iconKey: 'linkedin' },
]
