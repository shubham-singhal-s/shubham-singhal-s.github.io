import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Commits", value: "2K+" },
    { label: "Deployments", value: "500+" },
    { label: "Solutions Designed", value: "4" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@shubhamsinghal.me | shubham21197@gmail.com",
      href: "mailto:contact@shubhamsinghal.me",
    },
    { icon: MapPin, label: "Location", value: "Sydney, Australia" },
    {
      icon: Github,
      label: "GitHub",
      value: "shubham-singhal-s",
      href: "https://github.com/shubham-singhal-s",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shubham21197",
      href: "https://linkedin.com/in/shubham21197",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-background/50">
        <CardContent className="p-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center">
            <Avatar className="size-32 mx-auto mb-6 ring-4 ring-background shadow-lg">
              <AvatarImage
                src="/me.webp"
                alt="Shubham Singhal"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                SS
              </AvatarFallback>
            </Avatar>

            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Shubham Singhal
            </h1>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary" className="text-sm font-medium">
                Full Stack Engineer
              </Badge>
              <Badge variant="secondary" className="text-sm font-medium">
                AI Specialist
              </Badge>
            </div>

            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Passionate full-stack engineer with expertise in modern web
              technologies and artificial intelligence. I love building
              innovative solutions that make a difference.
            </p>
          </div>

          {/* Stats Section */}
          <div className="px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="mb-6" />

            {/* About Text */}
            <div className="space-y-4 text-sm text-center leading-relaxed text-foreground/90 mb-6">
              <p>
                Full Stack Engineer with 5+ years’ experience delivering
                scalable applications and leading AI-driven projects. Expert in
                full-stack development, prompt engineering, and solution design,
                with a Master’s in Artificial Intelligence.
              </p>
              <p>
                Skilled in building responsive UIs, secure APIs, and modern
                CI/CD pipelines. Known for driving business impact and
                leveraging advanced AI and cloud technologies to solve complex
                challenges.
              </p>
            </div>

            <Separator className="mb-6" />

            {/* Contact Information */}
            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                Contact Information
              </h3>
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <contact.icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors hover:underline"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-sm">{contact.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1"
                onClick={() =>
                  window.open("/Shubham Singhal Resume.pdf", "_blank")
                }
              >
                <Download className="size-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="flex-1">
                <Mail className="size-4 mr-2" />
                <a href="mailto:shubham21197@gmail.com">Get In Touch</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
