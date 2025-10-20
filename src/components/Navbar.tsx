import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Get all sections
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      // Check which section is currently in view
      let currentSection = "home";

      for (const section of sections.slice(1)) {
        // Skip 'home', check others
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;

          // If we're past the section start (minus offset)
          if (scrollPosition >= elementTop - 100) {
            currentSection = section;
          }
        }
      }

      // Special case for top of page
      if (window.scrollY < 100) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#", section: "home" },
    { name: "About", href: "#about", section: "about" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Projects", href: "#projects", section: "projects" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Lyden CHAI
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.section;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 px-2 py-1 lg:px-3 lg:py-2 text-sm lg:text-base ${
                    isActive
                      ? "text-purple-600 bg-white/10 backdrop-blur-md rounded-full"
                      : scrolled
                      ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50 rounded-full"
                      : "text-gray-300 hover:text-white hover:bg-white/10 rounded-full"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="from-indigo-900 to-blue-800 bg-purple-50/50 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm lg:text-base cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-1.5 rounded-lg transition-colors duration-300 ${
              scrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mb-3 rounded-lg bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.section;
                return (
                  <motion.button
                    key={item.name}
                    type="button"
                    className={`flex items-center justify-between py-2.5 sm:py-3 font-medium transition-colors duration-300 text-sm sm:text-base w-full text-left ${
                      isActive
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-indigo-900 to-blue-800 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
              <motion.button
                className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
