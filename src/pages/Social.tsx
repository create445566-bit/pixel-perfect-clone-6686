import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Linkedin, Twitter, Youtube, Instagram, ExternalLink,
  MessageCircle, HelpCircle, Pin, AtSign, Globe, Download,
  Github, Code, BookOpen
} from "lucide-react";

const socialMedia = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/anjanprajapati" },
  { name: "X (Twitter)", icon: Twitter, url: "https://twitter.com/anjanprajapati" },
  { name: "Discord", icon: MessageCircle, url: "https://discord.com/" },
  { name: "Quora", icon: HelpCircle, url: "https://quora.com/" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/anjanprajapati" },
  { name: "Pinterest", icon: Pin, url: "https://pinterest.com/" },
  { name: "Threads", icon: AtSign, url: "https://threads.net/" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@anjanprajapati" },
  { name: "Reddit", icon: Globe, url: "https://reddit.com/" },
  { name: "ORCID", icon: Globe, url: "https://orcid.org/" },
];

const profiles = [
  { name: "My Resume", icon: Download, url: "#" },
  { name: "GitHub", icon: Github, url: "https://github.com/anjanprajapati" },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/" },
  { name: "TakeUforward", icon: BookOpen, url: "https://takeuforward.org/" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
};

const SocialCard = ({ item }: { item: { name: string; icon: React.ElementType; url: string } }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    variants={cardVariants}
  >
    <item.icon className="w-5 h-5 text-accent shrink-0" />
    <span className="text-sm font-medium text-foreground">{item.name}</span>
  </motion.a>
);

const ProfileCard = ({ item }: { item: { name: string; icon: React.ElementType; url: string } }) => (
  <motion.a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-3 bg-card rounded-xl px-5 py-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    variants={cardVariants}
  >
    <item.icon className="w-7 h-7 text-accent" />
    <span className="text-sm font-medium text-foreground">{item.name}</span>
  </motion.a>
);

const Social = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-accent mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Social Links
          </motion.h1>

          {/* Social Media */}
          <motion.section
            className="mb-12"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            <h2 className="text-xl font-bold text-foreground mb-5">Social Media</h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              animate="visible"
            >
              {socialMedia.map((item) => (
                <SocialCard key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.section>

          {/* Profiles & Coding Platforms */}
          <motion.section
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl font-bold text-foreground mb-5">Profiles & Coding Platforms</h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              animate="visible"
            >
              {profiles.map((item) => (
                <ProfileCard key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Social;
