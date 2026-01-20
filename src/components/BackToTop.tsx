import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const scrolled = window.pageYOffset;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;

    setScrollProgress(progress);

    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 8px rgba(0, 113, 227, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group back-to-top-pulse cursor-pointer"
          aria-label="Back to top"
          title="Back to top"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <ChevronUp
              size={20}
              className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:animate-bounce"
            />
          </motion.div>

          {/* Animated background ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#0071e3] opacity-0 group-hover:opacity-20"
            initial={false}
            whileHover={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 50 50"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              initial={{ strokeDashoffset: `${2 * Math.PI * 20}` }}
              animate={{
                strokeDashoffset: `${
                  2 * Math.PI * 20 * (1 - scrollProgress / 100)
                }`,
              }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
