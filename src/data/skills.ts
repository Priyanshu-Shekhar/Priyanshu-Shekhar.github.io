export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C Programming Language",
      "SQL",
      "Kotlin",
    ],
  },

  {
    category: "Frontend",
    skills: [
      "React",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Jetpack Compose",
    ],
  },

  {
    category: "Backend",
    skills: [
      "Node.js",
      "Flask",
      "REST APIs",
      "Express.js",
      "JSON",
    ],
  },

  {
    category: "Artificial Intelligence",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Hugging Face",
      "RAG",
      "MatPlotLib",
      "LLMs",
      "AI Agents",
      "Prompt Engineering",
    ],
  },

  {
    category: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "Google Cloud Platform",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },

  {
    category: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "SQLite",
      "Hadoop",
    ],
  },

  {
    category: "Tools",
    skills: [
      "Arch Linux",
      "RabbitMQ",
      "Power BI",
      "Jupyter Notebook",
      "VS Code",
      "Cursor",
      "Claude Code",
      "Github Copilot",
      "OpenClaw",
      "Lovable",
    ],
  },
];