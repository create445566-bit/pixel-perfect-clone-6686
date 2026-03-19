import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectMediscan from "@/assets/project-mediscan.png";
import projectEcommerce from "@/assets/project-ecommerce.png";

const projects = [
  {
    image: projectMediscan,
    title: "MediScan App",
    subtitle: "AI-Powered Health Application",
    link: "#",
  },
  {
    image: projectEcommerce,
    title: "E-Commerce Platform",
    subtitle: "Custom Online Store",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  {project.subtitle}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
