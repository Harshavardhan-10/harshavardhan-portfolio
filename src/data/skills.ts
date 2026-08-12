export type SkillCategory = {
  title: string;
  icon: "code" | "server" | "database" | "brain" | "cloud" | "languages";
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 94 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js / Express", level: 87 },
      { name: "Python / FastAPI", level: 82 },
      { name: "Java / Spring Boot", level: 84 },
      { name: "JWT Authentication", level: 86 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 68 },
    ],
  },
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      { name: "Python / NumPy / Pandas", level: 78 },
      { name: "OpenCV / MediaPipe", level: 76 },
      { name: "Scikit-learn", level: 74 },
      { name: "Machine Learning Models", level: 70 },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 74 },
      { name: "AWS EC2 / S3 / RDS", level: 78 },
      { name: "CI/CD Pipelines", level: 72 },
    ],
  },
  {
    title: "Programming Languages",
    icon: "languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 78 },
      { name: "C / C++", level: 72 },
      { name: "SQL", level: 80 },
    ],
  },
];
