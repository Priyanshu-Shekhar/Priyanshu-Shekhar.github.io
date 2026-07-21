import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch as GitHub } from "lucide-react";

import Badge from "../ui/Badge";
import Card from "../ui/Card";
import type { Project } from "../../data/projects";

// import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="overflow-hidden p-0">

        {/* Project Image */}

        <div className="relative aspect-video overflow-hidden bg-[#282828]">

          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />

        </div>

        {/* Content */}

        <div className="space-y-5 p-6">

          <div>

            <h3 className="text-2xl font-bold text-[#ebdbb2]">
              {project.title}
            </h3>

            <p className="mt-2 text-[#a89984]">
              {project.subtitle}
            </p>

          </div>

          <p className="line-clamp-3 leading-7 text-[#d5c4a1]">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="flex flex-wrap gap-2">

            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>

          {/* Buttons */}

          <div className="flex items-center justify-between pt-2">

            <button
              onClick={() => onOpen(project)}
              className="font-medium text-[#fabd2f] transition hover:underline"
            >
              Learn More
            </button>

            <div className="flex gap-3">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHub
                  size={21}
                  className="transition hover:text-[#fabd2f]"
                />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight
                    size={21}
                    className="transition hover:text-[#fabd2f]"
                  />
                </a>
              )}

            </div>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}