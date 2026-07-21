import {
  GitBranch as GitHub,
  Link as LinkedIn,
  Mail,
  FileText,
} from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: typeof GitHub;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Priyanshu-Shekhar",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/-priyanshu-shekhar/",
    icon: LinkedIn,
  },
  {
    name: "Email",
    href: "mailto:101.priyanshushekhar@gmail.com",
    icon: Mail,
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];