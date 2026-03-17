import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const pages = [
  { number: 1, path: "/" },
  { number: 2, path: "/about" },
  { number: 3, path: "/projects" },
  { number: 4, path: "/social" },
  { number: 5, path: "/thoughts" },
  { number: 6, path: "/contact" },
];

const PagePagination = () => {
  const location = useLocation();

  return (
    <div className="bg-background py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3">
          {pages.map((page) => {
            const isActive = location.pathname === page.path;
            return (
              <motion.div
                key={page.number}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={page.path}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
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
  );
};

export default PagePagination;
