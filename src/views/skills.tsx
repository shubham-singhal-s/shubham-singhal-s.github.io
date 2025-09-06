import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  CloudCog,
  Code2,
  Database,
  Layout,
  Server,
  Settings,
  TrendingUp,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React",
      "Redux",
      "React Native",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Material UI",
      "Tailwind CSS",
      "Single Spa",
      "Storybook",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Framework",
      "Hibernate",
      "FastAPI",
      "Node.js",
      "Java",
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "Maven",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: CloudCog,
    skills: [
      "Docker",
      "AWS S3",
      "AWS EC2",
      "AWS RDS",
      "AWS SageMaker",
      "AWS Cognito",
      "DynamoDB",
      "Git",
      "Bamboo",
      "Cloudflare",
      "DMS",
      "AMS",
      "Kubernetes",
      "DevContainers",
      "WAF",
      "Load Balancer",
    ],
  },
  {
    title: "Architecture & Tools",
    icon: Settings,
    skills: [
      "Microservices",
      "Micro Frontends",
      "Event-Driven Architecture",
      "API Gateway",
      "Kafka",
      "Stripe",
      "APIGEE",
      "Salesforce",
      "WordPress",
      "Drupal",
    ],
  },
  {
    title: "Testing & Quality",
    icon: Code2,
    skills: [
      "JUnit",
      "Selenium",
      "JMeter",
      "Zephyr",
      "Playwright",
      "TestContainers",
      "Unit Testing",
      "Integration Testing",
      "E2E Testing",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "Prompt Engineering",
      "OpenAI API",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-Learn",
      "R",
      "GANs",
      "LSTM",
      "AWS SageMaker",
      "LLM Integration",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "DynamoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
      "Data Migration",
    ],
  },
];

export const Skills = () => {
  const stats = [
    { label: "Technologies", value: "75+" },
    { label: "Specializations", value: "7" },
    { label: "Years Experience", value: "5+" },
    { label: "Cloud Platforms", value: "3" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center space-y-6 mb-12">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Technical Skills
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Comprehensive expertise across modern technologies, cloud platforms,
          and AI systems, with a focus on scalable architecture and developer
          experience.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="text-center border-0 shadow-md bg-gradient-to-br from-background to-background/50"
          >
            <CardContent className="pt-6 pb-4">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-background to-background/50"
          >
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs font-medium px-3 py-1 bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-12">
        <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
          Continuously evolving with emerging technologies and industry best
          practices. Always eager to explore new tools and methodologies that
          drive innovation.
        </p>
      </div>
    </div>
  );
};
