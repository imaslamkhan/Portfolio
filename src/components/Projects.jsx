import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiCode, HiDeviceMobile, HiDesktopComputer, HiUsers } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'EdTech Learning Platform',
    description: 'Cross-platform EdTech app supporting authentication, dynamic course content, and an integrated Meta LLaMA AI chatbot for student assistance and automated query resolution.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'Meta LLaMA AI'],
    icon: HiDeviceMobile,
    color: 'from-blue-500 to-cyan-500',
    category: 'Mobile App',
    platform: 'Android · iOS',
  },
  {
    title: 'Employee Productivity Tracker',
    description: 'Windows desktop application for monitoring employee activity with auto screenshot capture, Punch In/Out, leave management, and task tracking.',
    tech: ['Flutter', 'Dart', 'Desktop', 'SQLite'],
    icon: HiDesktopComputer,
    color: 'from-green-500 to-emerald-500',
    category: 'Desktop App',
    platform: 'Windows',
  },
  {
    title: 'Yard Management System',
    description: 'Vehicle entry, tracking, and exit management application with photo capture and cloud storage for inspection images using Cloudinary.',
    tech: ['Flutter', 'Dart', 'MongoDB', 'Node.js', 'Cloudinary'],
    icon: HiCode,
    color: 'from-purple-500 to-pink-500',
    category: 'Full Stack',
    platform: 'Android',
  },
  {
    title: 'Shipment Management App',
    description: 'End-to-end shipment lifecycle management covering order creation, dispatch, transit tracking, and delivery confirmation with a simple emergency-ready interface.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Android'],
    icon: HiDeviceMobile,
    color: 'from-orange-500 to-red-500',
    category: 'Mobile App',
    platform: 'Android',
  },
  {
    title: 'Voters Survey Application',
    description: 'Flutter-based voter data collection app with structured surveys, real-time API syncing, and a lightweight UI for fast field data entry by survey teams.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Android'],
    icon: HiUsers,
    color: 'from-indigo-500 to-blue-500',
    category: 'Mobile App',
    platform: 'Android',
  },
  {
    title: 'Emotional Health Monitoring',
    description: 'Research project applying NLP and ML techniques to analyse emotional health indicators from social media data. Published in IJITE Journal (2023) achieving 85% accuracy.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Analysis'],
    icon: HiCode,
    color: 'from-cyan-500 to-teal-500',
    category: 'Research',
    platform: 'Published 2023',
  },
];

const categories = ['All', 'Mobile App', 'Desktop App', 'Full Stack', 'Research'];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-50 dark:bg-dark-secondary relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications delivering measurable impact across various domains
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button key={cat} onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-purple-400'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-400"
            >
              {/* Image area */}
              <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                <div className={`p-5 bg-gradient-to-br ${project.color} rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                  <project.icon className="w-10 h-10 text-white" />
                </div>
                <span className="absolute top-3 right-3 text-xs font-medium px-3 py-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700">
                  {project.platform}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-100 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
