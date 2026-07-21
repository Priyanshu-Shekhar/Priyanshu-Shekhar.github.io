import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  GitBranch as GitHub,
  Link as LinkedIn,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { SiLeetcode } from "react-icons/si";
const technologies = [
  "Artificial Intelligence",
  "Full Stack Development",
  "Data Science",
  "Cloud Engineering",
];

const stats = [
  {
    value: "4",
    label: "Years Coding",
  },
  {
    value: "3+",
    label: "Projects",
  },
  {
    value: "3.90",
    label: "GPA",
  },
  {
    value: "1.5+",
    label: "Experience",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-[#282828]" />

      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#ebdbb2 1px, transparent 1px),
            linear-gradient(90deg, #ebdbb2 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Availability */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#504945] bg-[#3c3836] px-5 py-2"
            >
              <Sparkles
                size={16}
                className="text-[#b8bb26]"
              />

              <span className="text-sm">
                Open to Full-Time Software Engineering Opportunities
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-5xl font-black leading-tight md:text-7xl"
            >
              Hi, I'm{" "}

              <span className="text-[#fabd2f]">
                Priyanshu
              </span>

              <br />

              <span className="text-[#ebdbb2]">
                Shekhar
              </span>

            </motion.h1>

            {/* Subtitle */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-8 text-2xl font-semibold text-[#b8bb26] md:text-3xl"
            >
              Software Developer • AI Engineer
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
              }}
              className="mt-8 max-w-2xl text-lg leading-9 text-[#d5c4a1]"
            >
              At 22, I've had the opportunity to build across AI systems,
              backend engineering, cloud infrastructure, and distributed
              systems, learning that great software isn't just intelligent 
              - it's reliable, scalable, and built to solve real problems.
              That's the philosophy I bring to every production system I
              design.
            </motion.p>

            {/* Technology Badges */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >

              {technologies.map((tech) => (
                <Badge key={tech}>
                  {tech}
                </Badge>
              ))}

            </motion.div>

            {/* CTA Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <a href="/resume.pdf">

                <Button>

                  <span className="flex items-center gap-2">

                    <Download size={18} />

                    Resume

                  </span>

                </Button>

              </a>
               <a
                href="https://www.linkedin.com/in/-priyanshu-shekhar/"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Button variant="secondary">

                  <span className="flex items-center gap-2">

                    <LinkedIn size={18} />

                    LinkedIn

                  </span>

                </Button>

              </a>
              
              <a
                href="https://github.com/Priyanshu-Shekhar"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Button variant="secondary">

                  <span className="flex items-center gap-2">

                    <GitHub size={18} />

                    GitHub

                  </span>

                </Button>

              </a>
              <a
                href="https://leetcode.com/u/Priyanshu-Shekhar/"
                target="_blank"
                rel="noopener noreferrer"
                >

                <Button variant="secondary">

                    <span className="flex items-center gap-2">

                    <SiLeetcode
                        size={18}
                        className="text-[#FFA116]"
                    />

                    LeetCode

                    </span>

                </Button>

              </a>

             

            </motion.div>

            {/* Social Icons */}

           

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="relative flex justify-center"
          >

            {/* Profile Image */}

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#fabd2f]/20 blur-3xl" />

              <img
                src="/profile.jpg"
                alt="Priyanshu Shekhar"
                className="relative h-[420px] w-[420px] rounded-full border-4 border-[#504945] object-cover shadow-2xl"
              />

            </div>

            {/* Floating Stats */}
            <div className="absolute -left-20 top-2 hidden lg:block">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.2,
                }}
                className="rounded-2xl border border-[#504945] bg-[#3c3836]/90 p-5 backdrop-blur-md"
              >

                <div className="grid grid-cols-2 gap-5">

                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center"
                    >

                      <p className="text-2xl font-bold text-[#b8bb26]">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs text-[#a89984]">
                        {stat.label}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>

            </div>

            {/* USC Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.35,
              }}
              className="absolute -bottom-6 right-0 hidden rounded-2xl border border-[#504945] bg-[#3c3836]/95 px-6 py-4 backdrop-blur-lg lg:block"
            >

              <p className="text-sm text-[#a89984]">
                Based out of
              </p>

              <p className="font-semibold">
                Santa Barbara, California
              </p>

              <p className="text-sm text-[#fb4934]">
                U.S.A
              </p>

            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          className="mt-24 flex flex-col items-center"
        >

          <a
            href="#about"
            className="group flex flex-col items-center"
          >

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#a89984]">
              Scroll Down
            </p>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#504945] bg-[#3c3836]"
            >

              <ArrowDown
                className="transition group-hover:text-[#fabd2f]"
                size={22}
              />

            </motion.div>

          </a>

        </motion.div>

      </Container>

      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#fabd2f]/5 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#83a598]/5 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#b8bb26]/5 blur-[120px]"
        />

      </div>

    </section>
  );
}
