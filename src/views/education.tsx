import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Book,
  Calendar,
  GraduationCap,
  MapPin,
  Star,
} from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Artificial Intelligence",
    university: "The University of Edinburgh",
    location: "Edinburgh, UK",
    period: "2021 - 2023",
    grade: "Dean's Award for High Distinction",
    gpa: "6.875/7 (98.2%)",
    project: "Large-scale GANs for Image Generation",
    highlights: [
      "Received Dean's Award for achieving High Distinction across all modules",
      "Advanced Machine Learning and Deep Learning specialization",
      "Natural Language Processing and Computer Vision expertise",
      "Robotics and Autonomous Systems research experience",
      "Final Project: Developed large-scale GANs for high-quality image generation with novel architecture improvements",
    ],
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics",
      "Neural Networks",
      "Robotics",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Manipal Institute of Technology",
    location: "Manipal, India",
    period: "2017 - 2021",
    grade: "First Class with Distinction",
    gpa: "8.2/10 (82%)",
    project: "LSTM AI Models for Chat Response Research",
    highlights: [
      "Design Lead for multiple student clubs and initiatives including TEDx",
      "Strong foundation in Computer Science fundamentals and algorithms",
      "Comprehensive software engineering and system design training",
      "Leadership experience managing cross-functional student teams",
      "Final Year Project: Research on LSTM AI models for intelligent chat response systems with improved context understanding",
    ],
    courses: [
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Web Technologies",
      "Intelligent System",
    ],
  },
];

// const certifications = [
//   "AWS Certified Solutions Architect",
//   "Google Cloud Professional Developer",
//   "Oracle Certified Java Programmer",
//   "Microsoft Azure Fundamentals",
// ];

export const Education = () => {
  return (
    <div className="min-h-screen p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <GraduationCap className="h-8 w-8" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Education
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Academic foundation and continuous learning journey in Computer
          Science and Artificial Intelligence
        </p>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Book className="h-6 w-6" />
          Academic Qualifications
        </h2>

        {educationData.map((education, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-gray-900">
                    {education.degree}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span className="font-medium">
                        {education.university}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-2 text-green-600">
                  <Star className="h-4 w-4 mb-1" />
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200 mb-1 block"
                    >
                      {education.grade}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {education.gpa}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Final Project */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-purple-600" />
                  Final Project
                </h4>
                <p className="text-gray-700 bg-purple-50 p-3 rounded-lg border border-purple-100">
                  {education.project}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-1">
                  {education.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      {/* <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-600" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <Award className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Footer Note */}
      <div className="text-center pt-8">
        <p className="text-gray-500 text-sm">
          Committed to continuous learning and staying updated with the latest
          technologies
        </p>
      </div>
    </div>
  );
};
