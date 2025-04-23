import React from 'react';
import { motion } from 'framer-motion';
import avatar from './assets/avatar.jpg';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const BackgroundWrapper = ({ children }) => (
  <div className="relative bg-[#0f172a] text-white rounded-xl overflow-hidden shadow-md">
    <div className="absolute inset-0 opacity-10 z-0">
      <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="25%" cy="40%" r="300" fill="url(#grad)" />
        <circle cx="75%" cy="70%" r="250" fill="url(#grad)" />
      </svg>
    </div>
    <div className="relative z-10 p-6">{children}</div>
  </div>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden">
    {/* Glowing radial background */}
    <div className="absolute inset-0 z-0 opacity-10">
      <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="25%" cy="40%" r="300" fill="url(#bg-grad)" />
        <circle cx="75%" cy="70%" r="250" fill="url(#bg-grad)" />
      </svg>
    </div>
    <main className="font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
    </div>
  );
}

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-[#0f172a] text-white">
    {/* <motion.img
      src={avatar}
      alt="Robert Mungai"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-40 h-40 md:w-56 md:h-56 object-cover shadow-md mb-6"
    /> */}

    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold"
    >
      SALUT! I am Robert Mungai
    </motion.h1>

    <p className="mt-4 text-lg md:text-xl max-w-2xl">
      Full-Stack Engineer | Tech Enthusiast | Chess Master
    </p>
    <p className="mt-2 text-sm text-gray-400 max-w-2xl">
    Crafting scalable, secure, and smart systems — from API magic to full-stack engineering.
      </p>
  </section>
);

const About = () => (
  <section className="py-20 px-6 md:px-20">
    <BackgroundWrapper>
      <h2 className="text-4xl font-bold mb-6 text-center text-white">About Me</h2>
      <p className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-200 text-center">
        Results-driven Systems Developer based in Nairobi, Kenya with strong experience in full-stack development, system integration, and API development.
        Skilled in PHP, React, Python, Yii2, Laravel, Redis, Django, and database technologies like MySQL, PostgreSQL, and SSMS.
        Passionate about delivering scalable, user-focused web applications across financial, regulatory, and energy sectors.
      </p>
    </BackgroundWrapper>
  </section>
);

const Projects = () => {
  const npraLogo = require('./assets/npra-logo.png');
  const eraLogo = require('./assets/era-logo.png');
  const ghanaFlag = require('./assets/ghana-flag.png');
  const ugandaFlag = require('./assets/uganda-flag.png');

  const data = [
    {
      title: "NPRA Risk-Based Supervision System",
      description:
        "A regulatory platform for Ghana's Pension Regulatory Authority.",
      tech: ["PHP", "Redis", "Python", "SSMS"],
      link: "https://penport.npra.gov.gh/",
      logo: npraLogo,
      flag: ghanaFlag,
    },
    {
      title: "ERA - Regulatory Information Management System",
      description:
        "A regulatory platform for Uganda’s Electricity Authority.",
      tech: ["PHP", "JS", "SSMS"],
      link: "https://www.era.go.ug/",
      logo: eraLogo,
      flag: ugandaFlag,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-semibold mb-10 text-center">Featured Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {data.map((project, index) => (
          <motion.div
            key={index}
            className="flex rounded-xl shadow-md border overflow-hidden group hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Left: Logo */}
            <div className=" flex items-center justify-center p-6 w-1/3">
              <img src={project.logo} alt="Project Logo" className="h-24 object-contain" />
            </div>

            {/* Center: Description with Flag Background */}
            <div className="relative flex-1 p-6 space-y-3 overflow-hidden">
              {/* Blurred flag background on hover */}
              <img
                src={project.flag}
                alt="Background Flag"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 blur-sm transition duration-300"
              />

              {/* Content above blurred flag */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-800 text-sm text-white">{project.description}</p>

                {/* Hover Reveal Tech */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-300 space-x-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs bg-white/70 px-2 py-1 rounded-md text-gray-700 border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Right: Small Flag (optional to keep) */}
            {/* You can remove this if the background flag is enough */}
            {/* <div className="flex items-center justify-center p-4">
              <img
                src={project.flag}
                alt="Country Flag"
                className="w-8 h-6 object-cover border"
              />
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Systems Developer",
      company: "Attain Enterprise Solutions",
      location: "Nairobi, Kenya",
      date: "Oct 2023 – Present",
      status: "Active",
      highlights: [
        "Led development of Risk-Based Supervision System for Ghana’s Pensions Industry.",
        "Built a regulatory risk toolkit using Yii2, SQL Server, Redis queues (40 workers).",
        "Integrated Python's FASTAPIs to cut risk analysis time to only 2 hours."
      ]
    },
    {
      role: "Graduate Trainee",
      company: "Attain Enterprise Solutions",
      location: "Nairobi, Kenya",
      date: "Aug 2022 – Oct 2023",
      status: "Completed",
      highlights: [
        "Contributed to RIMS for Uganda Electricity Authority (Investment, Outage modules).",
        "Developed e-commerce Auctioning Mobile App with modern UI.",
        "Participated in code reviews, bug tracking, and documentation."
      ]
    },
    {
      role: "Android Developer Intern",
      company: "AO Technology Group Kenya",
      location: "Nairobi, Kenya",
      date: "Feb 2021 – Apr 2021",
      status: "Completed",
      highlights: [
        "Developed E-Results Android app with real-time REST API sync.",
        "Improved UX and integrated Android Studio print features."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-3xl font-semibold mb-10 text-center text-white">Professional Experience</h2>
      <div className="relative border-l-2 border-gray-200 space-y-8 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative shadow rounded-xl p-6 border">
            {/* Timeline Circle */}
            

            <h3 className="text-xl font-bold text-purple-700">{exp.role}</h3>
            <p className="text-sm text-white">{exp.date} • {exp.company}, {exp.location}</p>

            <div className="mt-4 space-y-2 text-white text-sm">
              {exp.highlights.map((point, i) => (
                <p key={i}>• {point}</p>
              ))}
            </div>
          </div>
        ))}
            {/* Resume Download Button */}
    <a
      href="/resume.pdf"
      download
      className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
    >
      📄 Download Resume
    </a>
      </div>
      
    </section>
  );
};


