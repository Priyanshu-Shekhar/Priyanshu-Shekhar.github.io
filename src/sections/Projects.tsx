import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";

import {
  projects,
  type Project,
} from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="py-32"
      >
        <Container>
          <SectionTitle
            title="Featured Projects"
            subtitle="A collection of projects spanning Artificial Intelligence, Machine Learning, Distributed Systems, Full Stack Development, and Cloud Engineering."
          />

          {/* Featured Project */}

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
            className="mb-20 overflow-hidden rounded-3xl border border-[#504945] bg-[#3c3836]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#fabd2f]">
                  Featured Project
                </p>

                <h3 className="text-4xl font-bold">
                  {projects[0].title}
                </h3>

                <p className="mt-6 leading-8 text-[#d5c4a1]">
                  {projects[0].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#504945] bg-[#282828] px-4 py-2 text-sm text-[#ebdbb2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    onClick={() =>
                      setSelectedProject(projects[0])
                    }
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}

          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
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
                  duration: 0.45,
                  delay: index * 0.08,
                }}
              >
                <ProjectCard
                  project={project}
                  onOpen={setSelectedProject}
                />
              </motion.div>
            ))}
          </div>

        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}