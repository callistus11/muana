import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

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

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="border-b hairline pt-32 pb-16">
        <div className="container-page">
          <SectionHeader
            align="center"
            eyebrow="Contact"
            title={<>Contact Mauna Kea Consulting.</>}
            description="Use this form for formal requests — pilots, proposals, training, and partnerships."
          />
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 md:col-span-5"
          >
            <div>
              <p className="eyebrow mb-4">Let's start a conversation</p>
              <h2 className="display-xl font-medium leading-[1.15]">
                Whether you're modernizing cloud, strengthening security, or deploying AI — we're ready to help.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email us</p>
                  <p className="mt-1 text-sm text-muted-foreground">hello@mkcsen.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Our regions</p>
                  <p className="mt-1 text-sm text-muted-foreground">Africa · Middle East</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Response time</p>
                  <p className="mt-1 text-sm text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="border-t hairline pt-8">
              <p className="text-base font-semibold">Prefer to talk directly?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If you already know the topic and stakeholders, book time with an expert.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book time with an expert <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <p className="display-lg font-medium">Thanks — message received.</p>
                  <p className="mt-3 text-lg text-muted-foreground">
                    A member of our team will get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" required name="name" />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" required name="email" type="email" />
                  <Field label="Role" name="role" />
                </div>
                <Field
                  label="Area of interest"
                  required
                  name="interest"
                  placeholder="e.g., Cloud Migration, Cybersecurity, AI Implementation"
                />
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border hairline bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex items-center justify-between border-t hairline pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                  >
                    Submit message
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    We use your details only to follow up on this enquiry.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border hairline bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
