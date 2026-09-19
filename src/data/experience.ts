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
      "Developing and maintaining enterprise insurance applications for HDFC Life, with a focus on payment processing, policy validation, API integration, and production support.",
    highlights: [
      "Developed and maintained policy premium payment workflows involving policy validation, payment verification, reconciliation, and receipt generation.",
      "Delivered 12+ business requirements, including WhatsApp payments, new payment mode integrations, Loan Against Payment, JWT authentication, rate limiting, and policy validations.",
      "Automated 3 daily transaction reports and failed-posting retry batches, saving 2–3 hours daily while optimizing SQL queries and payment processing performance.",
    ],
    tech: ["Java", "Spring Boot", "Oracle DB", "AWS", "RESTFul APIs", "IBM Integration Designer"],
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
