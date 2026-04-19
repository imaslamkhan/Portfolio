import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiNewspaper, HiCode, HiGlobe } from 'react-icons/hi';

const achievements = [
  {
    icon: HiAcademicCap,
    title: 'B.Tech — Computer Science',
    institution: 'GH Raisoni University',
    year: '2024',
    color: 'from-blue-500 to-cyan-500',
    highlights: [{ label: 'CGPA', value: '8.2' }, { label: 'Duration', value: '4 Years' }],
    description: 'Graduated with distinction in Computer Science. Focus on software engineering, data structures, and mobile application development.',
  },
  {
    icon: HiAcademicCap,
    title: 'Diploma — Computer Science',
    institution: 'Anjuman Polytechnic',
    year: '2021',
    color: 'from-green-500 to-emerald-500',
    highlights: [{ label: 'Score', value: '82%' }, { label: 'Duration', value: '3 Years' }],
    description: 'Completed diploma with 82% marks, building a strong foundation in programming, networking, and hardware concepts.',
  },
  {
    icon: HiNewspaper,
    title: 'Research Publication',
    institution: 'IJITE Journal',
    year: '2023',
    color: 'from-purple-500 to-pink-500',
    highlights: [{ label: 'Domain', value: 'NLP / ML' }, { label: 'Status', value: 'Published' }],
    description: '"Emotional Health Monitoring on Social Media" — Applied NLP and ML techniques to analyse emotional health indicators from social media data.',
  },
  {
    icon: HiCode,
    title: '10+ Production Apps',
    institution: 'Professional Projects',
    year: '2022–2025',
    color: 'from-orange-500 to-red-500',
    highlights: [{ label: 'Apps', value: '10+' }, { label: 'Platforms', value: 'Android · iOS · Desktop' }],
    description: 'Successfully delivered over 10 production-grade applications across EdTech, logistics, enterprise management, and survey domains.',
  },
  {
    icon: HiGlobe,
    title: 'Languages',
    institution: 'Multilingual',
    year: '',
    color: 'from-indigo-500 to-purple-500',
    highlights: [{ label: 'Fluent', value: 'English · Hindi' }, { label: 'Conversational', value: 'Telugu' }],
    description: 'Fluent in English and Hindi; conversational Telugu. Effective communicator across cross-functional and multicultural teams.',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section id="achievements" ref={ref} className="py-24 bg-white dark:bg-dark-primary relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-semibold mb-4">
            EDUCATION & MILESTONES
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-400"
            >
              {/* Top accent */}
              <div className={`h-1 bg-gradient-to-r ${ach.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${ach.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <ach.icon className="w-6 h-6 text-white" />
                  </div>
                  {ach.year && (
                    <span className="text-xs font-bold px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 rounded-full">
                      {ach.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {ach.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{ach.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{ach.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {ach.highlights.map((h, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                      <div className="text-base font-bold text-gray-900 dark:text-white">{h.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{h.label}</div>
                    </div>
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

export default Achievements;
