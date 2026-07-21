import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Server,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";

const highlights = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building practical AI systems using LLMs, deep learning, computer vision, retrieval-augmented generation, and multimodal architectures.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing scalable backend services, REST APIs, cloud-native applications, distributed systems with production-ready practices.",
  },
  {
    icon: Database,
    title: "Cloud & Data",
    description:
      "Experience building with cloud infrastructure, managing databases, and working with AWS and Google Cloud Platform.",
  },
  {
    icon: Cpu,
    title: "Systems Engineering",
    description:
      "Strong foundation in operating systems, embedded software, networking, Linux development, and software architecture.",
  },
];

const technologies = [
  "Python",
  "Java",
  "TypeScript",
  "React",
  "Node.js",
  "Flask",
  "TensorFlow",
  "PyTorch",
  "AWS",
  "Google Cloud",
  "Docker",
  "MongoDB",
  "MySQL",
  "Git",
  "Linux",
  "REST APIs",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Building intelligent software that bridges research and real-world engineering."
        />

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Left Column */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="space-y-8 text-lg leading-9 text-[#d5c4a1]">

              <p>
                I'm <span className="font-semibold text-[#fabd2f]">
                  Priyanshu Shekhar
                </span>, a Software Engineer recently graduated with my Master's in
                Computer Science with a specialization in Artificial Intelligence
                from the <span className="font-semibold text-[#fb4934]"> University of Southern California</span>.
              </p>

              <p>
                A little about me: I've been curious for as long as I can remember. As a kid, I was always 
                asking why by pulling things apart, chasing ideas, or getting excited about 
                figuring out how things worked. That same curiosity eventually led me to 
                software engineering, where every challenge feels like a puzzle waiting to 
                be solved. Today, I'm passionate about building intelligent software at the 
                intersection of artificial intelligence, backend engineering, distributed 
                systems, and cloud computing. I love turning ambitious ideas into real, scalable 
                solutions, and I spend my free time sharpening my problem-solving skills through 
                LeetCode.
              </p>

              <p>
                Outside of tech, I'm just as curious about the world. I love 
                <span className="font-semibold text-[#fb4934]"> reading </span>
                fiction alongside books on Physics, Philosophy, psychology, Economics, and Biographies that 
                challenge the way I think. I'm learning to 
                <span className="font-semibold text-[#d3869b]"> draw and sketch </span>, enjoy 
                <span className="font-semibold text-[#8ec07c]"> photography </span>, playing 
                <span className="font-semibold text-[#fe8019]">video games </span>, 
                <span className="font-semibold text-[#b8bb26]"> workout and hike </span>, 
                listening to <span className="font-semibold text-[#83a598]">music </span> 
                from every corner of the world-even when I don't understand the language-and 
                spending time with friends and family. And somewhere in between all of that, 
                I'm still chasing one childhood dream: trying to become Batman🦇.
              </p>

            </div>

            <div className="mt-12 flex flex-wrap gap-3">

              {technologies.map((tech) => (
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}

            </div>

          </motion.div>

          {/* Right Column */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid gap-6"
          >

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-[#504945] bg-[#3c3836] p-7 transition-all duration-300 hover:border-[#fabd2f]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#282828]">

                    <Icon
                      size={28}
                      className="text-[#fabd2f]"
                    />

                  </div>

                  <h3 className="mb-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="leading-8 text-[#a89984]">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

            

          </motion.div>

        </div>

      </Container>
    </section>
  );
}
