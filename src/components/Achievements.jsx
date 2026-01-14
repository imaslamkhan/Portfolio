import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  HiAcademicCap, 
  HiStar, 
  HiNewspaper, 
  HiCode, 
  HiUsers,
  HiLightningBolt,
  HiCalendar,
  HiBriefcase,
  HiChartBar,
  HiTruck
} from 'react-icons/hi';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeAchievement, setActiveAchievement] = useState(null);

  const achievements = [
    {
      icon: HiAcademicCap,
      title: 'Academic Excellence',
      description: 'Bachelor of Technology in Computer Science with 8.2 CGPA. Consistently achieved academic excellence throughout the program.',
      details: ['Dean\'s List 2021-2024', 'University Topper in Software Engineering', 'Academic Scholarship Recipient'],
      color: 'from-blue-500 to-cyan-500',
      year: '2020-2024',
      institution: 'GH Raisoni University',
      highlights: [
        { label: 'CGPA', value: '8.2' },
        { label: 'Position', value: 'Top 5%' }
      ]
    },
    {
      icon: HiNewspaper,
      title: 'Research Publication',
      description: 'Published research paper on emotional health monitoring using social media data analysis in an international journal.',
      details: ['International Journal Publication', 'AI/ML Research', 'Data Analysis'],
      color: 'from-green-500 to-emerald-500',
      year: '2023',
      institution: 'IJITE Journal',
      highlights: [
        { label: 'Accuracy', value: '85%' },
        { label: 'Impact', value: 'Peer-reviewed' }
      ]
    },
    {
      icon: HiCode,
      title: 'Technical Leadership',
      description: 'Led development of 10+ mobile applications and desktop solutions with 100% client satisfaction.',
      details: ['Team Leadership', 'Project Management', 'Technical Architecture'],
      color: 'from-purple-500 to-pink-500',
      year: '2022-2024',
      institution: 'Freelance Projects',
      highlights: [
        { label: 'Projects', value: '10+' },
        { label: 'Satisfaction', value: '100%' }
      ]
    },
    {
      icon: HiLightningBolt,
      title: 'App Development Success',
      description: 'Successfully deployed applications serving thousands of users across education and enterprise domains.',
      details: ['Production Deployment', 'Scalable Architecture', 'User Growth'],
      color: 'from-orange-500 to-red-500',
      year: '2023-2024',
      institution: 'Live Projects',
      highlights: [
        { label: 'Users', value: '2000+' },
        { label: 'Uptime', value: '99.9%' }
      ]
    },
    {
      icon: HiUsers,
      title: 'Team Collaboration',
      description: 'Successfully collaborated with cross-functional teams to deliver complex projects ahead of schedule.',
      details: ['Agile Methodology', 'Cross-functional Teams', 'Client Communication'],
      color: 'from-indigo-500 to-purple-500',
      year: '2022-2024',
      institution: 'Professional Projects',
      highlights: [
        { label: 'Efficiency', value: '+20%' },
        { label: 'Early Delivery', value: '30 days' }
      ]
    },
    {
      icon: HiStar,
      title: 'Continuous Learning',
      description: 'Self-taught multiple technologies and frameworks while maintaining full-time work commitments.',
      details: ['Self-learning', 'Technology Adoption', 'Skill Development'],
      color: 'from-pink-500 to-rose-500',
      year: 'Ongoing',
      institution: 'Personal Development',
      highlights: [
        { label: 'Technologies', value: '15+' },
        { label: 'Projects', value: '20+' }
      ]
    }
  ];

  const timeline = [
    { year: '2020', event: 'Started B.Tech in Computer Science', status: 'Started' },
    { year: '2021', event: 'First Mobile App Development', status: 'Learning' },
    { year: '2022', event: 'First Freelance Project', status: 'Professional' },
    { year: '2023', event: 'Research Paper Published', status: 'Research' },
    { year: '2024', event: 'Multiple Production Apps', status: 'Expert' },
    { year: '2025', event: 'Advanced Full Stack Development', status: 'Mastery' }
  ];

  const languages = [
    { lang: 'English', level: 'Fluent', proficiency: 95 },
    { lang: 'Hindi', level: 'Native', proficiency: 100 },
    { lang: 'Telugu', level: 'Conversational', proficiency: 70 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="achievements" 
      ref={ref} 
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark-primary dark:to-dark-secondary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-4">
            MILESTONES & RECOGNITION
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Key milestones and recognitions throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              onMouseEnter={() => setActiveAchievement(index)}
              onMouseLeave={() => setActiveAchievement(null)}
              className="group"
            >
              <div className="h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl hover:shadow-yellow-500/10 dark:hover:shadow-yellow-400/5 transition-all duration-500 hover:-translate-y-2">
                
                {/* Achievement Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${achievement.color} rounded-xl mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Year Badge */}
                    <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">
                    {achievement.institution}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {achievement.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                        <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {highlight.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {highlight.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Details List */}
                  <div className="space-y-2">
                    {achievement.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
              Journey Timeline
            </span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-transparent transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.year}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        item.status === 'Started' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                        item.status === 'Professional' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        item.status === 'Research' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                        item.status === 'Expert' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-yellow-100 dark:border-yellow-800/30 p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Language Proficiency
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {language.lang}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {language.level}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                    />
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {language.proficiency}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;