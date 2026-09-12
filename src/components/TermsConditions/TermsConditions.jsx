"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Scale } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import LegalSidebarNav from "@/components/LegalSidebarNav/LegalSidebarNav";

const viewport = { once: false, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

const terms = [
  "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
  "This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: Location.",
  "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
  "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.",
  "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
  "All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence. From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
  "Your use of this website and any dispute arising out of such use of the website is subject to the laws of India. Specific offers might have additional Terms & Conditions which the user has to comply with in case they choose to avail that offer.",
];

const cancellationRules = [
  "For multi-day trips, the charge for the first day will be deducted from the total amount, and the remaining amount will be refunded to you.",
  "For single-day trips or airport transfers, no refund will be issued.",
  "For airport transfers specifically, no cancellation charges will apply if the cancellation is made at least 2 hours prior to the scheduled pick-up time.",
];

const navItems = [
  { title: "Introduction", id: "introduction" },
  { title: "Terms of Use", id: "terms-of-use" },
  { title: "Cancellation and Returns", id: "cancellation-and-returns" },
];

export default function TermsConditions() {
  return (
    <main className="overflow-x-clip bg-white text-slate-900">
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
          <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <Scale size={28} />
          </span>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
            Please read carefully
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            The terms governing your use of our website, services, bookings, cancellations, and
            returns.
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
              Terms &amp; Conditions
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={rise}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="rounded-br-3xl border border-lime-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6"
          >
            <div className="flex items-center justify-center gap-2 text-center lg:justify-start lg:text-left">
              <ClipboardCheck size={20} className="text-lime-600" />
              <h2 className="font-bold text-slate-950">On this page</h2>
            </div>
            <LegalSidebarNav
              sections={navItems}
              sectionLabel="Terms sections"
              columns="sm:grid-cols-3 lg:grid-cols-1"
            />
          </motion.aside>

          <div className="space-y-5 sm:space-y-6">
            <PolicyCard id="introduction" title="Introduction" delay={0.14}>
              <p>
                Thank you for visiting our website. By continuing to browse and use this site, you
                agree to comply with and be bound by the following terms and conditions of use,
                which, together with our privacy policy, govern our relationship with you in
                relation to this website. If you do not agree with any part of these terms and
                conditions, please refrain from using our website.
              </p>
            </PolicyCard>

            <PolicyCard id="terms-of-use" title="Terms of Use." delay={0.22}>
              <p className="mb-5 font-semibold text-slate-700">
                The use of this website is subject to the following terms of use:
              </p>
              <ol className="space-y-4">
                {terms.map((term, index) => (
                  <li key={term} className="flex items-start gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime-100 text-xs font-bold text-lime-700">
                      {index + 1}
                    </span>
                    <span>{term}</span>
                  </li>
                ))}
              </ol>
            </PolicyCard>

            <PolicyCard id="cancellation-and-returns" title="Cancellation and Returns" delay={0.14}>
              <p>
                You have the option to cancel your booking up to 3 Days before the scheduled journey
                without incurring any cancellation charges for advance booking services. However, if
                you request cancellation or modification of the trip within 48 hours of the pick-up
                time, the following rules will apply:
              </p>
              <ul className="mt-5 space-y-4">
                {cancellationRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-lime-500" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </PolicyCard>
          </div>
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

function PolicyCard({ id, title, delay, children }) {
  return (
    <motion.article
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={rise}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className="scroll-mt-6 rounded-br-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-lime-500" />
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">{title}</h2>
          <div className="mt-4 text-justify text-sm leading-7 text-slate-600 sm:text-left sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
