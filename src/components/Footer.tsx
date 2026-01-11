const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Anjan Prajapati. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
