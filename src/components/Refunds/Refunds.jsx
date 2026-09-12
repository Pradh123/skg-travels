"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, CheckCircle2, Clock3, Mail, Phone, RotateCcw } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const viewport = { once: false, amount: 0.16 };
const rise = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const cancellationRules = [
  "For multi-day trips, the charge for the first day will be deducted from the total amount, and the remaining amount will be refunded to you.",
  "For single-day trips or airport transfers, no refund will be issued.",
  "For airport transfers specifically, no cancellation charges will apply if the cancellation is made at least 2 hours prior to the scheduled pick-up time.",
];

const refundSteps = [
  {
    icon: CheckCircle2,
    title: "Eligibility confirmed",
    text: "Your request is checked against the cancellation policy.",
  },
  {
    icon: RotateCcw,
    title: "Refund processed",
    text: "The eligible refund is initiated through the applicable payment method.",
  },
  {
    icon: Clock3,
    title: "Amount received",
    text: "The refund is expected within 5–7 working days.",
  },
];

export default function Refunds() {
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
            <RotateCcw size={28} />
          </span>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
            Booking support
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">
            Cancellation &amp; Refunds
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Clear cancellation terms and a simple refund process for eligible advance bookings.
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
              Refunds
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="container py-12 sm:py-16 lg:py-20">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={rise}
          transition={{ duration: 0.68, delay: 0.15, ease: "easeOut" }}
          className="mx-auto max-w-5xl rounded-br-[2rem] border border-lime-200 bg-lime-50 p-5 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-100 text-lime-600">
              <CalendarCheck2 size={24} />
            </span>
            <p className="mt-5 text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Policy details
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
              Cancellation and Returns
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-justify text-sm leading-7 text-slate-600 sm:text-center sm:text-base sm:leading-8">
              You have the option to cancel your booking up to 3 Days before the scheduled journey
              without incurring any cancellation charges for advance booking services. However, if
              you request cancellation or modification of the trip within 48 hours of the pick-up
              time, the following rules will apply:
            </p>
          </div>

          <ul className="mx-auto mt-7 grid max-w-4xl gap-4 sm:mt-8">
            {cancellationRules.map((rule, index) => (
              <motion.li
                key={rule}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={rise}
                transition={{ duration: 0.6, delay: 0.18 + index * 0.1, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-xl border border-lime-200 bg-white p-4 text-sm leading-7 text-slate-600 sm:p-5 sm:text-base"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime-500 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-left">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={rise}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Refund timeline
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">Refunds</h2>
            <p className="mt-5 text-justify text-sm leading-7 text-slate-600 sm:text-center sm:text-base sm:leading-8">
              If you qualify for a refund according to the &quot;Cancellation and Returns&quot;
              policy outlined above, you can expect to receive the refund within 5–7 working days.
            </p>
          </motion.div>

          <div className="mx-auto mt-9 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
            {refundSteps.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={rise}
                transition={{ duration: 0.65, delay: 0.18 + index * 0.12, ease: "easeOut" }}
                className="rounded-br-3xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-7"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-100 text-lime-600">
                  <Icon size={23} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={rise}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-8 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 p-5 text-center text-white sm:p-7 md:flex-row md:text-left"
          >
            <div>
              <h3 className="text-xl font-bold">Need help with your refund?</h3>
              <p className="mt-2 text-sm leading-6 text-white/85">
                If you encounter any problems, please contact our support team.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <a
                href="mailto:support@skgtravel.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-3 font-semibold break-all transition hover:bg-white hover:text-teal-700"
              >
                <Mail size={17} /> support@skgtravel.com
              </a>
              <a
                href="tel:+917506222999"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-teal-700 transition hover:bg-lime-100"
              >
                <Phone size={17} /> 7506222999
              </a>
            </div>
          </motion.div>
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