const Education = () => (
  <section className="py-20 px-6 md:px-20 text-white">
    <h2 className="text-3xl font-bold mb-6 text-white text-center">Education</h2>
    <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1 text-left text-white">
      <h3 className="text-xl font-semibold">B.Sc. in Information Technology</h3>
      <p className="text-sm mt-1">Multimedia University of Kenya</p>
      <p className="text-xs  mt-1">2018 - 2022</p>
    </div>
  </section>
);



const Certifications = () => (
  <section className="py-20 px-6 md:px-20 text-white text-center">
    <h2 className="text-3xl font-bold mb-10 text-white">Certifications</h2>
    
    <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 text-left text-white">
      <div className="border-l-4 border-green-500 shadow-sm px-4 py-3 rounded bg-white/5 backdrop-blur-sm">
        <span className="font-medium block">Microsoft 365 Certified: Fundamentals</span>
        <p className="text-sm mt-1">Issued Mar 2025</p>
      </div>
      
      <div className="border-l-4 border-yellow-500 shadow-sm px-4 py-3 rounded bg-white/5 backdrop-blur-sm">
        <span className="font-medium block">PHP Yii2 Course — Udemy</span>
        <p className="text-sm mt-1">Completed Dec 2023</p>
      </div>
    </div>
  </section>
);







const Contact = () => (
  <section className="py-20 px-6 md:px-20 relative z-10"> {/* Add relative and z-10 here */}
    <h2 className="text-3xl font-semibold mb-10 text-center text-white">Let's build</h2>

    <div className="flex justify-center gap-6">
      {/* Phone */}
      <a
        href="tel:+254799178783"
        className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        title="Call Robert"
      >
        <Phone size={28} className="text-white" />
      </a>

      {/* Email */}
      <a
        href="mailto:robertomungai001@gmail.com"
        className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        title="Email Robert"
      >
        <Mail size={28} className="text-white" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/thufu7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        title="GitHub"
      >
        <Github size={28} className="text-white" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/robert-mungai-529306219/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        title="LinkedIn"
      >
        <Linkedin size={28} className="text-white" />
      </a>
    </div>

    <p className="text-sm mt-8 text-center text-white">
      Available for freelance, remote, and full-time roles.
    </p>
  </section>
);


