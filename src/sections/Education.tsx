import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

import { education } from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Education"
          subtitle="A strong academic foundation in computer science, artificial intelligence, mathematics, and software engineering."
        />

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#504945] lg:block" />

          <div className="space-y-12">

            {education.map((school, index) => (
              <motion.div
                key={school.school}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="flex gap-8">

                  {/* Timeline Icon */}

                  <div className="relative hidden lg:flex">

                    <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#504945] bg-[#282828]">

                      <GraduationCap
                        size={18}
                        className="text-[#fabd2f]"
                      />

                    </div>

                  </div>

                  {/* Card */}

                  <Card className="flex-1">

                    <div className="flex flex-col justify-between gap-6 lg:flex-row">

                      <div>

                        <h3 className="text-3xl font-bold">
                          {school.school}
                        </h3>

                        <p className="mt-2 text-lg text-[#fabd2f]">
                          {school.degree}
                        </p>

                        {school.gpa && (
                          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#504945] bg-[#282828] px-4 py-2">

                            <Award
                              size={16}
                              className="text-[#b8bb26]"
                            />

                            <span className="text-sm font-medium">
                              {school.gpa}
                            </span>

                          </div>
                        )}

                      </div>

                      <div className="space-y-3 text-sm text-[#a89984]">

                        <div className="flex items-center gap-2">

                          <CalendarDays size={16} />

                          <span>{school.duration}</span>

                        </div>

                        <div className="flex items-center gap-2">

                          <MapPin size={16} />

                          <span>{school.location}</span>

                        </div>

                      </div>

                    </div>

                    {/* Highlights */}

                    <div className="mt-10">

                      <div className="mb-5 flex items-center gap-3">

                        <BookOpen
                          size={20}
                          className="text-[#fabd2f]"
                        />

                        <h4 className="text-lg font-semibold">
                          Highlights
                        </h4>

                      </div>

                      <ul className="space-y-4">

                        {school.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-4 leading-8 text-[#d5c4a1]"
                          >
                            <span className="mt-3 h-2 w-2 rounded-full bg-[#fabd2f]" />

                            <span>{item}</span>

                          </li>
                        ))}

                      </ul>

                    </div>

                  </Card>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Coursework Summary */}

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
              Relevant Coursework
            </h3>

            <p className="mt-5 leading-8 text-[#a89984]">
              Throughout my undergraduate and graduate studies, I've built a
              strong foundation across computer science, artificial intelligence,
              mathematics, software engineering, cloud computing, and systems
              programming.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Artificial Intelligence",
                "Machine Learning Systems",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Robotics",
                "Operating Systems",
                "Distributed Systems",
                "Parallel Processing",
                "Database Management",
                "Algorithms",
                "Data Structures",
                "Probability & Statistics",
                "Software Engineering",
                "Cloud Computing",
                "Big Data Analytics",
                "Web Search and Recommender Systems",
                "Multimodal AI systems",
                "Systems Programming",
              ].map((course) => (
                <Badge key={course}>
                  {course}
                </Badge>
              ))}

            </div>

          </Card>
        </motion.div>

      </Container>
    </section>
  );
}