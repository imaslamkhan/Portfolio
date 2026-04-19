import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiFlutter, SiDart, SiReact, SiNodedotjs, SiPython,
  SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql,
  SiFirebase, SiPostman, SiGit, SiFastapi
} from 'react-icons/si';
import { HiChip, HiCode, HiServer, HiDatabase } from 'react-icons/hi';

const skillCategories = [
  {
    label: 'Mobile & Frontend',
    icon: HiChip,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#54C5F8', level: 95 },
      { name: 'Dart', icon: SiDart, color: '#0553B1', level: 93 },
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 75 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 72 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 80 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 78 },
    ],
  },
  {
    label: 'Backend & APIs',
    icon: HiServer,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 82 },
      { name: 'Python', icon: SiPython, color: '#3776AB', level: 70 },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 65 },
      { name: 'REST APIs', icon: HiCode, color: '#6366F1', level: 88 },
    ],
  },
  {
    label: 'Databases & Tools',
    icon: HiDatabase,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 78 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 75 },
      { name: 'Git', icon: SiGit, color: '#F05032', level: 82 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  return (
    <section id="skills" ref={ref} className="py-24 bg-white dark:bg-dark-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills & Stack
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build fast, scalable, cross-platform applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 bg-gradient-to-br ${cat.color} rounded-lg`}>
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cat.label}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {cat.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIdx * 0.15 + skillIdx * 0.06 }}
                      whileHover={{ y: -4, scale: 1.04 }}
                      className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
                    >
                      <Icon className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">{skill.name}</span>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: catIdx * 0.15 + skillIdx * 0.06 + 0.4 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-5">Core Competencies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Cross-Platform Mobile Dev','Flutter Desktop Apps','REST API Design & Integration','Full-Stack Development','UI/UX Prototyping','Database Architecture','Performance Optimisation','AI/ML Integration'].map((comp, i) => (
              <motion.span
                key={comp}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40"
              >
                {comp}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
