import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-tech-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm tech-gradient text-white border-0">
            <span className="animate-pulse mr-2">●</span>
            Available for new opportunities
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
            Android Developer
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            Crafting innovative mobile experiences with{" "}
            <span className="text-primary">Kotlin</span> &{" "}
            <span className="text-tech-blue">Jetpack</span>
          </h2>
          
          {/* Experience Badge */}
          <div className="mb-8">
            <Badge className="px-6 py-2 text-lg font-semibold bg-gradient-to-r from-primary to-tech-blue text-white border-0">
              6+ Years Experience
            </Badge>
          </div>
          
          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Leverage extensive experience in Android development with expertise in Kotlin, Room, MVVM, and 
            Jetpack components to create innovative, scalable, and user-focused mobile applications. 
            Dedicated to maintaining best practices and delivering high-quality software solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg tech-gradient hover:scale-105 transition-transform">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg hover:scale-105 transition-transform">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <Button size="icon" variant="ghost" className="h-12 w-12 hover:scale-110 transition-transform">
              <Github className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="ghost" className="h-12 w-12 hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;