import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { StatsRow } from "@/components/site/StatsRow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { REGIONS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mauna Kea Consulting" },
      {
        name: "description",
        content:
          "Get in touch with Mauna Kea Consulting for pilots, proposals, training, and partnerships. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact — Mauna Kea Consulting" },
      { property: "og:description", content: "Let's start a conversation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const CONTACT_DETAILS = [
  {
    label: "General enquiries",
    value: "hello@mkcsen.com",
    href: "mailto:hello@mkcsen.com",
  },
  {
    label: "Coverage",
    value: "Africa · Middle East",
  },
  {
    label: "Response",
    value: "Within 24 hours",
    note: "Business days, all time zones",
  },
] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="border-b hairline pt-32 pb-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Start a conversation —{" "}
                <span className="text-primary">we respond within 24 hours.</span>
              </>
            }
            description="Pilots, proposals, training, and partnerships across Cloud, Cybersecurity, Data, AI, and HPC."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <StatsRow />
      </section>

      <section className="section-light border-y hairline">
        <div className="container-page py-20 md:py-28">
          <ScrollReveal>
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-8">
                <div className="mb-10 max-w-xl">
                  <p className="eyebrow mb-4">Enquiry form</p>
                  <h2 className="display-lg font-medium">Tell us about your initiative.</h2>
                  <p className="mt-4 text-muted-foreground">
                    Share a few details and a consultant will follow up with next steps tailored to
                    your goals.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-lg border-t hairline pt-12"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xl font-semibold">Message received.</p>
                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            A member of our team will be in touch within 24 hours.
                          </p>
                          <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                          >
                            Send another message
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
                      className="space-y-8"
                    >
                      <div className="grid gap-8 sm:grid-cols-2">
                        <Field label="Name" required name="name" />
                        <Field label="Company" name="company" />
                      </div>
                      <div className="grid gap-8 sm:grid-cols-2">
                        <Field label="Email" required name="email" type="email" />
                        <Field label="Role" name="role" placeholder="e.g., CTO, IT Director" />
                      </div>
                      <SelectField label="Area of interest" required name="interest" />
                      <Field
                        label="Message"
                        required
                        name="message"
                        multiline
                        placeholder="Describe your goals, timeline, and stakeholders..."
                      />
                      <div className="flex flex-col gap-5 border-t hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                        >
                          Submit message
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                          Your details are used only to respond to this enquiry.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <p className="eyebrow mb-6">Direct contact</p>
                  <div className="space-y-0">
                    {CONTACT_DETAILS.map((item, index) => (
                      <div
                        key={item.label}
                        className={`py-6 ${index > 0 ? "border-t hairline" : ""}`}
                      >
                        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        {"href" in item ? (
                          <a
                            href={item.href}
                            className="mt-2 block text-lg font-medium transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-lg font-medium">{item.value}</p>
                        )}
                        {"note" in item && (
                          <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t hairline pt-8">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Training
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      For course registration, visit our training catalog.
                    </p>
                    <Link
                      to="/register"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                    >
                      View courses <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Global reach" title="Where we work." />
        <div className="mt-12 space-y-8">
          {(
            [
              { label: "Africa", note: "Emerging markets with explosive growth potential.", list: REGIONS.africa },
              { label: "Middle East", note: "Digital transformation hubs with ambitious vision.", list: REGIONS.middleEast },
            ] as const
          ).map((region, i) => (
            <motion.div
              key={region.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border hairline bg-surface/40 p-10"
            >
              <div className="relative z-10">
                <p className="eyebrow">{region.label}</p>
                <h3 className="mt-4 display-md font-medium">{region.label}</h3>
                <p className="mt-3 text-muted-foreground">{region.note}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {region.list.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border hairline bg-background/60 px-4 py-2 text-sm font-medium text-foreground/90"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        title="Prefer a structured pilot?"
        description="Tell us your priority area and we'll shape a focused two-week engagement with clear outcomes."
      />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  multiline,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}) {
  const inputClass =
    "w-full border-0 border-b hairline bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary rounded-none";

  return (
    <div>
      <label className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {multiline ? (
        <textarea
          required={required}
          name={name}
          rows={5}
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        required={required}
        name={name}
        defaultValue=""
        className="w-full appearance-none border-0 border-b hairline bg-transparent px-0 py-3 text-sm outline-none transition-colors focus:border-primary rounded-none"
      >
        <option value="" disabled>
          Select a practice area
        </option>
        {SERVICES.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
        <option value="training">Training & Enablement</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
