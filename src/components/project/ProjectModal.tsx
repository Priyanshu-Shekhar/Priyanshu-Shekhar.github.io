import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch as GitHub,
  X,
} from "lucide-react";

import Badge from "../ui/Badge";

import type { Project } from "../../data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>

      {project && (

        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-[#504945] bg-[#282828]"
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-[#3c3836] p-2 transition hover:bg-[#504945]"
            >
              <X size={20} />
            </button>

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover"
            />

            <div className="space-y-8 p-10">

              {/* Title */}

              <div>

                <h2 className="text-4xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 text-lg text-[#a89984]">
                  {project.subtitle}
                </p>

              </div>

              {/* Description */}

              <div>

                <h3 className="mb-3 text-xl font-semibold text-[#fabd2f]">
                  Overview
                </h3>

                <p className="leading-8 text-[#d5c4a1]">
                  {project.description}
                </p>

              </div>

              {/* Highlights */}

              <div>

                <h3 className="mb-4 text-xl font-semibold text-[#fabd2f]">
                  Key Highlights
                </h3>

                <ul className="space-y-3">

                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="list-inside list-disc text-[#ebdbb2]"
                    >
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

              {/* Technologies */}

              <div>

                <h3 className="mb-4 text-xl font-semibold text-[#fabd2f]">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  ))}

                </div>

              </div>

              {/* Links */}

              <div className="flex flex-wrap gap-5 pt-2">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#fabd2f] px-5 py-3 font-semibold text-[#282828] transition hover:brightness-110"
                >
                  <GitHub size={18} />
                  GitHub Repository
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#504945] px-5 py-3 transition hover:border-[#fabd2f]"
                  >
                    <ArrowUpRight size={18} />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}