import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Globe,
  Layers,
  Monitor,
  Package,
  Palette,
  Server,
  Settings,
  Shield,
  Smartphone,
  Terminal,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    skills: [
      { name: "React", level: 5, icon: Code },
      { name: "Angular", level: 4, icon: Globe },
      { name: "TypeScript", level: 5, icon: Code },
      { name: "JavaScript", level: 5, icon: Code },
      { name: "HTML5/CSS3", level: 5, icon: Palette },
      { name: "Tailwind CSS", level: 4, icon: Palette },
      { name: "Next.js", level: 4, icon: Globe },
      { name: "Vue.js", level: 3, icon: Globe },
      { name: "Redux", level: 4, icon: Layers },
      { name: "Responsive Design", level: 5, icon: Smartphone },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-green-600",
    bgColor: "bg-green-50",
    skills: [
      { name: "Spring Boot", level: 5, icon: Server },
      { name: "FastAPI", level: 4, icon: Zap },
      { name: "Java", level: 5, icon: Code },
      { name: "Python", level: 4, icon: Code },
      { name: "Node.js", level: 4, icon: Server },
      { name: "Express.js", level: 4, icon: Server },
      { name: "REST APIs", level: 5, icon: Globe },
      { name: "GraphQL", level: 4, icon: Globe },
      { name: "Microservices", level: 4, icon: Layers },
      { name: "WebSocket", level: 4, icon: Activity },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    skills: [
      { name: "PostgreSQL", level: 5, icon: Database },
      { name: "MongoDB", level: 4, icon: Database },
      { name: "Redis", level: 4, icon: Database },
      { name: "Oracle DB", level: 3, icon: Database },
      { name: "MySQL", level: 4, icon: Database },
      { name: "Elasticsearch", level: 3, icon: Database },
      { name: "SQL Optimization", level: 4, icon: Activity },
      { name: "Data Modeling", level: 4, icon: Layers },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    skills: [
      { name: "Docker", level: 4, icon: Package },
      { name: "AWS", level: 4, icon: Cloud },
      { name: "Azure", level: 3, icon: Cloud },
      { name: "Git", level: 5, icon: GitBranch },
      { name: "CI/CD", level: 4, icon: Activity },
      { name: "Jenkins", level: 3, icon: Settings },
      { name: "Kubernetes", level: 3, icon: Package },
      { name: "Terraform", level: 3, icon: Settings },
      { name: "GitHub Actions", level: 4, icon: GitBranch },
      { name: "Linux/Unix", level: 4, icon: Terminal },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    skills: [
      { name: "Large Language Models", level: 4, icon: Brain },
      { name: "TensorFlow", level: 3, icon: Brain },
      { name: "PyTorch", level: 3, icon: Brain },
      { name: "OpenAI API", level: 4, icon: Brain },
      { name: "Prompt Engineering", level: 4, icon: FileText },
      { name: "Neural Networks", level: 3, icon: Cpu },
      { name: "Computer Vision", level: 3, icon: Monitor },
      { name: "NLP", level: 4, icon: FileText },
      { name: "GANs", level: 3, icon: Brain },
      { name: "LSTM", level: 3, icon: Brain },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Settings,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    skills: [
      { name: "Jest", level: 4, icon: Shield },
      { name: "Cypress", level: 3, icon: Shield },
      { name: "JUnit", level: 4, icon: Shield },
      { name: "Maven", level: 4, icon: Package },
      { name: "Vite", level: 4, icon: Zap },
      { name: "Webpack", level: 3, icon: Package },
      { name: "ESLint", level: 4, icon: Shield },
      { name: "Prettier", level: 4, icon: Palette },
      { name: "Postman", level: 4, icon: Globe },
      { name: "VS Code", level: 5, icon: Code },
    ],
  },
];

const getSkillLevelColor = (level: number) => {
  if (level >= 5) return "text-green-600 bg-green-100";
  if (level >= 4) return "text-blue-600 bg-blue-100";
  if (level >= 3) return "text-yellow-600 bg-yellow-100";
  return "text-gray-600 bg-gray-100";
};

const getSkillLevelText = (level: number) => {
  if (level >= 5) return "Expert";
  if (level >= 4) return "Advanced";
  if (level >= 3) return "Intermediate";
  return "Beginner";
};

export const Skills = () => {
  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Zap className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive technical expertise across modern web technologies,
          cloud platforms, and AI systems
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 mb-2">6</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Expert Level</div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <span className="text-xl text-gray-900">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-4 w-4 text-gray-500" />
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-xs font-medium ${getSkillLevelColor(
                        skill.level
                      )}`}
                    >
                      {getSkillLevelText(skill.level)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center pt-8">
        <p className="text-gray-500 text-sm">
          Continuously learning and adapting to emerging technologies and
          industry best practices
        </p>
      </div>
    </div>
  );
};
