"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const cars = [
  {
    price: 10,
    models: "Ritz, Indica, Swift, Santro etc.",
    seats: "5 seater (4 Person + 1 Driver)",
    image: "/car-mini.png",
  },
  {
    price: 10,
    models: "Suzuki WagonR, Hatchbacks etc.",
    seats: "5 seater (4 Person + 1 Driver)",
    image: "/cars/wagonr.png",
  },
  {
    price: 11,
    models: "Swift Dzire",
    seats: "5 seater (4 Person + 1 Driver)",
    image: "/cars/dzire.png",
  },
  {
    price: 12,
    models: "Dzire, Etios, Xcent, Amaze etc.",
    seats: "5 seater (4 Person + 1 Driver)",
    image: "/cars/etios.png",
  },
  {
    price: 14,
    models: "Suzuki Ertiga",
    seats: "8 seater (6 Person + 1 Driver)",
    image: "/car-ertiga.png",
  },
  {
    price: 145,
    models: "Hyundai City, Mercedes Benz 200, Audi, BMW Series, Toyota Camry",
    seats: "4 = 1",
    image: "/cars/luxury-sedan.png",
  },
  {
    price: 15,
    models: "TUV 300",
    seats: "7 seater (6 Person + 1 Driver)",
    image: "/cars/tuv300.png",
  },
  {
    price: 15,
    models: "Mahindra Xylo, Enjoy, Ertiga.",
    seats: "7 seater (6 Person + 1 Driver)",
    image: "/cars/xylo.png",
  },
  {
    price: 15,
    models: "Toyota Innova",
    seats: "7 seater (6 Person + 1 Driver)",
    image: "/cars/innova.png",
  },
  {
    price: 18,
    models: "Innova Crysta.",
    seats: "7 seater (6 Person + 1 Driver)",
    image: "/car-innova-crysta.png",
  },
  {
    price: 24,
    models: "Bus",
    seats: "13 seater (12 Person + 1 Driver)",
    image: "/cars/tempo-traveller.png",
  },
  {
    price: 30,
    models: "TT bus",
    seats: "18 seater (16 Person + 1 Driver)",
    image: "/cars/tempo-traveller.png",
  },
  {
    price: 40,
    models: "Toyota Fortuner",
    seats: "7 seater (6 Person + 1 Driver)",
    image: "/cars/fortuner.png",
  },
];

export default function Cars() {
  return (
    <main className="overflow-x-clip bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-12 text-white sm:py-16 lg:py-20">
        <div className="absolute -top-24 -right-16 -z-10 h-64 w-64 rounded-full border-[44px] border-white/10" />
        <div className="absolute -bottom-28 -left-20 -z-10 h-60 w-60 rounded-full border-[38px] border-white/10" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="container text-center"
        >
          <p className="text-xs font-bold tracking-[0.24em] text-lime-200 uppercase sm:text-sm">
            Travel in comfort
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Cars For Outstation Trips</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-lg">
            Choose from clean hatchbacks, comfortable sedans, spacious SUVs and tempo travellers for
            every journey.
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
              Cars
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="bg-lime-50/60 px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm">
              Our fleet & pricing
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-5xl">
              Choose Your Ride
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Transparent per-kilometre fares with professional drivers and well-maintained
              vehicles.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:mt-12 sm:gap-6">
            {cars.map((car, index) => (
              <motion.article
                key={`${car.models}-${car.price}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.16) }}
                className="group grid items-center gap-5 overflow-hidden rounded-br-3xl border border-lime-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-lg sm:p-6 md:grid-cols-[280px_1fr_auto] md:gap-9 md:p-7 md:text-left lg:px-8"
              >
                <div className="relative mx-auto h-40 w-full max-w-[280px] overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-lime-50 p-2 md:mx-0">
                  <Image
                    src={car.image}
                    alt={car.models}
                    fill
                    sizes="280px"
                    className="object-contain p-2 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-sm leading-7 text-slate-600 sm:text-base">
                  <h3 className="text-2xl font-extrabold text-lime-600">
                    ₹{car.price} <span className="text-base font-bold">Per Km</span>
                  </h3>
                  <p className="mt-1 font-semibold text-slate-800">{car.models}</p>
                  <p>{car.seats}</p>
                  <p className="text-sm text-slate-500">Tolls and state tax excluded</p>
                </div>
                <Link
                  href="/#book"
                  className="mx-auto inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-lime-500 px-6 py-3 font-extrabold whitespace-nowrap text-white shadow-sm transition hover:bg-lime-600 hover:shadow-md md:mx-0 md:w-auto"
                >
                  Book Now
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/917506222999"
        aria-label="Chat with us on WhatsApp"
        className="whatsapp-float fixed bottom-8 left-5 z-20 grid h-14 w-14 place-items-center rounded-full bg-white/80 text-green-500 shadow-lg sm:left-8"
      >
        <FaWhatsapp size={40} />
      </a>
    </main>
  );
}
