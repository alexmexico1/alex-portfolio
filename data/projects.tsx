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

    FaGithubUrl: "https://FaGithub.com/alexmexico1",

    liveUrl: "#",
  },
];