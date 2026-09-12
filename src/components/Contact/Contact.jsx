"use client";

import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const viewport = { once: false, amount: 0.18 };
const rise = {
  hidden: { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0 },
};
const slideLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0 },
};
const slideRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0 },
};

const serviceCities = ["Mumbai", "Pune", "Gujarat", "Nashik"];

export default function Contact() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-14 text-white sm:py-20 lg:py-24">
        <div className="absolute -top-20 -right-20 -z-10 h-52 w-52 rounded-full border-[36px] border-white/10 sm:-top-28 sm:h-80 sm:w-80 sm:border-[55px]" />
        <div className="absolute -bottom-36 left-[12%] -z-10 h-72 w-72 rounded-full bg-lime-300/15 blur-2xl" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rise}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="container text-center"
        >
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
            We are here to help
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Have a question or need help planning a ride? Our travel team is just a call or message
            away.
          </p>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex justify-center gap-2 text-xs sm:mt-7 sm:text-sm"
          >
            <Link href="/" className="font-semibold transition hover:text-lime-200">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-lime-200" aria-current="page">
              Contact Us
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="container py-12 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={rise}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
            Get in touch
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
            Let&apos;s plan your next journey
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            If your query has not been answered on our website, call us on +91 75062 22999 or send
            us your details below.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {[
            { icon: Phone, label: "Call us", value: "+91 75062 22999", href: "tel:+917506222999" },
            {
              icon: Mail,
              label: "Email us",
              value: "support@skgtravels.in",
              href: "mailto:support@skgtravels.in",
            },
            { icon: Clock3, label: "Support", value: "Available 24 × 7" },
          ].map(({ icon: Icon, label, value, href }, index) => (
            <motion.article
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={rise}
              transition={{ duration: 0.65, delay: 0.16 + index * 0.1, ease: "easeOut" }}
              className="rounded-br-3xl border border-lime-200 bg-white p-5 text-center shadow-sm sm:p-6"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-100 text-lime-600">
                <Icon size={23} />
              </span>
              <h3 className="mt-4 font-bold text-slate-900">{label}</h3>
              {href ? (
                <a
                  href={href}
                  className="mt-2 block text-sm break-words text-slate-600 transition hover:text-lime-600"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-slate-600">{value}</p>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideLeft}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="rounded-br-[2rem] border border-lime-200 bg-lime-50 p-5 text-center sm:p-8 sm:text-left lg:p-10"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Visit our office
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Head Office, Mumbai
            </h2>
            <div className="mt-6 flex flex-col items-center gap-3 border-t border-lime-200 pt-6 text-sm leading-7 text-slate-700 sm:flex-row sm:items-start sm:text-base">
              <MapPin className="mt-1 shrink-0 text-lime-600" size={22} />
              <address className="not-italic">
                <strong className="text-slate-950">SKG Travels</strong>
                <br />
                Office No. 170, 1st Floor, Evershine Mall, Link Road, Chincholi Bunder, Malad
                (West), Mumbai – 400064, India.
              </address>
            </div>
            <div className="mt-8">
              <p className="text-sm font-bold text-slate-900">Our service locations</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start sm:gap-3">
                {serviceCities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 rounded-full border border-lime-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 sm:px-4 sm:text-sm"
                  >
                    <MapPin size={15} className="text-lime-600" /> {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            onSubmit={(event) => event.preventDefault()}
            className="rounded-br-[2rem] border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-8 md:mx-auto md:w-full md:max-w-3xl lg:max-w-none lg:p-10 lg:text-left"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Send an enquiry
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              How can we help?
            </h2>
            <div className="mt-7 grid gap-5 text-left sm:grid-cols-2">
              <ContactField label="Name" placeholder="Your name" />
              <ContactField label="Mobile" placeholder="Mobile number" type="tel" />
              <ContactField
                label="Email"
                placeholder="Email address"
                type="email"
                className="sm:col-span-2"
              />
              <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                Message
                <textarea
                  rows={5}
                  placeholder="Tell us about your travel requirement"
                  className="mt-2 block min-h-32 w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-base font-normal transition outline-none placeholder:text-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 min-h-12 w-full cursor-pointer rounded-lg bg-lime-500 px-6 py-3 font-bold text-white transition hover:bg-lime-600 sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </section>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        href="https://wa.me/917506222999"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-float fixed right-8 bottom-20 z-20 grid h-14 w-14 place-items-center text-green-500 sm:right-10 sm:bottom-24"
      >
        <FaWhatsapp size={40} />
      </motion.a>
    </main>
  );
}

function ContactField({ label, placeholder, type = "text", className = "" }) {
  return (
    <label className={`text-sm font-semibold text-slate-700 ${className}`}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 block min-h-12 w-full rounded-lg border border-slate-200 px-4 py-3 text-base font-normal transition outline-none placeholder:text-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15"
      />
    </label>
  );
}
