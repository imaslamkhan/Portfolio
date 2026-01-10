import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap,  HiStar, HiNewspaper, HiCode, HiUsers } from 'react-icons/hi';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const achievements = [
    {
      icon: HiAcademicCap,
      title: 'Academic Excellence',
      description: 'Bachelor of Technology in Computer Science with 8.2 CGPA from GH Raisoni University',
      details: 'Dean\'s List 2021-2024',
      color: 'from-blue-500 to-cyan-500',
      year: '2024'
    },
    {
      icon: HiNewspaper,
      title: 'Research Publication',
      description: 'Published research paper on "Emotional Health Monitoring on Social Media" in IJITE Journal',
      details: 'International Journal of Innovative Trends in Engineering (2023)',
      color: 'from-green-500 to-emerald-500',
      year: '2023'
    },
    // {
    //   icon: HiTrophy,
    //   title: 'Diploma Achievement',
    //   description: 'Diploma in Computer Science with 82.29% from Anjuman Polytechnic Nagpur',
    //   details: 'Dean\'s List 2018-2021',
    //   color: 'from-purple-500 to-pink-500',
    //   year: '2021'
    // },
    {
      icon: HiCode,
      title: 'Technical Leadership',
      description: 'Led development of 10+ mobile applications with 100% client satisfaction rate',
      details: 'Flutter & Full Stack Development',
      color: 'from-orange-500 to-red-500',
      year: '2023-24'
    },
    {
      icon: HiUsers,
      title: 'Team Collaboration',
      description: 'Successfully collaborated with cross-functional teams to deliver projects 20% ahead of schedule',
      details: 'Leadership & Communication Skills',
      color: 'from-indigo-500 to-purple-500',
      year: '2024'
    },
    {
      icon: HiStar,
      title: 'Freelance Success',
      description: 'Generated $15K+ revenue through freelance projects while maintaining full-time employment',
      details: 'Entrepreneurial Skills',
      color: 'from-pink-500 to-rose-500',
      year: '2023-24'
    }
  ];

  const certifications = [
    {
      title: 'Flutter Development',
      issuer: 'Google',
      year: '2023',
      status: 'Certified'
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'MongoDB University',
      year: '2023',
      status: 'Certified'
    },
    {
      title: 'React.js Development',
      issuer: 'Meta',
      year: '2022',
      status: 'Certified'
    },
    {
      title: 'Mobile App Development',
      issuer: 'Coursera',
      year: '2022',
      status: 'Certified'
    }
  ];

  return (
    <section id="achievements" ref={ref} className="py-20 bg-white dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-800 p-6 hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-neon-blue">
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {achievement.description}
                </p>

                <div className="text-sm text-gray-500 dark:text-gray-500 italic">
                  {achievement.details}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm rounded-lg border border-neon-blue/20 p-4 hover:shadow-lg hover:shadow-neon-blue/10 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.year}
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Languages
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'English', level: 'Fluent' },
              { lang: 'Hindi', level: 'Fluent' },
              { lang: 'Telugu', level: 'Spoken & Understood' }
            ].map((language, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-800"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {language.lang}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  ({language.level})
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;