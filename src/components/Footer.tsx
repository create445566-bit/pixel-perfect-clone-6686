import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { number: 1, path: "/" },
  { number: 2, path: "/about" },
  { number: 3, path: "/projects" },
  { number: 4, path: "/social" },
  { number: 5, path: "/thoughts" },
  { number: 6, path: "/contact" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <motion.footer
      className="py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © 2026 Anjan Prajapati. All rights reserved.
          </motion.p>
          <div className="flex gap-2">
            {pages.map((page, index) => {
              const isActive = location.pathname === page.path;
              return (
                <motion.div
                  key={page.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    to={page.path}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {page.number}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
