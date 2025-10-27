import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/lyden-chai/",
      target: "_blank",
    },
    {
      icon: Instagram,
      platform: "Instagram",
      href: "https://www.instagram.com/lyden.official/",
      target: "_blank",
    },
    {
      icon: Github,
      platform: "GitHub",
      href: "https://github.com/lydenchai",
      target: "_blank",
    },
  ];
  return (
    <footer className="bg-[#1d1d1f] text-white py-8 sm:py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Lyden CHAI
              </span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base px-4">
              Frontend Developer passionate about creating exceptional digital
              experiences
            </p>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {socialLinks.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <motion.a
                  key={platform.platform}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={platform.platform}
                >
                  <IconComponent
                    size={16}
                    className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.a>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm px-4">
              © {new Date().getFullYear()} Lyden CHAI. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
