import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Levitica Technologies Pvt. Ltd.',
    location: 'Hyderabad, India',
    period: 'Aug 2025 – Present',
    type: 'Full-time',
    color: 'from-blue-500 to-cyan-500',
    achievements: [
      'Building cross-platform mobile and desktop apps with Flutter & Dart using a shared codebase',
      'Integrating RESTful APIs (Node.js, FastAPI) with authentication, caching, and error handling',
      'Designing database interactions using MySQL and MongoDB for efficient data retrieval',
      'Testing and validating APIs via Postman; collaborating with backend teams on integration',
    ],
    tech: ['Flutter', 'Dart', 'Node.js', 'FastAPI', 'MySQL', 'MongoDB', 'Postman'],
  },
  {
    title: 'Full Stack Developer — Intern',
    company: 'SyncSAS Technologies',
    location: 'Nagpur, India',
    period: 'Jan 2024 – Jun 2024',
    type: 'Internship',
    color: 'from-purple-500 to-pink-500',
    achievements: [
      'Assisted in development of web and enterprise applications with focus on performance optimisation',
      'Built responsive UI components with HTML, CSS, and JavaScript, improving usability across devices',
      'Optimised SQL queries and integrated third-party APIs to improve data processing speed',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'APIs'],
  },
  {
    title: 'Full Stack Development — Intern',
    company: 'Qaswa Technologies Pvt. Ltd.',
    location: 'Nagpur, India',
    period: 'Jun 2020 – Aug 2020',
    type: 'Internship',
    color: 'from-green-500 to-emerald-500',
    achievements: [
      'Developed and maintained web applications using HTML, CSS, and JavaScript',
      'Designed UI elements such as forms, menus, and interactive components',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-24 bg-gray-50 dark:bg-dark-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            WORK HISTORY
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-3.5 md:left-5 top-6 w-5 h-5 bg-gradient-to-br ${exp.color} rounded-full border-4 border-gray-50 dark:border-dark-secondary shadow-lg`} />

                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-2 ${
                        exp.type === 'Full-time'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    <div className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${exp.color} text-white rounded-full`}>
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><HiBriefcase className="w-4 h-4" />{exp.company}</span>
                    <span className="flex items-center gap-1"><HiLocationMarker className="w-4 h-4" />{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
