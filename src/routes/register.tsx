import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Course Waiting List — MKC Microsoft Certification Bootcamps" },
      {
        name: "description",
        content:
          "MKC Microsoft Certification Bootcamps are at capacity. Join the priority waitlist for Azure, Fabric, AI, and security certifications.",
      },
      { property: "og:title", content: "Course Waiting List — MKC Microsoft Certification Bootcamps" },
      {
        property: "og:description",
        content: "Join the priority waitlist to secure your spot in our next exclusive intake.",
      },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

const COURSE_CATEGORIES = [
  {
    title: "AI & Data Science",
    tagline: "Proof your career against automation.",
    courses: [
      { id: "ai-900", code: "AI-900", title: "Azure AI Engineering" },
      { id: "ai-102", code: "AI-102", title: "Azure AI Engineering" },
      { id: "dp-100", code: "DP-100", title: "Azure Data Science" },
    ],
  },
  {
    title: "Microsoft Fabric & Analytics",
    tagline: "Master the world's hottest data platform.",
    courses: [
      { id: "dp-600", code: "DP-600", title: "Microsoft Fabric Specialist" },
      { id: "dp-700", code: "DP-700", title: "Microsoft Fabric Specialist" },
      { id: "pl-300", code: "PL-300", title: "Power BI Data Analyst" },
      { id: "dp-900", code: "DP-900", title: "Data Fundamentals" },
    ],
  },
  {
    title: "Cloud & Security",
    tagline: "The backbone of modern enterprise.",
    courses: [
      { id: "az-900", code: "AZ-900", title: "Azure Fundamentals" },
      { id: "sc-100", code: "SC-100", title: "Cybersecurity Architect" },
    ],
  },
] as const;

const ALL_COURSES = COURSE_CATEGORIES.flatMap((category) =>
  category.courses.map((course) => ({ ...course, category: category.title })),
);

const WHY_MKC = [
  {
    title: "Cohort-Based Learning",
    body: "Don't learn alone. Join a group of peers and industry experts.",
  },
  {
    title: "Result-Oriented",
    body: (
      <>
        We focus on the <strong>skills</strong> first and the <strong>exam</strong> second—ensuring
        you can actually do the job.
      </>
    ),
  },
  {
    title: "Exclusive Content",
    body: 'Our waitlist members receive monthly "Tech-Briefs" while they wait for their session to start.',
  },
] as const;

const TRAINING_TYPES = [
  { value: "individual", label: "Individual Training" },
  { value: "team", label: "Training for my Team" },
] as const;

function RegisterPage() {
  const formRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [courseError, setCourseError] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleCourse = (id: string) => {
    setSelectedCourses((current) =>
      current.includes(id) ? current.filter((c) => c !== id) : [...current, id],
    );
    setCourseError(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCourses.length === 0) {
      setCourseError(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <section className="border-b hairline pt-32 pb-16 md:pb-20">
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow mb-4">Course Waiting List</p>
            <h1 className="display-lg font-medium">The Future is in High Demand. Are You?</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              MKC Microsoft Certification Bootcamps are currently at capacity. Join the priority
              waitlist to secure your spot in our next exclusive intake.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Join the Priority Waitlist
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <p className="mt-6 text-muted-foreground">
              Identify the skills you want to master. We'll notify you when the next cohort launches.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-page max-w-3xl py-16 md:py-20">
        <ScrollReveal>
          <div className="space-y-12">
            {COURSE_CATEGORIES.map((category, index) => (
              <div key={category.title}>
                <h2 className="text-xl font-semibold">
                  {index + 1}. {category.title}
                </h2>
                <p className="mt-1 italic text-muted-foreground">{category.tagline}</p>
                <ul className="mt-5 space-y-3">
                  {category.courses.map((course, courseIndex) => {
                    const prev = category.courses[courseIndex - 1];
                    const showCombinedCode =
                      prev &&
                      prev.title === course.title &&
                      courseIndex > 0 &&
                      category.courses[courseIndex - 1]?.code;

                    if (
                      courseIndex > 0 &&
                      prev?.title === course.title &&
                      category.courses.some(
                        (c, i) => i < courseIndex && c.title === course.title,
                      )
                    ) {
                      if (courseIndex === category.courses.findIndex((c) => c.title === course.title) + 1) {
                        return null;
                      }
                    }

                    const sameTitleCourses = category.courses.filter((c) => c.title === course.title);
                    const isFirstOfGroup =
                      sameTitleCourses.length > 1 &&
                      category.courses.findIndex((c) => c.title === course.title) === courseIndex;

                    if (sameTitleCourses.length > 1 && !isFirstOfGroup) return null;

                    const codeLabel =
                      sameTitleCourses.length > 1
                        ? sameTitleCourses.map((c) => c.code).join(" / ")
                        : course.code;

                    return (
                      <li key={course.id} className="leading-relaxed">
                        <span className="font-semibold">{codeLabel}:</span> {course.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="container-page max-w-3xl">
        <hr className="border-t hairline" />
      </div>

      <section className="container-page max-w-3xl py-16 md:py-20">
        <ScrollReveal>
          <h2 className="display-md font-medium">Why wait for MKC?</h2>
          <ul className="mt-8 space-y-6">
            {WHY_MKC.map((item) => (
              <li key={item.title} className="leading-relaxed">
                <span className="font-semibold">{item.title}:</span>{" "}
                <span className="text-muted-foreground">{item.body}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      <div className="container-page max-w-3xl">
        <hr className="border-t hairline" />
      </div>

      <section ref={formRef} id="waitlist-form" className="container-page max-w-3xl py-16 md:py-24">
        <ScrollReveal>
          <h2 className="display-md font-medium">Join the Priority Waitlist</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what you want to learn. We'll notify you when the next session is live.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Selected options can be changed later.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="mt-10 border-t hairline pt-10"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">You're on the priority waitlist.</p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      We'll notify you when the next cohort launches.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setSelectedCourses([]);
                      }}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      Submit another response
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                className="mt-10 space-y-8"
              >
                <Field label="Name" required name="name" />
                <Field label="Email" required name="email" type="email" />

                <div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    I am interested in
                  </p>
                  <div className="space-y-6">
                    {COURSE_CATEGORIES.map((category) => (
                      <div key={category.title}>
                        <p className="mb-3 text-sm font-semibold">{category.title}</p>
                        <div className="space-y-3">
                          {category.courses.map((course) => (
                            <label
                              key={course.id}
                              className="flex cursor-pointer items-start gap-3"
                            >
                              <Checkbox
                                checked={selectedCourses.includes(course.id)}
                                onCheckedChange={() => toggleCourse(course.id)}
                                className="mt-0.5"
                              />
                              <span className="text-sm leading-relaxed">
                                <span className="font-semibold">{course.code}:</span> {course.title}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {courseError && (
                    <p className="mt-3 text-sm text-primary">
                      Please select at least one course.
                    </p>
                  )}
                  {selectedCourses.map((id) => (
                    <input key={id} type="hidden" name="courses" value={id} />
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="training-type"
                    className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    I am looking for
                  </label>
                  <select
                    id="training-type"
                    name="trainingType"
                    required
                    defaultValue=""
                    className="w-full appearance-none border-0 border-b hairline bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-primary rounded-none"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {TRAINING_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-t hairline pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                  >
                    Secure My Priority Status
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="w-full border-0 border-b hairline bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary rounded-none"
      />
    </div>
  );
}
