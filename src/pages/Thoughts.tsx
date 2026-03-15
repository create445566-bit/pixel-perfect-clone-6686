import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why I Switched from Angular to React",
    excerpt: "After years of working with Angular, I made the switch to React. Here's what I learned and why I believe React is the better choice for most projects.",
    date: "March 10, 2026",
    readTime: "5 min read",
    tag: "Tech",
  },
  {
    title: "Building Scalable Design Systems",
    excerpt: "A deep dive into how I approach building design systems that scale across products, teams, and platforms without losing consistency.",
    date: "February 22, 2026",
    readTime: "8 min read",
    tag: "Design",
  },
  {
    title: "AI in Web Development: What's Real vs Hype",
    excerpt: "Separating the genuine use cases of AI in web development from the noise. Practical tools and techniques I use daily.",
    date: "January 15, 2026",
    readTime: "6 min read",
    tag: "AI",
  },
  {
    title: "The Freelancer's Guide to Client Communication",
    excerpt: "Lessons learned from working with dozens of clients. How clear communication can make or break a freelance project.",
    date: "December 5, 2025",
    readTime: "4 min read",
    tag: "Career",
  },
];

const tagColors: Record<string, string> = {
  Tech: "bg-primary/10 text-primary",
  Design: "bg-purple-100 text-purple-700",
  AI: "bg-green-100 text-green-700",
  Career: "bg-accent/10 text-accent",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Thoughts & Blog</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ideas, insights, and lessons from my journey as a developer and designer.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post) => (
              <motion.article
                key={post.title}
                className="service-card group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 15px 35px -10px rgba(0,0,0,0.12)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[post.tag]}`}>
                        {post.tag}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <h2 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                  <motion.div
                    className="shrink-0 mt-2"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thoughts;
