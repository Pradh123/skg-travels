"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const plans = [
  { id: "2-20", label: "2 hrs | 20 km", prices: [900, 1050, 1300, 1500, 1800] },
  { id: "4-40", label: "4 hrs | 40 km", prices: [1300, 1450, 1750, 2000, 2400] },
  { id: "6-60", label: "6 hrs | 60 km", prices: [1700, 1800, 2200, 2450, 3050] },
  { id: "8-80", label: "8 hrs | 80 km", prices: [2100, 2205, 2625, 2940, 3675] },
  { id: "10-100", label: "10 hrs | 100 km", prices: [2500, 2650, 3150, 3550, 4400] },
  { id: "12-120", label: "12 hrs | 120 km", prices: [2900, 3050, 3650, 4100, 5100] },
];

const cars = [
  { name: "Mini", models: "Ritz, Indica, WagonR, Grand i10", image: "/car-mini.png" },
  { name: "Sedan", models: "Amaze, Dzire, Etios, Xcent or Zest", image: "/car-sedan.jpeg" },
  { name: "SUV M", models: "Ertiga, Xylo, Njoy or similar", image: "/car-ertiga.png" },
  { name: "SUV", models: "Toyota Innova, Tavera or similar", image: "/car-premium-suv.jpeg" },
  {
    name: "Premium SUV",
    models: "Innova Crysta, Tata Hexa or similar",
    image: "/car-innova-crysta.png",
  },
];

const rise = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } };

export default function LocalRental() {
  const [selectedPlan, setSelectedPlan] = useState(3);
  const [expandedCar, setExpandedCar] = useState(null);
  const plan = plans[selectedPlan];

  return (
    <main className="overflow-x-clip bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-12 text-white sm:py-16 lg:py-20">
        <div className="absolute -top-24 -right-16 -z-10 h-64 w-64 rounded-full border-[44px] border-white/10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rise}
          className="container text-center"
        >
          <p className="text-xs font-bold tracking-[0.24em] text-lime-200 uppercase sm:text-sm">
            Flexible city travel
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Local Car Rental</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-lg">
            Reserve a clean, chauffeur-driven cab by the hour and travel around the city at your
            pace.
          </p>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex justify-center gap-2 text-xs sm:text-sm"
          >
            <Link href="/" className="font-semibold hover:text-lime-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-lime-200" aria-current="page">
              Local Rental
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="bg-lime-50/60 py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm">
              Choose your package
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-5xl">Rental Plan</h2>

            <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200 sm:inline-flex sm:grid-cols-none sm:overflow-x-auto sm:p-1.5">
              {plans.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPlan(index)}
                  className={`min-h-11 cursor-pointer rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap transition sm:px-4 sm:text-sm lg:px-5 lg:text-base ${
                    selectedPlan === index
                      ? "bg-lime-500 text-white shadow-sm"
                      : "text-slate-600 hover:bg-lime-50 hover:text-lime-700"
                  }`}
                  aria-pressed={selectedPlan === index}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-5 sm:mt-10 sm:gap-6">
            {cars.map((car, index) => (
              <motion.article
                key={car.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={rise}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className="overflow-hidden rounded-br-3xl border border-lime-200 bg-white shadow-sm transition hover:border-lime-300 hover:shadow-lg"
              >
                <div className="grid items-center gap-5 p-5 text-center sm:p-6 md:grid-cols-[1.1fr_1fr_.45fr_auto] md:gap-7 md:text-left lg:px-8">
                  <div className="relative mx-auto h-36 w-full max-w-xs sm:h-44 md:mx-0 md:max-w-sm lg:h-48">
                    <Image
                      src={car.image}
                      alt={`${car.name} local rental cab`}
                      fill
                      sizes="(max-width: 767px) 320px, 360px"
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                      {car.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                      {car.models}
                    </p>
                    <button
                      type="button"
                      onClick={() => setExpandedCar(expandedCar === car.name ? null : car.name)}
                      className="mt-2 cursor-pointer text-sm font-bold text-cyan-600 transition hover:text-lime-600"
                      aria-expanded={expandedCar === car.name}
                    >
                      {expandedCar === car.name ? "View Less" : "View More"}
                    </button>
                  </div>

                  <p className="border-y border-slate-100 py-4 text-2xl font-extrabold text-lime-600 md:border-0 md:py-0">
                    ₹{plan.prices[index].toLocaleString("en-IN")}
                  </p>

                  <Link
                    href="/#book"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-lime-500 px-6 py-3 text-base font-extrabold whitespace-nowrap text-white transition hover:bg-lime-600 md:w-auto"
                  >
                    Book Now
                  </Link>
                </div>

                {expandedCar === car.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-lime-100 bg-lime-50/50 px-5 py-4 text-center text-sm leading-6 text-slate-600 sm:px-8 md:text-left"
                  >
                    {plan.label} package includes the base distance, chauffeur allowance,
                    air-conditioned cab, and local city travel. Toll, parking, and extra kilometres
                    are charged separately.
                  </motion.div>
                )}
              </motion.article>
            ))}
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
