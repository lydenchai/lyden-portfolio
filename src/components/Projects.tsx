import { motion } from "framer-motion";

// Import project images
import hrImg from "../assets/imgs/hr.png";
import accImg from "../assets/imgs/acc.png";
import benefitImg from "../assets/imgs/benefit.png";
import inspectionImg from "../assets/imgs/inspection.png";
import hospitalImg from "../assets/imgs/hospital.png";
import rehabilitationImg from "../assets/imgs/rehabilitation.png";
import goAheadImg from "../assets/imgs/go-ahead.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NSSF HR Admin",
      description:
        "Comprehensive HR management platform streamlining employee lifecycle, payroll processing, and workforce analytics for Cambodia's National Social Security Fund.",
      image: hrImg,
      featured: true,
      details: {
        title: "Human Resource Management System",
      },
    },
    {
      id: 2,
      title: "NSSF Accounting Admin",
      description:
        "Advanced financial management system automating accounting processes, generating detailed reports, and ensuring compliance with national financial regulations.",
      image: accImg,
      featured: true,
      details: {
        title: "Accounting Management System",
      },
    },
    {
      id: 3,
      title: "NSSF Benefit Admin",
      description:
        "Digital healthcare benefit platform enabling seamless claim processing, provider network management, and patient care coordination across Cambodia.",
      image: benefitImg,
      featured: true,
      details: {
        title: "Health Care Benefit Management System",
      },
    },
    {
      id: 4,
      title: "NSSF Inspection Admin",
      description:
        "Smart inspection management system optimizing compliance monitoring, scheduling inspections, and generating comprehensive audit reports for social security operations.",
      image: inspectionImg,
      featured: true,
      details: {
        title: "Social Security Inspection System",
      },
    },
    {
      id: 5,
      title: "NSSF Hospital Admin",
      description:
        "Integrated hospital management solution coordinating patient care, medical records, staff scheduling, and resource allocation for healthcare facilities.",
      image: hospitalImg,
      featured: true,
      details: {
        title: "Hospital Management System",
      },
    },
    {
      id: 6,
      title: "NSSF Rehabilitation Admin",
      description:
        "Specialized rehabilitation management platform tracking patient progress, therapy sessions, and recovery outcomes with data-driven insights.",
      image: rehabilitationImg,
      featured: true,
      details: {
        title: "Rehabilitation Management System",
      },
    },
    {
      id: 7,
      title: "Bontub Rental Platform",
      description:
        "Modern property rental marketplace connecting landlords and tenants with smart matching algorithms, secure payments, and comprehensive property management tools.",
      image: "https://bontub.com/bg-hero.png",
      featured: true,
      details: {
        title: "Rental Management System",
      },
    },
    {
      id: 8,
      title: "GoAhead School Management System",
      description:
        "Comprehensive school management platform streamlining student enrollment, academic tracking, staff management, and administrative processes for educational institutions.",
      image: goAheadImg,
      featured: false,
      details: {
        title: "School Management System",
      },
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Showcasing enterprise-level applications and platforms I've
            developed for government institutions and modern businesses,
            focusing on scalable solutions and exceptional user experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4 sm:px-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
