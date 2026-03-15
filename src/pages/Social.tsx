import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, Linkedin, Twitter, Youtube, Instagram, Mail, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/anjanprajapati",
    handle: "@anjanprajapati",
    description: "Check out my open-source projects and contributions.",
    color: "bg-[hsl(0,0%,15%)]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/anjanprajapati",
    handle: "Anjan Prajapati",
    description: "Connect with me professionally and see my career journey.",
    color: "bg-[hsl(210,80%,45%)]",
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    url: "https://twitter.com/anjanprajapati",
    handle: "@anjanprajapati",
    description: "Follow me for tech insights and project updates.",
    color: "bg-[hsl(203,89%,53%)]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@anjanprajapati",
    handle: "@anjanprajapati",
    description: "Watch tutorials and development vlogs.",
    color: "bg-[hsl(0,100%,50%)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/anjanprajapati",
    handle: "@anjanprajapati",
    description: "Behind-the-scenes of my creative and coding life.",
    color: "bg-gradient-to-br from-[hsl(37,97%,60%)] via-[hsl(340,82%,52%)] to-[hsl(280,72%,50%)]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@anjanprajapati.com",
    handle: "contact@anjanprajapati.com",
    description: "Reach out directly for collaborations and inquiries.",
    color: "bg-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Social = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Social Media</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Let's connect! Find me on these platforms and stay updated with my latest work.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card group cursor-pointer block"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center shrink-0`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{social.name}</h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-accent font-medium truncate">{social.handle}</p>
                    <p className="text-sm text-muted-foreground mt-1">{social.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Social;
