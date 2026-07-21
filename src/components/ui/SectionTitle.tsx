import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
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
        duration: 0.5,
      }}
      className="mb-14"
    >
      <div className="mb-3 h-1 w-20 rounded bg-[#fabd2f]" />

      <h2 className="text-4xl font-bold tracking-tight text-[#ebdbb2] md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#a89984]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}