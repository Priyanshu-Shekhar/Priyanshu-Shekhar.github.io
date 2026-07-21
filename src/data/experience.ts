export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;

  technologies: string[];

  bullets: string[];
}

export const experience: Experience[] = [
  {
    company: "University of Southern California",
    role: "Research Assistant",
    location: "Los Angeles, California",
    duration: "Oct 2025 — May 2026",

    technologies: [
      "Python",
      "AI Agents",
      "Synthetic Data Generation",
      "Fuzz Testing",
      "Prompt Injection",
    ],

    bullets: [
        "Designed Python-based LLM evaluation frameworks to automate multi-step privacy and prompt injection security testing.",
        "Built graph-based synthetic user profile generation pipelines to systematically evaluate high-risk AI attack scenarios.",
        "Implemented scalable AI evaluation workflows by translating findings from 25+ adversarial ML research papers into production-ready testing logic.",
        "Collaborated with researchers to rapidly prototype and validate autonomous AI evaluation pipelines through iterative experimentation."
    ],
  },

  {
    company: "Funded by Google",
    role: "AI Engineer Intern",
    location: "Cal Poly Pomona",
    duration: "Feb 2024 — May 2024",

    technologies: [
      "Python",
      "React",
      "MySQL",
      "REST API",
      "AI Safety",
    ],

    bullets: [
        "Architected Python backend services, REST APIs, and MySQL pipelines to support real-time analysis of 50,000+ AI evaluation records.",
        "Developed a full-stack React application with modular backend APIs, improving maintainability and accelerating feature development.",
        "Built SQL and Pandas data analysis pipelines to evaluate LLM bias, improving reporting accuracy and reproducibility.",
        "Collaborated across the software development lifecycle to deliver scalable, production-ready AI evaluation tools."
    ],
  },

  {
    company: "Funded by United States Department of Agriculture",
    role: "Machine Learning Engineer",
    location: "Cal Poly Pomona",
    duration: "May 2023 — Feb 2024",

    technologies: [
      "TensorFlow",
      "AWS EC2",
      "Python",
      "Image Fusion ML algorithm",
      "Distributed Computing"
    ],

    bullets: [
        "Reimplemented the STARFM image fusion algorithm as USTARFM for agricultural forcasting, improving prediction accuracy by 15%.",
        "Designed distributed AWS EC2 pipelines to process 300+ satellite images for scalable model training and inference.",
        "Built feature engineering and preprocessing pipelines for large-scale geospatial datasets, increasing model performance by 25%.",
        "Optimized workload distribution between edge devices and cloud infrastructure, reducing processing latency by 35%."
    ],
  },

  {
    company: "Funded by Northrop Grumman",
    role: "Embedded Software Engineer",
    location: "Cal Poly Pomona",
    duration: "Aug 2023 — Jan 2024",

    technologies: [
      "C Programming Language",
      "Robot Operating System (ROS)",
      "RabbitMQ",
      "STM32 Microcontrollers",
    ],

    bullets: [
        "Developed embedded software in C and Linux for autonomous vehicle control and communication systems.",
        "Designed RabbitMQ messaging pipelines to enable reliable inter-process communication across distributed components.",
        "Built STM32 Microcontrollers automation scripts to streamline debugging, testing, and deployment workflows for embedded applications.",
        "Collaborated across the complete software development lifecycle, from implementation and testing to system integration."
    ],
  },
];