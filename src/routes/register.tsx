import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Users, CheckCircle2, X } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";

const COURSES = [
  {
    id: "cloud-fundamentals",
    title: "Cloud Development Fundamentals",
    duration: "5 days",
    delivery: "Virtual · Onsite",
    capacity: "20 participants",
    price: "$2,500",
    description: "Master cloud platforms, services, and deployment patterns with hands-on labs and real-world projects.",
    topics: [
      "Cloud computing fundamentals",
      "AWS/Azure/GCP deep dive",
      "Serverless architecture patterns",
      "Security best practices"
    ]
  },
  {
    id: "kubernetes",
    title: "Container Orchestration with Kubernetes",
    duration: "4 days",
    delivery: "Virtual · Workshop",
    capacity: "15 participants",
    price: "$2,200",
    description: "Learn to deploy, manage, and scale containerized applications using Kubernetes in production environments.",
    topics: [
      "Docker containers mastery",
      "Kubernetes architecture",
      "Deployment strategies",
      "Monitoring & troubleshooting"
    ]
  },
  {
    id: "devops-cicd",
    title: "DevOps & CI/CD Pipelines",
    duration: "3 days",
    delivery: "Virtual · Hybrid",
    capacity: "25 participants",
    price: "$1,800",
    description: "Build automated CI/CD pipelines, implement infrastructure as code, and establish DevOps best practices.",
    topics: [
      "CI/CD pipeline design",
      "GitOps workflows",
      "Infrastructure as Code",
      "Observability patterns"
    ]
  },
  {
    id: "ai-executives",
    title: "AI for Executives",
    duration: "2 days",
    delivery: "Onsite · Workshop",
    capacity: "12 participants",
    price: "$3,000",
    description: "Strategic-level understanding of AI capabilities, implementation roadmap, and organizational transformation.",
    topics: [
      "AI landscape & trends",
      "Business value assessment",
      "Implementation strategy",
      "Risk & governance"
    ]
  }
];

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Course Registration — Mauna Kea Consulting" },
      {
        name: "description",
        content: "Register for our hands-on training courses in cloud, DevOps, AI, and more.",
      },
      { property: "og:title", content: "Course Registration — Mauna Kea Consulting" },
      { property: "og:description", content: "Upskill your team with expert-led training." },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const course = COURSES.find(c => c.id === selectedCourse);

  return (
    <>
      <section className="border-b hairline pt-32 pb-24 bg-gradient-to-b from-background to-surface/20">
        <div className="container-page">
          <SectionHeader
            align="center"
            eyebrow="Course Registration"
            title={<>Elevate Your Team's Expertise.</>}
            description="Premium training programs designed for professionals who demand excellence."
          />
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border hairline bg-gradient-to-br from-surface/50 to-background p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold leading-tight">{course.title}</h3>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-2xl font-semibold text-primary">{course.price}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t hairline pt-4">
                  <div className="text-center">
                    <Calendar className="mx-auto h-4 w-4 text-primary/60 mb-1" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Duration</p>
                    <p className="mt-1 text-xs font-medium">{course.duration}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="mx-auto h-4 w-4 text-primary/60 mb-1" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Format</p>
                    <p className="mt-1 text-xs font-medium">{course.delivery}</p>
                  </div>
                  <div className="text-center">
                    <Users className="mx-auto h-4 w-4 text-primary/60 mb-1" />
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Capacity</p>
                    <p className="mt-1 text-xs font-medium">{course.capacity}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground">Curriculum</p>
                  <ul className="space-y-1">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-1 w-1 rounded-full bg-primary/60" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedCourse(course.id)}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Register Now
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Enterprise Solutions"
        title="Need Custom Training?"
        description="We design bespoke curricula and private cohorts tailored to your organization's specific requirements."
      />

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border hairline bg-gradient-to-br from-surface to-background shadow-2xl shadow-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative p-8">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border hairline transition-colors hover:bg-secondary"
                >
                  <X className="h-4 w-4" />
                </button>

                {submitted ? (
                  <div className="flex flex-col items-center gap-6 py-8 text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 ring-2 ring-primary/30">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Registration Submitted</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        We'll contact you within 24 hours with payment details and next steps.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSelectedCourse(null);
                      }}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                        Register for
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">{course?.title}</h3>
                      <p className="mt-1 text-lg text-primary font-medium">{course?.price}</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium">First Name <span className="text-primary">*</span></label>
                          <input
                            required
                            type="text"
                            className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium">Last Name <span className="text-primary">*</span></label>
                          <input
                            required
                            type="text"
                            className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Email <span className="text-primary">*</span></label>
                        <input
                          required
                          type="email"
                          className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Company</label>
                        <input
                          type="text"
                          className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Phone</label>
                        <input
                          type="tel"
                          className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Participants <span className="text-primary">*</span></label>
                        <input
                          required
                          type="number"
                          min="1"
                          className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Preferred Dates</label>
                        <input
                          type="text"
                          placeholder="e.g., First week of March"
                          className="w-full rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium">Additional Notes</label>
                        <textarea
                          rows={3}
                          className="w-full resize-none rounded-lg border hairline bg-background/80 px-4 py-2.5 text-sm outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          type="submit"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                          Complete Registration
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCourse(null)}
                          className="inline-flex items-center justify-center rounded-lg border hairline px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
