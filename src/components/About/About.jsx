"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, IndianRupee, ShieldCheck } from "lucide-react";
import Image from "next/image";
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

const objectives = [
  {
    title: "Prioritizing Customer Respect",
    icon: ShieldCheck,
    text: "It is our primary objective to respect our customers. In this way, they will feel valued and satisfied with our services. To achieve this objective, we train our drivers to do the same. Our cab drivers respect your time and speak politely. Not only our drivers, but the whole SKG Travel family keeps in mind that customer respect is our priority.",
  },
  {
    title: "Cost-Effective",
    icon: IndianRupee,
    text: "There are many cab services in the market competing with each other. We stand out by focusing on cost-effective service for our customers. We do not want our customers to spend excessively on travelling. Our plans and processes are designed to make every ride hassle-free, budget-friendly, and cost-effective.",
  },
  {
    title: "On-Time Services",
    icon: Clock3,
    text: "We provide timely responses and let customers book rides from anywhere, at any time. We provide punctual pick-up and drop services along with a comfortable ride to your destination. Once you book a ride with us, it is our responsibility to arrive at the agreed time and help you travel without delay.",
  },
  {
    title: "Best Service",
    icon: CheckCircle2,
    text: "Our main objective is to provide the best cab services. We continually improve the level of service we offer so our customers can trust SKG Travels. With our 24/7 telephone support team, we provide a quick, effective, end-to-end car rental solution and make every journey as convenient as possible.",
  },
];

export default function About() {
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
            Know who drives your journey
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">About SKG Travel</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Reliable cars, professional drivers, transparent fares, and thoughtful service for every
            journey.
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
              About Us
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="container py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideLeft}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl pb-3 pl-3 sm:pb-4 sm:pl-4"
          >
            <div className="absolute right-4 bottom-0 left-0 h-[92%] rounded-2xl bg-lime-500" />
            <Image
              src="/about-premium-cab.png"
              alt="Professional chauffeur welcoming travellers to a comfortable premium cab"
              width={1456}
              height={1054}
              priority
              sizes="(max-width: 1023px) calc(100vw - 2rem), 38vw"
              className="relative aspect-[4/3] w-full rounded-xl object-cover object-center shadow-xl sm:rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideRight}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
              Who we are
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
              Comfortable travel, built around you
            </h2>
            <div className="mt-5 space-y-4 text-justify text-sm leading-7 text-slate-600 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                SKG Travel is India&apos;s leading car rental service provider for locals and
                tourists, with a customer satisfaction rating of 96%. We offer a large variety of
                well-maintained, clean, and sanitized vehicles—including compact cars, small cabs,
                sedans, MUVs, and SUVs—at affordable and transparent fares. Our professional,
                well-mannered drivers have experience and knowledge of popular tourist destinations.
              </p>
              <p>
                We have vast experience serving locals and tourists with safe, reliable, and
                comfortable car rental solutions at the best rates. From vacations with family or
                friends to business meetings, we have a cab for every occasion. Whether you are
                staying in Mumbai or travelling from Mumbai to Shirdi, Goa, Pune, Surat, Nashik, or
                other Indian cities, you can enjoy all the benefits of our car rental service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={rise}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="container text-center"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
            Our promise
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
            Travel plans made simple
          </h2>
          <div className="mx-auto mt-6 max-w-5xl space-y-4 text-justify text-sm leading-7 text-slate-600 sm:mt-7 sm:space-y-5 sm:text-center sm:text-lg sm:leading-8">
            <p>
              We design economical tours and travel packages for every outstation requirement. If
              you want to make your trip memorable and comfortable, book your journey through our
              website or simply give us a call.
            </p>
            <p>
              SKG Travels works with the objective of providing the best cab services in Mumbai. Cab
              travel makes journeys easier during hectic hours, and our hassle-free service is
              available for short-distance trips as well as intercity travel from Mumbai.
            </p>
            <p>
              We are a customer-driven organization offering budget taxi rentals and cab booking in
              Mumbai, Pune, Nashik, and Shirdi in Maharashtra, as well as Goa, Surat, Ahmedabad,
              Baroda, Silvassa, and Vapi in Gujarat.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="container py-12 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={rise}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm sm:tracking-[0.25em]">
            Our objectives
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-4xl">
            What matters on every ride
          </h2>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {objectives.map(({ title, icon: Icon, text }, index) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={rise}
              transition={{
                duration: 0.7,
                delay: 0.18 + (index % 2) * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="rounded-br-3xl border border-lime-200 bg-white p-5 text-center shadow-sm sm:p-7 md:text-left lg:p-8"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime-100 text-lime-600 md:mx-0">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-800 sm:mt-5 sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={rise}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-12 text-center text-white sm:py-14"
      >
        <div className="container">
          <h2 className="text-2xl font-extrabold sm:text-4xl">Ready for a comfortable journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Call us now and we will be happy to help plan a wonderful trip around your requirements
            and budget.
          </p>
          <a href="tel:+917506222999" className="promo-book-button mt-6 sm:mt-7">
            CALL +91 75062 22999
          </a>
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
