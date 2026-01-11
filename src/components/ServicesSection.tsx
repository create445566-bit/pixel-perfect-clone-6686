import { motion } from "framer-motion";
import { Code, Palette, Brain, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating fast & responsive websites using modern technologies.",
    cta: "Get Started",
    color: "bg-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Modern UIs and development that delights users & drive results.",
    cta: "View My CV",
    color: "bg-purple-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Smart AI web & AI products and solutions that create seamless workflows.",
    cta: "View My CV",
    color: "bg-green-500",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "AI integrated websites & mobile apps that are reliable & performant.",
    cta: "View Project",
    color: "bg-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card flex flex-col"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Title */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {service.description}
              </p>
              
              {/* CTA */}
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
