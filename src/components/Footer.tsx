import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              Open to new opportunities and interesting projects. 
              Let's build something amazing together!
            </p>
            <Button className="tech-gradient text-white border-0">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Android Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;