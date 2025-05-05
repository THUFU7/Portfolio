// Enhanced App.js with toggle, Now Playing, alternate avatar, and animated hobbies
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatar from './assets/avatar-fun.jpg';
import avatarFun from './assets/avatar.jpg';

import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const App = () => {
  const [view, setView] = useState('official'); // Default view is 'official'

  const toggleView = () => setView(view === 'personal' ? 'official' : 'personal');

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden">
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
      <main className="font-sans text-white relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-end py-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-300 font-bold">OFFICIAL</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={view === 'personal'}
                  onChange={toggleView}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600 transition duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition peer-checked:translate-x-full"></div>
              </label>
              <span className="text-sm text-gray-300 font-bold">UNOFFICIAL</span>
            </div>
          </div>


          <Hero view={view} />
          {view === 'personal' && (
            <>
              <LifeOutsideCode />
            </>
          )}
          {view === 'official' && (
            <>
              <About />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
            </>
          )}
          <Contact />
        </div>
      </main>
    </div>
  );
};



const Hero = ({ view }) => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center p-10 bg-[#0f172a] text-white relative">
    {/* Giant circular border for creative look */}
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-blue-500 shadow-xl overflow-hidden mb-8"
    >
      <img
        src={view === 'official' ? avatar : avatarFun}
        alt="Robert Mungai"
        className="w-full h-full object-cover"
      />
    </motion.div>
    {view === 'official' ? (
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        SALUT! I am Robert Mungai.
      </motion.h1>
    ) : (
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-4xl font-bold"
      >
        SALUT! I am...well you already know who I am <span className="inline-block">😄</span>
      </motion.h1>
    )}
    <p className="mt-4 text-lg md:text-xl max-w-2xl">
      {view === 'official'
        ? 'Systems Developer | Full-Stack Engineer | Tech Enthusiast'
        : 'Good things comes in threes: Lover of swimming, chess, and clutching Chicken Dinners 🏆 - well at least quarter the time.'}
    </p>

    <p className="mt-2 text-sm text-gray-400 max-w-2xl">
      {view === 'official'
        ? 'Crafting scalable, secure, and smart systems — from API magic to full-stack engineering.'
        : 'When I’m not coding, I’m deep in a chess puzzle, a swimming lane, or a PUBG squad.'}
    </p>
  </section >
);


const LifeOutsideCode = () => {
  const hobbies = [
    { emoji: '🏋️‍♂️', title: 'Gym', desc: 'Physical fitness brings along mental fitness and toughness. I employ you to try it if you are not already. Slay your demons with a heavy deadlift.' },
    { emoji: '♟️', title: 'Chess Strategist', desc: 'I enjoy the calm chaos of the 64 squares. Tactics, endgames, puzzles, and the all important sacrifices — name it.' },
    { emoji: '🏊', title: 'Swimmer', desc: 'Gets the mind off the code that is working locally but not on production. Freestyle is my thing.' },
    { emoji: '🎮', title: 'PUBG Squad Leader', desc: 'Catch me on Livik. Mid-range fights, a little bit camping, and clutching for that Chicken Dinner.' }
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <div className="text-center text-white mb-10">
        <h2 className="text-4xl font-bold">Beyond the Code</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-lg">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className="bg-white/5 p-6 rounded-xl shadow hover:shadow-md transition text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-3xl mb-2">{hobby.emoji}</div>
            <strong>{hobby.title}</strong>
            <p className="text-sm mt-2 text-gray-300">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const About = () => {
  const techLogos = [
    { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Yii2', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yii/yii-original.svg' },
    { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">About Me</h2>
      <p className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-200 text-center">
        I'm a Systems Developer from Nairobi, Kenya who thrives at the intersection of code, creativity, and real-world impact. From building regulatory engines for pension authorities to shipping full-stack apps that scale, I’ve honed my skills across PHP, React, Python, Yii2, Laravel, and more.
        <br /><br />
        Whether it’s optimizing backend systems with Redis or crafting sleek UIs in React, I take pride in building solutions that matter — especially in high-stakes industries like finance, energy, and compliance. Let's engineer the future, one system at a time.
        <br /><br />
        <b>BRING ON THE PRESSURE!</b>
      </p>
      <h2 className="text-3xl font-semibold mt-10 mb-6 text-center text-white">Tech Stack</h2>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
        {techLogos.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            title={tech.name}
            className="w-14 h-14 md:w-16 md:h-16"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="object-contain w-full h-full transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};






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
          href="/Robert_Mungai_Resume.pdf"
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



const Certifications = () => {
  const microsoftLogo = require('./assets/ms.png');
  const udemyLogo = require('./assets/udemy.png');

  const certs = [
    {
      name: 'Microsoft 365 Certified: Fundamentals',
      date: 'Issued Mar 2025',
      border: 'border-green-500',
      file: '/ms-certificate.pdf',
      logo: microsoftLogo,
    },
    {
      name: 'PHP Yii2 Course — Udemy',
      date: 'Completed Dec 2023',
      border: 'border-yellow-500',
      file: '/udemy-cert.pdf',
      logo: udemyLogo,
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 text-white">
      <h2 className="text-3xl font-semibold mb-10 text-center">Certifications</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {certs.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.file}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={`flex rounded-xl shadow-md border overflow-hidden group hover:shadow-lg transition-all duration-300 ${cert.border}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Left: Logo */}
            <div className="flex items-center justify-center p-6 w-1/3 bg-white/10">
              <img src={cert.logo} alt="Cert Logo" className="h-20 object-contain" />
            </div>

            {/* Center: Text with background hover effect */}
            <div className="relative flex-1 p-6 space-y-3 overflow-hidden">
              <img
                src={cert.bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 blur-sm transition duration-300"
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold">{cert.name}</h3>
                <p className="text-sm text-gray-300">{cert.date}</p>
                <p className="text-xs text-white-400 mt-2 opacity-0 group-hover:opacity-100 transition">
                  ⬇ Click to download certificate
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};









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



export default App;
