import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-3xl font-heading font-bold text-foreground mb-3 md:mb-4">
            Let's Work Together!
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
            Have a project in mind? Let's create something amazing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <motion.a 
              href="mailto:contact@anjanprajapati.com" 
              className="btn-primary text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255,107,53,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#resume" 
              className="btn-outline text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
