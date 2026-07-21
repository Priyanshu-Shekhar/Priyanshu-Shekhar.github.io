// export interface Project {
//   title: string;

//   subtitle: string;

//   image: string;

//   github: string;

//   demo?: string;

//   technologies: string[];

//   description: string;

//   highlights: string[];
// }


// export const projects: Project[] = [  

//   {
//     title: "ASL Tutor",

//     subtitle:
//       "Interactive American Sign Language learning platform",

//     image: "/projects/ASLtutor.png",

//     github:
//       "https://github.com/Priyanshu-Shekhar/ASLTutor",

//     technologies: [
//       "Python",
//       "Computer Vision",
//       "Whisper ASR",
//       "",
//     ],

//     description:
//       "AI-powered platform that teaches American Sign Language using real-time gesture recognition and interactive feedback.",

//     highlights: [
//       "Real-time gesture recognition",
//       "Deep Learning",
//       "Computer Vision",
//       "Interactive learning",
//     ],
//   },
//   {
//     title: "Event Finder",

//     subtitle:
//       "Cross-platform event discovery application",

//     image: "/projects/eventfinder.png",

//     github:
//       "https://github.com/Priyanshu-Shekhar",

//     technologies: [
//       "Kotlin",
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Google App Engine",
//     ],

//     description:
//       "Mobile and web application integrating Ticketmaster, Spotify and Google Maps APIs.",

//     highlights: [
//       "Android + Web",
//       "Real-time search",
//       "REST APIs",
//       "Cloud deployment",
//     ],
//   },
//   {
//     title: "SpamNet",

//     subtitle:
//       "AI-powered spam detection platform",

//     image: "/projects/spamnet.png",

//     github:
//       "https://github.com/Priyanshu-Shekhar/SpamNet",

//     technologies: [
//       "Python",
//       "Flask",
//       "PyTorch",
//       "TypeScript",
//       "YouTube API",
//     ],

//     description:
//       "Production-ready spam detection platform capable of real-time content moderation using deep learning.",

//     highlights: [
//       "99% classification accuracy",
//       "REST API backend",
//       "Real-time inference",
//       "Continuous model evaluation",
//     ],
//   },

 

// //   {
// //     title: "SentryFuzz",

// //     subtitle:
// //       "Multi-agent AI security research",

// //     image: "/projects/sentryfuzz.png",

// //     github:
// //       "https://github.com/Priyanshu-Shekhar",

// //     technologies: [
// //       "AI Agents",
// //       "Cloud",
// //       "Python",
// //       "Fuzz Testing",
// //     ],

// //     description:
// //       "Research platform investigating autonomous AI agents for software security testing.",

// //     highlights: [
// //       "Multi-agent architecture",
// //       "Prompt injection testing",
// //       "Cloud infrastructure",
// //       "Ongoing USC research",
// //     ],
// //   },
// ];
export interface Project {
  title: string;
  subtitle: string;
  image: string;
  github: string;
  demo?: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "ASLTutor",

    subtitle:
      "Multimodal AI-powered American Sign Language Learning Platform",

    image: "/projects/ASLtutor.png",

