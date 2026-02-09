import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

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
    <footer className="bg-black text-white py-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow similar to Contact */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-900/20 filter blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Brand / Name */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Lyden CHAI
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base px-4 leading-relaxed font-light">
              Crafting exceptional digital experiences with passion and
              precision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            {socialLinks.map((platform, index) => (
              <motion.a
                key={platform.platform}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -3 }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <platform.icon
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright / Bottom */}
          <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Lyden CHAI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
