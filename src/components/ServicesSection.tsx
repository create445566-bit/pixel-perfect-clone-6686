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

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card flex flex-col p-4 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 16px 32px -12px rgba(0,0,0,0.15)"
              }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${service.color} flex items-center justify-center mb-3 md:mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
              
              <h3 className="font-heading font-semibold text-sm md:text-lg text-foreground mb-1.5 md:mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 flex-grow">
                {service.description}
              </p>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-accent font-semibold text-xs md:text-sm"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.cta}
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
