import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, Building, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Macquarie Group Limited",
      location: "Sydney, Australia",
      period: "February 2024 - Present",
      type: "Full-time",
      description:
        "Delivering enterprise-scale solutions in a large-scale transformation programs with focus on clean architecture, performance optimization, and developer experience excellence.",
      highlights: [
        "Delivered key components in a large-scale transformation program, architecting scalable systems for long-term resilience",
        "Led generative AI initiative creating full applications from JIRA Stories and Zoom transcripts, proving AI adoption feasibility",
        "Designed elegant solutions, converting complex business requirements into actionable technical specifications in close collaboration with business stakeholders.",
        "Designed enterprise systems balancing performance, reliability, and security; modernized load balancer design with WAF integration",
        "Built an accessible, modular UI library in React with Storybook, enabling consistent patterns and accelerating frontend delivery",
        "Developed scalable backend APIs with Spring Boot, Hibernate, and FastAPI, streamlining workflows to shorten release cycles",
        "Advanced test automation (unit, integration, regression) to improve reliability and reduce escaped defects",
        "Improved DevOps delivery with Docker, Bamboo, and AWS, enhancing deployment automation, build times and CI/CD maturity",
      ],
      technologies: [
        "React",
        "Angular",
        "TypeScript",
        "Single Spa",
        "Spring Boot",
        "Hibernate",
        "PostgreSQL",
        "SQL Server",
        "Java",
        "FastAPI",
        "Python",
        "Docker",
        "Bamboo",
        "AWS",
        "Playwright",
        "TestContainers",
        "Kafka",
        "DevContainers",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Digital Purpose",
      location: "Sydney, Australia",
      period: "March 2022 - January 2024",
      type: "Full-time",
      description:
        "Delivered AI-driven client solutions while establishing development excellence standards, optimizing workflows, and enhancing system performance.",
      highlights: [
        "Delivered AI-driven client solutions using OpenAI, SageMaker, LLMs, and custom AI models for next-gen product capabilities",
        "Produced solution designs aligned with business goals, translating requirements into actionable technical specifications",
        "Built accessible and responsive frontends in Angular, React, and React Native for cross-platform delivery",
        "Implemented scalable backend APIs with Spring Boot and Hibernate, ensuring maintainability and performance",
        "Engineered integrations across Salesforce, Cognito, AWS, and AMS, streamlining data flows and system interoperability",
        "Applied DevOps practices optimizing performance: managed CI/CD pipelines, load tested servers, leveraged AWS services",
        "Strengthened application quality through comprehensive testing frameworks (JUnit, Selenium, JMeter, Zephyr)",
      ],
      technologies: [
        "React",
        "Angular",
        "React Native",
        "Node.js",
        "TypeScript",
        "Spring Boot",
        "Hibernate",
        "OpenAI",
        "AWS SageMaker",
        "Salesforce",
        "AWS",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Amadeus",
      location: "Bangalore, India",
      period: "July 2019 - July 2021",
      type: "Full-time",
      description:
        "Architected enterprise billing systems and customer portals while maintaining code quality standards and ensuring reliable production deployments.",
      highlights: [
        "Architected and designed new billing platform, leading system blueprint for API payments overhaul modernizing financial flows",
        "Built enterprise customer portal with Angular and Drupal, engineered to handle thousands of concurrent users",
        "Contributed to microservice-based backend API development using Spring and Hibernate, supporting modular scalability",
        "Implemented API quota management in APIGEE, enabling usage control, accurate billing, and service governance",
        "Conducted code security audits and remediation, strengthening application protection against vulnerabilities",
        "Headed three quarterly production releases, ensuring on-time delivery, quality assurance, and smooth DevOps deployment",
        "Maintained system stability by resolving production/testing bugs and applying automated testing with Selenium",
      ],
      technologies: [
        "Spring Framework",
        "Maven",
        "Java",
        "Hibernate",
        "Angular",
        "Typescript",
        "Drupal",
        "APIGEE",
        "Selenium",
        "Git",
      ],
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <Building className="h-8 w-8" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering enterprise-scale solutions with expertise in AI
          integration, system architecture, and performance optimization across
          banking, digital transformation, and travel technology sectors.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg bg-gradient-to-br from-background to-background/50"
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col w-full gap-4">
                <div className="space-y-2">
                  <div className="flex items-center flex-col justify-between sm:flex-row gap-2">
                    <span className="flex flex-row items-center gap-2">
                      <BriefcaseBusiness className="size-5 text-primary" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-primary">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Highlights */}
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Key Achievements
                </h5>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="text-primary mt-1.5 block size-1.5 rounded-full bg-current flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="mt-8 border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-muted-foreground">
                Technologies Mastered
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
