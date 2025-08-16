import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Settings, 
  Layers, 
  Palette 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Kotlin", "Java"],
    color: "tech-purple"
  },
  {
    title: "Android Development",
    icon: Smartphone,
    skills: ["Android SDK", "Jetpack Components", "MVVM Architecture"],
    color: "tech-blue"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Room", "SQLite"],
    color: "primary"
  },
  {
    title: "Tools & Practices",
    icon: Settings,
    skills: ["Agile Methodologies", "Unit Testing (JUnit, Espresso)", "Git"],
    color: "tech-purple"
  },
  {
    title: "Cross-Platform Frameworks",
    icon: Layers,
    skills: ["Kotlin Multiplatform", "React Native", "Flutter"],
    color: "tech-blue"
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Material Design Principles", "User Interface Design"],
    color: "primary"
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the Android development ecosystem and modern mobile technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="card-glow group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/50 w-fit group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:scale-105 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Additional Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              "RxJava", "Kotlin Coroutines", "Retrofit", "Dagger/Hilt", 
              "LiveData", "Data Binding", "Navigation Component", 
              "WorkManager", "Play Store Console", "Firebase", 
              "CI/CD", "DevOps Collaboration"
            ].map((tech, index) => (
              <Badge 
                key={index}
                className="px-4 py-2 tech-gradient text-white border-0 hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;