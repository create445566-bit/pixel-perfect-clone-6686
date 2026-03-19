import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's Work Together!
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind? Let's create something amazing.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="mailto:contact@anjanprajapati.com" 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255,107,53,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href="#resume" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
