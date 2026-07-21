import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch as GitHub,
  Link as LinkedIn,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#504945] bg-[#282828]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">

          {/* Logo */}

          <a
            href="#"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-[#fabd2f]">A.K.A Pri</span>
            <span className="text-[#ebdbb2]">.</span>
          </a>

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#a89984] transition hover:text-[#fabd2f]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="https://github.com/Priyanshu-Shekhar"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub
                className="transition hover:text-[#fabd2f]"
                size={20}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/-priyanshu-shekhar/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn
                className="transition hover:text-[#fabd2f]"
                size={20}
              />
            </a>

            <a href="mailto:101.priyanshushekhar@gmail.com">
              <Mail
                className="transition hover:text-[#fabd2f]"
                size={20}
              />
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg bg-[#fabd2f] px-5 py-2 font-semibold text-[#282828] transition hover:brightness-110"
            >
              Resume
            </a>

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed left-0 top-20 z-40 w-full border-b border-[#504945] bg-[#282828] lg:hidden"
        >
          <div className="flex flex-col p-6">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-lg text-[#ebdbb2]"
              >
                {item.label}
              </a>
            ))}

            <hr className="my-4 border-[#504945]" />

            <a
              href="/resume.pdf"
              className="rounded-lg bg-[#fabd2f] px-4 py-3 text-center font-semibold text-[#282828]"
            >
              Download Resume
            </a>

          </div>
        </motion.div>
      )}
    </>
  );
}
