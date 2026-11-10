import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Calendar, DollarSign, Video, Globe, MapPin, Languages, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/active-courses")({
  head: () => ({
    meta: [
      { title: "Active Courses — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Currently available training courses and certification bootcamps. Enroll now for hands-on learning and industry-recognized credentials.",
      },
      { property: "og:title", content: "Active Courses — Mauna Kea Consulting" },
      { property: "og:description", content: "Browse and enroll in our currently available training programs." },
      { property: "og:url", content: "/active-courses" },
    ],
    links: [{ rel: "canonical", href: "/active-courses" }],
  }),
  component: ActiveCoursesPage,
});

const AZ900_FEATURES = [
  {
    icon: CheckCircle2,
    title: "No Tech Background Needed",
    description: "We break down cloud essentials (compute, security, pricing, data storage) into plain English.",
  },
  {
    icon: Video,
    title: "Hands-On, Not Just Slides",
    description: "You will actually log in and build basic services in the Microsoft Azure portal.",
  },
  {
    icon: GraduationCap,
    title: "Built to Pass",
    description: "Get real sample exam questions, tips on how Microsoft tests you, and a step-by-step roadmap to walk into the test with confidence.",
  },
  {
    icon: DollarSign,
    title: "Boost Your Resume",
    description: "Add a verified, industry-standard Microsoft credential to your profile.",
  },
] as const;

function ActiveCoursesPage() {
  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Active Courses"
            title={
              <>
                Currently available{" "}
                <span className="text-primary">training programs.</span>
              </>
            }
            description="Enroll now in our live certification bootcamps and hands-on training courses. Limited seats available."
          />
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-center">Featured Course</p>
          <h2 className="display-lg font-medium text-center">
            Microsoft Azure Fundamentals
            <span className="block mt-2 text-primary">AZ-900 Certification Bootcamp</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-2xl border hairline bg-gradient-to-br from-surface to-surface/50 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  New to the cloud & AI? The AZ-900 is Microsoft's globally recognized entry-level
                  certification that proves you understand how modern cloud technology works.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Designed for everyone — developers, IT, managers, sales, and complete beginners
                  with zero tech background. We're hosting a focused, hands-on prep course designed
                  not just to teach the concepts, but to guarantee you pass the official Microsoft
                  exam on your first try.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Starts Dec 1</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Video className="h-4 w-4" />
                    <span>Live Sessions + Labs</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <DollarSign className="h-4 w-4" />
                    <span>USD 50</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {AZ900_FEATURES.map((feature, i) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-lg border hairline bg-surface/50 p-4"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 border-t hairline pt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                    <Languages className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Language
                    </p>
                    <p className="mt-1 text-sm font-medium">English or French</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred language for course materials and instruction.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Delivery Mode
                    </p>
                    <p className="mt-1 text-sm font-medium">Online or In-Person</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join remotely from anywhere or attend in person at our Dakar, Senegal location.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 border-t hairline pt-8">
              <p className="text-lg font-medium">Ready to get certified?</p>
              <a
                href="https://forms.cloud.microsoft/e/6tg9jZJUtm?origin=lprLink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Reserve Your Spot Now
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-sm text-muted-foreground">
                Limited seats available — register today
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-light border-y hairline">
        <div className="container-page py-20 md:py-24">
          <ScrollReveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="eyebrow mb-4">More courses coming soon</p>
                <h2 className="display-lg font-medium">Looking for other certifications?</h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  We're regularly adding new courses in cloud, cybersecurity, data, AI, and HPC. 
                  Contact us to request a specific certification or get notified about upcoming programs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Request a course
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
