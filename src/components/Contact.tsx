import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const subject = encodeURIComponent(
        formData.subject || "Contact from Portfolio"
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:lyden.chai@gmail.com?subject=${subject}&body=${body}`;

      setSubmitStatus({
        type: "success",
        message: "Opening your email client...",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: Phone,
      title: "Phone",
      value: "+(855) 90 768 246",
      href: "tel:+85590768246",
    },
    {
      Icon: MapPin,
      title: "Location",
      value: "Phnom Penh, Cambodia",
      href: "https://www.google.com/maps/@11.5643598,104.9335309,12166m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

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
    <section id="contact" className="py-16 lg:py-20 bg-black relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)",
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="absolute -inset-10 opacity-40">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/30 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
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
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life. I'm always open to new opportunities and
            interesting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Let's Talk
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                I'm currently available for freelance projects and full-time
                opportunities. Whether you have a project in mind or just want
                to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map(({ Icon, title, value, href }, index) => (
                <motion.a
                  key={title}
                  href={href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <Icon
                      size={18}
                      className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12"
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <motion.a
                      key={platform.platform}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
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
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-4 sm:p-6 lg:p-8 bg-white/10 backdrop-blur-xl border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Project inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="sm:rows-6 w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[#0071e3] hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
