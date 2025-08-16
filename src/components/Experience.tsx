import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Specialist software engineer",
    company: "LTIMindtree",
    location: "Bengaluru",
    period: "04/2025 - Present",
    highlights: [
      "Working on innovative Kotlin Multiplatform projects to enable seamless cross-platform development.",
      "Implementing shared business logic across Android and iOS platforms using KMP architecture.",
      "Collaborating with cross-functional teams to deliver unified mobile solutions.",
      "Leveraging Kotlin Multiplatform Mobile (KMM) for efficient code sharing and maintenance.",
      "Contributing to the evolution of multiplatform development practices within the organization."
    ],
    current: true
  },
  {
    title: "Senior Android Developer",
    company: "Rapl Technologies Private Limited",
    location: "Bengaluru",
    period: "10/2023 - 04/2025",
    highlights: [
      "Developed a Unified Learning Path feature to enhance user understanding and engagement.",
      "Integrated graphics and animations for a dynamic and interactive user experience.",
      "Collaborated with UI/UX designers to align on design requirements, achieving cohesive implementations.",
      "Worked closely with cross-platform teams (iOS, web) to ensure platform consistency.",
      "Wrote unit test cases using JUnit and Espresso to ensure high code reliability.",
      "Managed Play Store releases, ensuring seamless updates and timely deployment."
    ],
    current: false
  },
  {
    title: "Senior Android Developer",
    company: "Integra Micro Systems",
    location: "Bengaluru",
    period: "09/2020 - 10/2023",
    highlights: [
      "Completed full development lifecycle for Android applications, adhering to MVVM architecture.",
      "Implemented Room database for offline data storage and synchronization.",
      "Enhanced app performance with RxJava and Kotlin, ensuring efficient functionality.",
      "Collaborated with DevOps and senior engineers to align on designs and deadlines.",
      "Delivered a financial mobile application supporting peer-to-peer lending and borrowing."
    ],
    current: false
  },
  {
    title: "Android Developer",
    company: "Theorax Dynamics Private Limited",
    location: "Bengaluru",
    period: "03/2019 - 07/2020",
    highlights: [
      "Spearheaded the development of cross-platform mobile applications using React Native.",
      "Reviewed and analyzed software solutions to align with project requirements.",
      "Explored emerging technologies to integrate into production applications.",
      "Promoted a culture of quality and collaboration within the engineering team."
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through innovative Android development across leading tech companies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-tech-blue hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full hidden md:block shadow-lg">
                  <div className="absolute inset-1 bg-background rounded-full"></div>
                </div>
                
                <Card className={`card-glow ${exp.current ? 'border-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-lg text-primary font-semibold mt-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      {exp.current && (
                        <Badge className="tech-gradient text-white border-0 px-3 py-1">
                          Current Position
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;