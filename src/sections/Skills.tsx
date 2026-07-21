import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  Wrench,
  Monitor,
  ArrowRight,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

import { skills } from "../data/skills";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  Frontend: Monitor,
  Backend: Database,
  "Artificial Intelligence": Brain,
  "Cloud & DevOps": Cloud,
  Databases: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Technical Skills"
          subtitle="A toolkit built through research, production software development, cloud engineering, and machine learning projects."
        />

        {/* Intro */}

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
          transition={{
            duration: 0.6,
          }}
          className="mb-20"
        >
          <Card>

            <h3 className="text-3xl font-bold">
              Engineering Philosophy
            </h3>

            <p className="mt-6 max-w-4xl leading-8 text-[#d5c4a1]">
              I enjoy building software across the entire stack—from designing
              cloud infrastructure and backend systems to developing AI-based applications
              and intuitive user experiences. While artificial intelligence is
              my area of interest, I attain strong engineering
              fundamentals, scalable architectures, and clean software design
              are what transform research into real-world products.
            </p>

          </Card>
        </motion.div>

        {/* Skill Categories */}

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((category, index) => {
            const Icon =
              categoryIcons[category.category] ?? Code2;

            return (
              <motion.div
                key={category.category}
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

                  <div className="mb-6 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#282828]">

                      <Icon
                        size={28}
                        className="text-[#fabd2f]"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold">
                        {category.category}
                      </h3>

                      <p className="text-sm text-[#a89984]">
                        {category.skills.length} Technologies
                      </p>

                    </div>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    {category.skills.map((skill) => (
                      <Badge key={skill}>
                        {skill}
                      </Badge>
                    ))}

                  </div>

                </Card>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}