export type SkillCategory = {
  title: string;
  icon: "code" | "server" | "database" | "brain" | "cloud" | "languages";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: ["React / Next.js", "JavaScript", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js / Express",
      "Python / FastAPI",
      "Java / Spring Boot",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      "Python / NumPy / Pandas",
      "OpenCV / MediaPipe",
      "Scikit-learn",
      "Machine Learning Models",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    skills: ["Git & GitHub", "Docker", "AWS EC2 / S3 / RDS", "CI/CD Pipelines"],
  },
  {
    title: "Programming Languages",
    icon: "languages",
    skills: ["Python", "Java", "C / C++", "SQL"],
  },
];
