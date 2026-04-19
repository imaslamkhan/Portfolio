import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { HiDownload, HiEye, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiDart, SiFirebase, SiNodedotjs, SiFlutter, SiReact } from 'react-icons/si';

const ROLES = ['Flutter Developer', 'Full Stack Engineer', 'Mobile App Specialist', 'Cross-Platform Dev'];

// Floating code snippets for background
const CODE_SNIPPETS = [
  'flutter build apk', 'await Future.wait()', 'StatefulWidget',
  'app.listen(3000)', 'const [state, setState]', 'db.collection()',
  'Widget build(ctx)', 'async/await', 'MongoDB.connect()',
  'Navigator.push()', 'setState(() {})', 'res.json(data)',
];

const FloatingCode = ({ text, style }) => (
  <motion.span
    className="absolute font-mono text-xs text-blue-400/20 dark:text-blue-300/15 select-none pointer-events-none whitespace-nowrap"
    style={style}
    animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
    transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
  >
    {text}
  </motion.span>
);

const TypedRole = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const role = ROLES[roleIdx];
    if (!deleting) {
      if (displayed.length < role.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {displayed}<span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};

const Hero = () => {
  const [codePositions] = useState(() =>
    CODE_SNIPPETS.map(() => ({
      top: `${5 + Math.random() * 85}%`,
      left: `${Math.random() * 90}%`,
    }))
  );

  const scrollToProjects = () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mohammad_Aslam_Khan_Resume.pdf';
    link.click();
  };

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Years Exp', value: '1+' },
    { label: 'Clients', value: '4+' },
    { label: 'Tech Stack', value: '8+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20" />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Blobs */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      {/* Floating code */}
      {CODE_SNIPPETS.map((snippet, i) => (
        <FloatingCode key={i} text={snippet} style={codePositions[i]} />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200/60 dark:border-blue-800/40 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to work 
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Aslam Khan
              </span>
            </h1>

            <div className="text-xl sm:text-2xl font-semibold mb-6 h-10">
              <TypedRole />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Specialising in scalable cross-platform mobile apps and robust backend services.
              Passionate about clean architecture, performance optimisation, and user-centric design.
            </motion.p>

            {/* Tech icons */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-400 dark:text-gray-500">Stack:</span>
              <div className="flex gap-3">
                {[
                  { Icon: SiFlutter, color: '#54C5F8', label: 'Flutter' },
                  { Icon: SiDart, color: '#0553B1', label: 'Dart' },
                  { Icon: SiReact, color: '#61DAFB', label: 'React' },
                  { Icon: SiNodedotjs, color: '#339933', label: 'Node.js' },
                  { Icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
                ].map(({ Icon, color, label }) => (
                  <motion.div key={label} title={label} whileHover={{ y: -3, scale: 1.15 }}
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 cursor-default"
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="grid grid-cols-4 gap-3 mb-8 max-w-sm mx-auto lg:mx-0"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700/50">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start"
            >
              <motion.button onClick={scrollToProjects}
                className="group relative px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-shadow duration-300"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                <HiEye className="w-5 h-5 relative z-10" />
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button onClick={handleDownloadResume}
                className="px-7 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-400">Connect:</span>
              {[
                { href: 'mailto:aslamyakubkhan@gmail.com', Icon: HiMail, label: 'Email', hoverColor: 'group-hover:text-red-500' },
                { href: 'https://linkedin.com/in/aslam-khan-ab657b223', Icon: FaLinkedin, label: 'LinkedIn', hoverColor: 'group-hover:text-blue-700' },
                { href: 'https://github.com', Icon: FaGithub, label: 'GitHub', hoverColor: 'group-hover:text-gray-900 dark:group-hover:text-white' },
              ].map(({ href, Icon, label, hoverColor }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`group p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <Icon className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-colors duration-300 ${hoverColor}`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200/40 dark:border-blue-800/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-purple-200/30 dark:border-purple-800/20"
              />

              {/* Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl" />

              {/* Image */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-1.5">
                <div className="overflow-hidden rounded-xl">
                  <img src="/akk.png" alt="Mohammad Aslam Khan" className="w-full h-auto object-cover rounded-xl" />
                </div>
              </div>

              {/* Flutter badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{ delay: 1, y: { duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0 } }}
                className="absolute -right-6 top-1/3 bg-white dark:bg-gray-800 px-3 py-2 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              >
                <SiFlutter className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Flutter Expert</span>
              </motion.div>

              {/* Exp badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                1+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-400">scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-1.5"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
