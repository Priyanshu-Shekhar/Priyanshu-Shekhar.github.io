import { motion } from "framer-motion";
import {
  Brain,
  FlaskConical,
  ShieldCheck,
  Cpu,
  Cloud,
  ArrowUpRight,
  Microscope,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const researchAreas = [
  {
    icon: Brain,
    title: "Multi-Agent AI Systems",
    description:
      "Designing autonomous AI agents capable of collaborating to perform complex software engineering and security tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Prompt Injection Security",
    description:
      "Investigating attack vectors against LLM-powered applications and developing evaluation methodologies for safer AI deployment.",
  },
  {
    icon: FlaskConical,
    title: "Fuzz Testing",
    description:
      "Exploring AI-assisted fuzzing techniques for automated vulnerability discovery and software reliability testing.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Building scalable cloud-native experimentation environments capable of running autonomous AI workflows.",
  },
];

const technologies = [
  "Python",
  "AI Agents",
  "LLMs",
  "Prompt Engineering",
  "Cloud Computing",
  "Docker",
  "Databases",
  "TensorFlow",
  "PyTorch",
  "Git",
  "Linux",
];

const currentFocus = [
  "Autonomous multi-agent orchestration",
  "Prompt injection attack simulation",
  "AI-assisted software security testing",
  "Scalable cloud experimentation pipelines",
  "Database systems for AI workflows",
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-32"
    >
      <Container>
        <SectionTitle
          title="Research"
          subtitle="Bridging artificial intelligence research with practical software engineering and secure, scalable systems."
        />

        {/* HERO RESEARCH CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <Card className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              {/* Left */}

              <div className="flex flex-col justify-center p-10">

                <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#504945] bg-[#282828] px-4 py-2">

                  <Microscope
                    size={18}
                    className="text-[#fabd2f]"
                  />

                  <span className="text-sm font-medium">
                    Current Research
                  </span>

                </div>

                <h3 className="text-4xl font-bold leading-tight">
                  SentryFuzz
                </h3>

                <p className="mt-2 text-xl text-[#fabd2f]">
                  University of Southern California · Lime Lab
                </p>

                <p className="mt-8 leading-8 text-[#d5c4a1]">
                  As a Research Assistant at USC, I work on
                  SentryFuzz, an ongoing research initiative
                  exploring how autonomous AI agents can be
                  leveraged for intelligent software testing,
                  prompt injection analysis, cloud-native
                  experimentation, and secure AI system
                  evaluation.
                </p>

                <p className="mt-6 leading-8 text-[#a89984]">
                  Since this research is actively in
                  development, many implementation details
                  remain confidential. The work combines
                  large language models, distributed cloud
                  infrastructure, database systems, fuzz
                  testing, and security-focused evaluation
                  methodologies to advance trustworthy AI
                  systems.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">

                  {technologies.map((tech) => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  ))}

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center justify-center bg-[#282828] p-12">

                <Cpu
                  size={180}
                  className="text-[#fabd2f]/80"
                />

              </div>
            </div>
          </Card>
        </motion.div>

        {/* RESEARCH AREAS */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Card className="h-full">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#282828]">

                    <Icon
                      size={28}
                      className="text-[#fabd2f]"
                    />

                  </div>

                  <h3 className="text-2xl font-semibold">
                    {area.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#a89984]">
                    {area.description}
                  </p>

                </Card>
              </motion.div>
            );
          })}

        </div>

        {/* CURRENT FOCUS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24"
        >
          <Card>

            <h3 className="text-3xl font-bold">
              Current Research Focus
            </h3>

            <div className="mt-10 grid gap-5 md:grid-cols-2">

              {currentFocus.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 h-3 w-3 rounded-full bg-[#fabd2f]" />

                  <p className="leading-8 text-[#d5c4a1]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </Card>
        </motion.div>

        {/* PUBLICATION CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-24"
        >
          <Card className="text-center">

            <Brain
              size={50}
              className="mx-auto text-[#fabd2f]"
            />

            <h3 className="mt-6 text-3xl font-bold">
              Research in Progress
            </h3>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#a89984]">
              The SentryFuzz project is currently under
              active research and development. Additional
              technical details, publications, and findings
              will be shared once the work is publicly
              released.
            </p>

            <div className="mt-10">

              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/Priyanshu-Shekhar",
                    "_blank"
                  )
                }
              >
                <span className="flex items-center gap-2">

                  View My GitHub

                  <ArrowUpRight size={18} />

                </span>
              </Button>

            </div>

          </Card>
        </motion.div>

      </Container>
    </section>
  );
}