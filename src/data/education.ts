export interface Education {
  school: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    school: "University of Southern California",
    degree:
      "Master of Science in Computer Science (Artificial Intelligence)",
    duration: "2024 — 2026",
    location: "Los Angeles, CA",
    highlights: [
      "Specialization in Artificial Intelligence",
      "Graduated at 22-years-old"
    ],
  },

  {
    school: "California State Polytechnic University, Pomona",
    degree:
      "Bachelor of Science in Computer Science | Minor in Data Science",
    duration: "2021 — 2024",
    location: "Pomona, CA",
    gpa: "3.90 GPA",
    highlights: [
      "Graduated Summa Cum Laude",
      "Minor in Data Science",
      "Dean's List for 6 consecutive semesters",
      "President's List for 3 consecutive years"
    ],
  },
];