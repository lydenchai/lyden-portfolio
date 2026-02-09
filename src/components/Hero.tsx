import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiDownload } from "@mdi/js";
import cvFile from "../../public/cv/curriculum-vitae.pdf";
import myPhoto from "../../public/images/my-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-8 lg:py-20">
      {/* Background gradient + subtle particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(0, 113, 227, 0.08) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute -inset-10 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                y: [-15, -70, -15],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
          {/* Profile Photo */}
          <div className="relative h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 mx-auto mb-6 sm:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-500/20 via-purple-500/15 to-transparent blur-3xl scale-110"></div>
            <div className="relative rounded-full p-1 h-full w-full bg-gradient-to-tr from-gray-200 to-white shadow-inner">
              <img
                src={myPhoto}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <motion.h1
            className="flex flex-col font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4">
              Lyden CHAI
            </span>
            <span className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Frontend Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I design and build{" "}
            <strong>modern, responsive web interfaces</strong> that look great
            and work smoothly. I focus on creating fast, easy-to-use digital
            experiences that connect with people.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-400 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.a
              href={cvFile}
              download="Lyden_Chai_CV.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-400 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon path={mdiDownload} size={0.8} className="text-current" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              {
                icon: mdiLinkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/lyden-chai/",
              },
              {
                icon: mdiInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/lyden.official",
              },
              {
                icon: mdiGithub,
                label: "GitHub",
                href: "https://github.com/lydenchai",
              },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md border border-gray-400 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-500 hover:scale-110 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  path={icon}
                  size={1}
                  color="white"
                  className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-transform duration-300"
                />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
