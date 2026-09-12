"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPinned, Route } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { packageRoutes } from "@/data/packageRoutes";

const viewport = { once: false, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

export default function Packages() {
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
            <MapPinned size={28} />
          </span>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
            Comfortable intercity travel
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">Our Packages</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Choose from our most popular one-way cab routes and enjoy a safe, reliable journey at a
            transparent fare.
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
              Packages
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={rise}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Popular routes
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
              Pick a route and book your ride
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Professional drivers, clean cars, and dependable door-to-door service for every trip.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {packageRoutes.map((route, index) => (
              <motion.article
                key={route.slug}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={rise}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + (index % 4) * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Link
                  href={`/packages/${route.slug}`}
                  className="flex h-full min-h-32 items-center gap-4 rounded-br-3xl border border-t-2 border-lime-200 border-t-lime-500 bg-white p-5 shadow-sm transition duration-200 hover:border-lime-300 hover:shadow-lg sm:min-h-36 sm:p-6"
                  aria-label={`View ${route.title}`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime-100 text-lime-600 transition group-hover:bg-lime-500 group-hover:text-white">
                    <Route size={20} />
                  </span>
                  <span className="flex flex-1 items-center gap-2">
                    <span className="text-base leading-6 font-semibold text-slate-800 transition group-hover:text-lime-700 sm:text-lg">
                      {route.title}
                    </span>
                    <ArrowRight
                      className="ml-auto shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-lime-600"
                      size={18}
                    />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={rise}
        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        className="bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-12 text-center text-white sm:py-14"
      >
        <div className="container">
          <h2 className="text-2xl font-extrabold sm:text-4xl">Can&apos;t find your route?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Tell us where you want to go and we will create a comfortable package for your journey.
          </p>
          <Link href="/contact" className="promo-book-button mt-6 sm:mt-7">
            GET A CUSTOM QUOTE
          </Link>
        </div>
      </motion.section>

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
