import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiDownload } from "@mdi/js";

// Import CV
import cvFile from "../assets/cv/curriculum-vitae.pdf";
import myPhoto from "../assets/imgs/photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56 m-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r bg-white p-1">
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-gradient mb-3 sm:mb-4 lg:mb-6">
              Lyden CHAI
            </span>
            <span className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting exceptional digital experiences with modern web
            technologies. Passionate about creating intuitive, performant, and
            beautiful user interfaces.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href={cvFile}
              download="Lyden_Chai_CV.pdf"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-gray-400 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon path={mdiDownload} size={0.8} className="text-current" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              {
                icon: mdiLinkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/lyden-chai/",
                target: "_blank",
              },
              {
                icon: mdiInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/lyden.official",
                target: "_blank",
              },
              {
                icon: mdiGithub,
                label: "GitHub",
                href: "https://github.com/lydenchai",
                target: "_blank",
              },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  path={icon}
                  size={1}
                  color="white"
                  className="sm:w-6 sm:h-6 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
