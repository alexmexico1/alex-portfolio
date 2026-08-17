export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  image: string;

  technologies: string[];
  features: string[];

  role: string;
  duration: string;
  status: string;
  team: string;

  FaGithubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "job-search-saas",

    title: "Job Search SaaS Platform",

    description:
      "A full-stack SaaS platform for discovering jobs, posting opportunities and managing job applications.",

    overview:
      "A full-stack job search SaaS application built to provide a complete job discovery and application workflow. Users can search and discover jobs, employers can post opportunities, and applicants can submit and manage applications through a responsive interface.",

    image: "/images/projects/saas.jpg",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
      "Tailwind CSS",
    ],

    features: [
      "User Authentication",
      "Job Search",
      "Job Posting",
      "Job Applications",
      "Application Management",
      "REST API",
      "MySQL Database",
      "Responsive Design",
    ],

    role: "Full Stack Developer",

    duration: "8 Weeks",

    status: "Completed",

    team: "Solo Project",

    FaGithubUrl: "https://github.com/alexmexico1",

    liveUrl: "https://fullstack-job-saas.vercel.app/",
  },

  {
    slug: "ecommerce-platform",

    title: "E-Commerce Platform",

    description:
      "A modern full-stack e-commerce platform with authentication, payments and an admin dashboard.",

    overview:
      "This project demonstrates my ability to build scalable web applications using modern technologies. The platform includes secure authentication, responsive layouts, Stripe payment integration and an intuitive shopping experience.",

    image: "/images/projects/ecommerce.jpg",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],

    features: [
      "Secure Authentication",
      "Shopping Cart",
      "Stripe Payments",
      "Admin Dashboard",
      "Responsive Design",
    ],

    role: "Full Stack Developer",

    duration: "8 Weeks",

    status: "Completed",

    team: "Solo Project",

    FaGithubUrl: "https://github.com/alexmexico1",

    liveUrl: "#",
  },
];
