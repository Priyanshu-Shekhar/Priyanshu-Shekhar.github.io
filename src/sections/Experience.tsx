import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarDays,
  MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Professional Experience"
          subtitle="Research, machine learning, backend engineering, and cloud infrastructure across academia and industry."
        />

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#504945] lg:block" />

          <div className="space-y-12">

            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative"
              >
                <div className="flex gap-8">

                  {/* Timeline Icon */}

                  <div className="relative hidden lg:flex">

                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#504945] bg-[#282828]">

                      <Briefcase
                        size={18}
                        className="text-[#fabd2f]"
                      />

                    </div>

                  </div>

                  {/* Card */}

                  <Card className="flex-1">

                    {/* Header */}

                    <div className="flex flex-col justify-between gap-5 lg:flex-row">

                      <div>

                        <h3 className="text-2xl font-bold text-[#ebdbb2]">
                          {job.role}
                        </h3>

                        <p className="mt-1 text-lg font-medium text-[#fabd2f]">
                          {job.company}
                        </p>

                      </div>

                      <div className="space-y-2 text-sm text-[#a89984]">

                        <div className="flex items-center gap-2">

                          <CalendarDays size={16} />

                          <span>{job.duration}</span>

                        </div>

                        <div className="flex items-center gap-2">

                          <MapPin size={16} />

                          <span>{job.location}</span>

                        </div>

                      </div>

                    </div>

                    {/* Bullet Points */}

                    <div className="mt-8">

                      <ul className="space-y-4">

                        {job.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-4 leading-8 text-[#d5c4a1]"
                          >
                            <span className="mt-3 h-2 w-2 rounded-full bg-[#fabd2f]" />

                            <span>{bullet}</span>

                          </li>
                        ))}

                      </ul>

                    </div>

                    {/* Technologies */}

                    <div className="mt-10">

                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#a89984]">
                        Technologies
                      </h4>

                      <div className="flex flex-wrap gap-3">

                        {job.technologies.map((tech) => (
                          <Badge key={tech}>
                            {tech}
                          </Badge>
                        ))}

                      </div>

                    </div>

                  </Card>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}