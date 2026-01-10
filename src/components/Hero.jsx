import { motion } from 'framer-motion';
import { HiDownload, HiEye, HiMail, HiCode, HiBriefcase } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiDart, SiFirebase, SiNodedotjs, SiFlutter } from 'react-icons/si';

// If you want mobile icons, you can use these instead:
// import { IoLogoAndroid, IoLogoApple } from 'react-icons/io';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mohammad_Aslam_Khan_Resume.pdf';
    link.click();
  };

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Years Exp', value: '2+' },
    { label: 'Clients', value: '4+' },
    { label: 'Tech Stack', value: '8+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden md:py-20">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-purple-100/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800/30 backdrop-blur-sm mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Available for new opportunities
              </span>
            </motion.div> */}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
              <span className="block text-gray-900 dark:text-white">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mohammad Aslam Khan
              </span>
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold mb-2">
                Senior Flutter Developer & Full Stack Engineer
              </p>
              <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <HiCode className="w-5 h-5" />
                <span>Crafting digital experiences that matter</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              I specialize in building scalable cross-platform mobile applications 
              and robust backend services. With over 3 years of experience, I've delivered 
              impactful solutions for startups and enterprises alike. Passionate about 
              clean code, performance optimization, and user-centric design.
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Tech Stack:</span>
              <div className="flex gap-3">
                <SiFlutter className="w-6 h-6 text-blue-500" title="Flutter" />
                <SiDart className="w-6 h-6 text-blue-600" title="Dart" />
                <FaReact className="w-6 h-6 text-cyan-500" title="React" />
                <SiNodedotjs className="w-6 h-6 text-green-600" title="Node.js" />
                <SiFirebase className="w-6 h-6 text-yellow-500" title="Firebase" />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiEye className="w-5 h-5" />
                View My Work
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Connect with me:</span>
              <div className="flex gap-4">
                <motion.a
                  href="mailto:aslamyakubkhan@gmail.com"
                  className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiMail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/aslam-khan-ab657b223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-700" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Image Container */}
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative w-4/6 max-w-lg mx-auto">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
                
                {/* Image Container with Border Gradient */}
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Placeholder Image - Replace with your actual image */}
                    {/* <div className="aspect-[1] w-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white">MAK</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                        
                          <span className="block text-sm">Profile Image</span>
                          <span className="text-xs opacity-75">(Replace with your photo)</span>
                        </p>
                      </div>
                    </div> */}
                    {/* Uncomment and use this when you have your image */}
                    { 
                    <img
                      src="/Profile.jpg"
                      alt="Mohammad Aslam Khan"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                    }
                  </div>
                </div>

                {/* Floating Tech Cards */}
                {/* <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                   
                  </div>
                </motion.div> */}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-8 bottom-1/4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                   <SiFlutter className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-medium ">Flutter Expert</span>
                  </div>
                </motion.div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="font-semibold">2+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center mx-auto"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;