import {
  GitBranch as GitHub,
  Link as LinkedIn,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#504945] py-14">

      <div className="mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">

        <div>

          <h3 className="text-2xl font-bold">
            <span className="text-[#fabd2f]">
              Priyanshu (Pri)
            </span>{" "}
            Shekhar
          </h3>

          <p className="mt-3 max-w-md text-sm leading-7 text-[#a89984]">
            Software Engineer focused on Artificial Intelligence,
            Distributed Systems, Cloud Infrastructure, and
            Full Stack Development.
          </p>

        </div>

        <div className="flex gap-6">

          <a
            href="https://github.com/Priyanshu-Shekhar"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub
              size={22}
              className="transition hover:text-[#fabd2f]"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/-priyanshu-shekhar/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn
              size={22}
              className="transition hover:text-[#fabd2f]"
            />
          </a>

          <a href="mailto:101.priyanshushekhar@gmail.com">
            <Mail
              size={22}
              className="transition hover:text-[#fabd2f]"
            />
          </a>

        </div>

      </div>

      <div className="mx-auto mt-12 w-[92%] max-w-7xl border-t border-[#3c3836] pt-8">

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#a89984] md:flex-row">

          <p>
            © {new Date().getFullYear()} Priyanshu Shekhar.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2">

            Built with

            <Heart
              size={15}
              className="fill-[#fb4934] text-[#fb4934]"
            />

            React · TypeScript · Tailwind CSS · Vite

          </p>

        </div>

      </div>

    </footer>
  );
}