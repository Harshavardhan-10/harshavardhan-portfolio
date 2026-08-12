export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "System Engineer",
    company: "Tata Consultancy Services",
    period: "2023 - Present",
    location: "Bengaluru, India",
    description:
      "Designing and shipping end-to-end web products for startups and small businesses.",
    highlights: [
      "Built a smart expense-tracking SaaS with real-time dashboards serving 1k+ monthly users.",
      "Reduced page load times by 45% through code-splitting, caching and image optimization.",
      "Delivered authentication, payment and admin systems with role-based access control.",
    ],
    tech: ["Java", "Spring Boot", "Oracle DB", "React"],
    current: true,
  },
  // {
  //   role: "System Engineer",
  //   company: "Tata Consultancy Services",
  //   period: "2023 - Present",
  //   location: "Bengaluru, India",
  //   description:
  //     "Worked in a cross-functional team building internal tooling and customer-facing features.",
  //   highlights: [
  //     "Developed reusable React component libraries adopted by 3 product teams.",
  //     "Implemented RESTful microservices with automated test coverage above 85%.",
  //     "Wrote CI/CD pipelines that cut deployment time from 30 minutes to 6 minutes.",
  //   ],
  //   tech: ["React", "Express", "MongoDB", "Docker", "Jenkins"],
  // },
];
