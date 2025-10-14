import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      platform: "Mail",
      href: "mailto:lyden.chai@gmail.com",
      icon: Mail,
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/lydenchai/",
      icon: Linkedin,
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/lydenchai/",
      icon: Instagram,
    },
    {
      platform: "GitHub",
      href: "https://github.com/lydenchai",
      icon: Github,
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Lyden CHAI
              </span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Frontend Developer passionate about creating exceptional digital
              experiences
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <motion.a
                  key={platform.platform}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={platform.platform}
                >
                  <IconComponent
                    size={20}
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.a>
              );
            })}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lyden. All rights reserved. Built
              with React & Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