    github:
      "https://github.com/Priyanshu-Shekhar/ASLTutor",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PyTorch",
      "TensorFlow",
      "MediaPipe",
      "Whisper ASR",
      "Transformer",
      "Graph Neural Networks",
      "Computer Vision",
      "REST APIs",
    ],

    description:
      "ASLTutor is a full-stack multimodal AI learning platform that enables users to learn and practice American Sign Language through speech, text, and video. The system combines speech recognition, neural machine translation, computer vision, and graph neural networks to provide real-time gesture recognition, personalized feedback, and interactive learning experiences through a production-ready web application.",

    highlights: [
      "Designed a multimodal AI pipeline combining Whisper ASR, Transformer models, MediaPipe, and Siamese Graph Neural Networks for speech, text, and video understanding.",
      "Developed a FastAPI backend and React frontend delivering real-time inference, webcam-based sign recognition, and interactive feedback workflows.",
      "Implemented custom gesture similarity scoring with confidence metrics to detect missing, incorrect, and extra signs for personalized learning.",
      "Built scalable REST APIs and modular ML inference pipelines supporting production-ready deployment and low-latency user interactions.",
    ],
  },

  {
    title: "Event Finder",

    subtitle:
      "Cross-Platform Event Discovery Platform (Android + Web)",

    image: "/projects/eventfinder.png",

    github:
      "https://github.com/Priyanshu-Shekhar/Event-Finder",

    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "React",
      "Node.js",
      "Google App Engine",
      "REST APIs",
      "Retrofit",
      "Ticketmaster API",
      "Spotify API",
      "Google Maps API",
      "Material Design 3",
    ],

    description:
      "Event Finder is a cross-platform event discovery application consisting of a native Android application and a responsive web based backend. Users can search for nearby events, explore artists and venues, save favorites, and discover live entertainment through seamless integrations with multiple third-party APIs and a cloud-hosted backend.",

    highlights: [
      "Built native Android and web application using Kotlin, Jetpack Compose, React, and Node.js with a shared cloud-hosted backend on GCP.",
      "Integrated Ticketmaster, Spotify, Google Maps, Geocoding, and IPInfo APIs to deliver real-time event, venue, and artist information.",
      "Developed scalable REST APIs deployed on Google App Engine supporting asynchronous networking and responsive user experiences.",
      "Implemented location-aware search, category filtering, persistent favorites, and Material Design 3 UI for a modern cross-platform experience.",
    ],
  },

  {
    title: "SpamNet",

    subtitle:
      "End-to-End Deep Learning Platform for Automated Spam Detection",

    image: "/projects/spamnet.png",

    github:
      "https://github.com/Priyanshu-Shekhar/SpamNet",

    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "PyTorch",
      "DistilBERT",
      "BiLSTM",
      "CNN",
      "TypeScript",
      "Tailwind CSS",
      "YouTube Data API",
      "REST APIs",
    ],

    description:
      "SpamNet is an end-to-end AI-powered moderation platform that detects bot-generated YouTube comments using deep learning. The application combines multiple neural network architectures with real-time YouTube integration to analyze, classify, and compare automated spam detection models through an interactive full-stack interface.",

    highlights: [
      "Developed and evaluated CNN, RNN, and DistilBERT models achieving up to 89% classification accuracy for automated spam detection.",
      "Built a Flask REST API backend integrating real-time YouTube comment retrieval through the YouTube Data API.",
      "Designed a TypeScript frontend supporting live inference, side-by-side model comparison, confidence scoring, and interactive analytics.",
      "Implemented modular inference pipelines and scalable backend architecture for production-ready deployment and future platform expansion.",
    ],
  },

  {
    title: "Text-to-SQL",

    subtitle:
      "LLM-Powered Natural Language Database Query System",

    image: "/projects/texttosql.png",

    github:
      "https://github.com/Priyanshu-Shekhar/Text-to-SQL",

    technologies: [
      "Python",
      "DeepSeek-Coder",
      "LoRA",
      "RAG",
      "Hugging Face",
      "Sentence Transformers",
      "SQLite",
      "Prompt Engineering",
      "Machine Learning",
      "NLP",
    ],

    description:
      "Text-to-SQL is a domain-specific LLM system that enables users to query structured NBA databases using natural language instead of SQL. By combining Retrieval-Augmented Generation, parameter-efficient fine-tuning, and schema-aware prompting, the system generates, validates, and executes SQL queries while making relational databases accessible to non-technical users.",

    highlights: [
      "Fine-tuned the DeepSeek-Coder language model using LoRA and PEFT to generate executable SQL from natural language queries.",
      "Implemented Retrieval-Augmented Generation with dense vector retrieval to inject schema context and improve SQL generation accuracy.",
      "Built automated SQL validation and execution workflows against SQLite databases, returning accurate query results in real time.",
      "Created a custom dataset of 1,000+ natural language and SQL query pairs to improve domain-specific model performance and reliability.",
    ],
  },
];