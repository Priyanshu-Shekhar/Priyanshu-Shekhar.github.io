import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import { socials } from "../data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <SectionTitle
          title="Let's Build Something Together"
          subtitle="I'm always interested in discussing software engineering, artificial intelligence, distributed systems, research opportunities, and challenging technical problems."
        />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card className="h-full">

              <h3 className="text-4xl font-bold">
                Interested in working together?
              </h3>

              <p className="mt-8 leading-8 text-[#d5c4a1]">
                Whether you're looking for a Software Engineer,
                AI Engineer, Data Engineer, or simply
                want to discuss an exciting project, I'd love to
                hear from you.
              </p>

              <p className="mt-6 leading-8 text-[#a89984]">
                I'm currently seeking full-time Software
                Engineering opportunities where I can contribute
                to building scalable systems, intelligent
                applications, and impactful products while
                continuing to grow as an engineer.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#282828]">

                    <Mail
                      size={20}
                      className="text-[#fabd2f]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-[#a89984]">
                      Email
                    </p>

                    <a
                      href="mailto:priyanshu.shekhar.connect@gmail.com"
                      className="transition hover:text-[#fabd2f]"
                    >
                      priyanshu.shekhar.connect@gmail.com
                    </a>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#282828]">

                    <MapPin
                      size={20}
                      className="text-[#fabd2f]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-[#a89984]">
                      Location
                    </p>

                    <p>Santa Barbara, California</p>

                  </div>

                </div>

              </div>

              <div className="mt-12">

                <a href="mailto:priyanshu.shekhar.connect@gmail.com">

                  <Button>

                    <span className="flex items-center gap-2">

                      Get In Touch

                      <ArrowUpRight size={18} />

                    </span>

                  </Button>

                </a>

              </div>

            </Card>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card>

              <h3 className="text-2xl font-bold">
                Connect With Me
              </h3>

              <p className="mt-4 leading-8 text-[#a89984]">
                You can also find me on these platforms.
              </p>

              <div className="mt-10 space-y-4">

                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center justify-between rounded-xl border border-[#504945] bg-[#282828] p-5 transition-all duration-300 hover:border-[#fabd2f]"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3c3836]">

                          <Icon
                            size={22}
                            className="text-[#fabd2f]"
                          />

                        </div>

                        <div>

                          <h4 className="font-semibold">
                            {social.name}
                          </h4>

                          <p className="text-sm text-[#a89984]">
                            {social.href.replace(
                              "mailto:",
                              ""
                            )}
                          </p>

                        </div>

                      </div>

                      <ArrowUpRight
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={18}
                      />

                    </a>
                  );
                })}

              </div>

            </Card>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}
