import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

const thoughts = [
  { text: "Be kind. It's okay if someone doesn't meet your expectations.", author: "Ujwal Singh" },
  { text: "What if there is no other universe and this is the only one you get!?", author: "Ujwal Singh" },
  { text: "Pain is certain. Pain will go, but success will remain.", author: "Anonymous" },
  { text: "Khud ko akela hokar kiske paas dekhte ho?", author: "Anonymous" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const Thoughts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Thoughts</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Short reflections, honest thoughts, and things I remind myself of.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {thoughts.map((thought, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md border border-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div>
                  <Quote className="w-8 h-8 text-accent/60 mb-4 rotate-180" />
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    &ldquo;{thought.text}&rdquo;
                  </p>
                </div>
                <div>
                  <div className="h-px bg-border mb-4" />
                  <p className="text-muted-foreground text-sm font-medium">— {thought.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thoughts;
