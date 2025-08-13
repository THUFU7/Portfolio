import React, { useState } from 'react';
import { motion } from 'framer-motion';
import avatar from './assets/avatar.jpg';
import avatarFun from './assets/avatar-fun.jpg';
import { Phone, Mail, Github, Linkedin, ShieldCheck, Briefcase } from 'lucide-react';
import Lottie from 'lottie-react';
import devAnimation from './assets/Coding.json';
import funAnimation from './assets/Vacation.json';

const App = () => {
  const [view, setView] = useState('official');

  const toggleView = () => setView(view === 'personal' ? 'official' : 'personal');

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${view === 'official' ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      <main className="font-sans relative z-10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center py-4">
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <Lottie
                animationData={view === 'official' ? devAnimation : funAnimation}
                loop
                autoplay
                className="w-32 h-32 md:w-25 md:h-25 mb-3"
              />
              {/* <img
                src={view === 'official' ? devAnimation : avatar}
                alt="Robert Mungai"
                className="w-10 h-10 rounded-full object-cover"
              /> */}
              <span className="text-lg font-bold uppercase opacity-70">
  {view === 'official' ? 'NO PRESSURE, NO DIAMONDS' : 'YES PRESSURE, YES DIAMONDS'}
</span>

            </div>

            {/* Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold opacity-70">OFFICIAL</span>
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
              <span className="text-sm font-bold opacity-70">UNOFFICIAL</span>
            </div>
          </div>

          <Hero view={view} />
          {view === 'personal' && <LifeOutsideCode />}
          {view === 'official' && (
            <>
              <About />
              <Projects />
              <Experience />
              <EducationCertifications />
            </>
          )}
        </div>
      </main>
      <Contact view={view} />
    </div>
  );
};

const Hero = ({ view }) => (
  <section
    className={`min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 relative transition-colors duration-500 ${view === 'official' ? 'bg-white text-black' : 'bg-black text-white'}`}
    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/triangles.png')", backgroundRepeat: 'repeat' }}
  >
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      {view === 'official' ? "SALUT! I am Robert Mungai." : 'SALUT! I am...well you already know who I am 😄'}
    </motion.h1>

    <p className="text-lg md:text-xl max-w-2xl">
      {view === 'official'
        ? 'Systems Developer | MS Dynamics 365 Business Central | Tech Enthusiast'
        : 'Good things comes in threes: Lover of swimming, chess, and clutching Chicken Dinners 🏆 - well at least quarter the time.'}
    </p>

    {/* {view === 'official' && (
      'Crafting scalable, secure, and smart systems — from API magic to full-stack engineering.'
    )} */}
  </section>
);



const LifeOutsideCode = () => {
  const hobbies = [
    { emoji: '🏋️‍♂️', title: 'Gym', desc: 'Physical fitness brings along mental fitness and toughness. I employ you to try it if you are not already. Slay your demons with a heavy deadlift.' },
    { emoji: '♟️', title: 'Chess Strategist', desc: 'I enjoy the calm chaos of the 64 squares. Tactics, endgames, puzzles, and the all important sacrifices — name it.' },
    { emoji: '🏊', title: 'Swimmer', desc: 'Gets the mind off the code that is working locally but not on production. Freestyle is my thing.' },
    { emoji: '🎮', title: 'PUBG Squad Leader', desc: 'Catch me on Livik. Mid-range fights, a little bit of camping, a dash of toxicity and a rush to kill bots all for the chicken dinner and a high K/D.' }
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
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'jQuery', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-black">About Me</h2>
      <p className="max-w-3xl mx-auto leading-relaxed text-lg text-black-200 text-center">
        I'm a Systems Developer from Nairobi, Kenya who thrives at the intersection of code, creativity, and real-world impact. From building regulatory engines for pension authorities to shipping full-stack apps that scale, I’ve honed my skills across PHP, React, Python, Yii2, Laravel, and more.
        <br /><br />
        Whether it’s optimizing backend systems with Redis or crafting sleek UIs in React, I take pride in building solutions that matter — especially in high-stakes industries like finance, energy, and compliance. Let's engineer the future, one system at a time.
        <br /><br />
        <b><u>BRING ON THE PRESSURE!</u></b>
      </p>
      <h2 className="text-3xl font-semibold mt-10 text-center">Tech Stack</h2>

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
    <section className="py-20 px-6 md:px-20 text-black">
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
                <p className="text-gray-800 text-sm text-black">{project.description}</p>

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
        "Spearheaded the development of a Risk-Based Supervision System transforming regulatory compliance in Ghana's pensions sector.",
        "Engineered a risk toolkit calculating risk ratings via financial returns and surveys for better decision-making.",
        "Built robust web applications using Yii2 & SQL Server, boosting operational efficiency significantly.",
        "Integrated with government pensions systems, reducing manual return analysis by over 80%.",
        "Implemented APIs (REST, SOAP) to streamline cross-platform data exchange."
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
        "Developed e-commerce Auctioning Mobile App with sleek UI.",
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
        "Built E-Results Android app with real-time REST API sync.",
        "Improved UX & integrated print features via Android Studio."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 text-black">
      <h2 className="text-3xl font-bold mb-6 text-black text-center">Experience</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white border-l-4 border-purple-600 shadow-lg p-6 rounded-lg relative overflow-hidden group hover:shadow-xl transition duration-300"
          >
            <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              {exp.status}
            </span>
            <h3 className="text-xl font-bold text-purple-700 mb-1">{exp.role}</h3>
            <p className="text-sm text-gray-600">{exp.company} • {exp.location}</p>
            <p className="text-xs text-gray-400 mb-3">{exp.date}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/Robert_Mungai_Resume.pdf"
          download
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-800 transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};


const EducationCertifications = () => {
  const microsoftLogo = require('./assets/ms.png');
  const udemyLogo = require('./assets/udemy.png');

  const certs = [
    {
      name: 'Microsoft 365 Certified: Fundamentals',
      date: 'Issued Mar 2025',
      file: '/ms-certificate.pdf',
      logo: microsoftLogo,
      badgeUrl: 'https://www.credly.com/badges/microsoft-fundamentals',
      verified: true
    },
    {
      name: 'PHP Yii2 Course — Udemy',
      date: 'Completed Dec 2023',
      file: '/udemy-cert.pdf',
      logo: udemyLogo,
      badgeUrl: 'https://udemy.com/certificate/php-yii2-course',
      verified: false
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 text-black">
      <h2 className="text-4xl font-bold mb-6 text-center text-black">Education & Certifications</h2>

      <div className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">B.Sc. in Information Technology</h3>
          <p className="text-sm mt-1">Multimedia University of Kenya</p>
          <p className="text-xs mt-1 text-gray-500">2018 - 2022</p>
        </motion.div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {certs.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.file}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-[1.01] bg-gradient-to-br from-white via-gray-50 to-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 p-6">
              <img src={cert.logo} alt={cert.name} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-purple-700 group-hover:underline flex items-center gap-1">
                  {cert.name}
                  {cert.verified && <ShieldCheck size={16} className="text-green-600" title="Verified" />}
                </h3>
                <p className="text-sm text-gray-600">{cert.date}</p>
                <p className="text-xs mt-1 text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  ⬇ Download certificate
                </p>
                {cert.badgeUrl && (
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-1 inline-block text-blue-600 hover:underline"
                  >
                    View Badge →
                  </a>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Contact = ({ view }) => (
  <section className={`w-full py-20 px-6 md:px-20 relative z-10 ${view === 'official' ? 'bg-black text-white' : 'bg-white text-black'}`}>
    <h2 className="text-3xl font-semibold mb-10 text-center">Let's build</h2>

    <div className="flex justify-center gap-6">
      <a href="tel:+254799178783" className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Call Robert">
        <Phone size={28} />
      </a>
      <a href="mailto:robertomungai001@gmail.com" className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="Email Robert">
        <Mail size={28} />
      </a>
      <a href="https://github.com/thufu7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="GitHub">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/in/robert-mungai-529306219/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 transition" title="LinkedIn">
        <Linkedin size={28} />
      </a>
    </div>

    <p className="text-sm mt-8 text-center">
      Available for freelance, remote, and full-time roles.
    </p>
  </section>
);




export default App;
