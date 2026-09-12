"use client";
import { motion } from "framer-motion";
import { CalendarDays, Car, Check, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const cars = [
  {
    name: "Mini",
    price: "10.00",
    detail: "Ritz, Indica, Hatch Bags.",
    image: "/car-mini.png",
  },
  {
    name: "Sedan",
    price: "11.00",
    detail: "Dezire, Etios, Xcent, Amaze etc.",
    image: "/car-sedan.jpeg",
  },
  {
    name: "Premium SUV's",
    price: "18.00",
    detail: "Mahindra SUV, Innova, Tata Safari.",
    image: "/car-premium-suv.jpeg",
  },
];
const features = [
  "Cab / Taxi will arrive on time (Clean and Well-Maintained)",
  "Fares will be fully transparent with no hidden charges.",
  "Driver will be well-behaved and professional in nature",
  "24x7 support team, any-time whenever you need us.",
];
const benefits = [
  [
    "Expertise and Experience",
    "With over 10 years of experience in the travel industry, our seasoned travel experts curate every journey with care and insider knowledge.",
  ],
  [
    "Commitment to Quality",
    "We are committed to exceptional quality in every aspect of your trip, working with trusted partners who share our dedication to excellence.",
  ],
  [
    "Personalized Service",
    "Every traveller is unique. Our dedicated consultants take the time to understand your needs and tailor a journey that exceeds expectations.",
  ],
  [
    "Extensive Destination Portfolio",
    "From tropical islands to bustling cityscapes, our destination portfolio is vast, diverse, and full of memorable possibilities.",
  ],
  [
    "Seamless Travel Planning",
    "From transport and accommodation to local activities, we take care of every detail so you can focus on enjoying the journey.",
  ],
  [
    "Travel with Confidence",
    "Your safety and peace of mind are our top priorities, with dependable service from your first call to your final drop-off.",
  ],
];
const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const zoomReveal = {
  hidden: { opacity: 0, scale: 0.72 },
  visible: { opacity: 1, scale: 1 },
};
const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};
const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};
const riseReveal = {
  hidden: { opacity: 0, y: 65 },
  visible: { opacity: 1, y: 0 },
};
const replayViewport = { once: false, amount: 0.2 };
export default function Home() {
  const [trip, setTrip] = useState("One way");
  return (
    <main id="home" className="overflow-hidden bg-white text-slate-900">
      {/* Landing hero: booking form on the left and booking CTAs on the right. */}
      <section className="bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600">
        <div className="container grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
          <motion.form
            id="book"
            onSubmit={(e) => e.preventDefault()}
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.55 }}
            className="rounded-xl border-t-4 border-lime-500 bg-white p-4 shadow-2xl sm:p-7"
          >
            <h2 className="mb-8 text-xl font-bold">BOOK RIDE</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Name" />
              <Field label="Mobile" placeholder="Mobile No" />
            </div>
            <div className="my-7 flex flex-wrap gap-2">
              {["One way", "Round trip", "Local - Rental", "City To City"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTrip(t)}
                  className={`px-4 py-2 text-sm font-medium transition ${trip === t ? "bg-lime-500 text-white" : "hover:bg-lime-50"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="From" placeholder="Enter a location" icon={<MapPin size={17} />} />
              <Field label="To" placeholder="Enter a location" icon={<MapPin size={17} />} />
              <Field
                label="Pickup Date"
                placeholder="dd-mm-yyyy"
                icon={<CalendarDays size={17} />}
              />
              <Field label="Pickup Time" placeholder="--:--" icon={<Clock3 size={17} />} />
            </div>
            <div className="mt-8 text-right">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="promo-book-button form-outline-button cursor-pointer bg-transparent font-bold"
              >
                SUBMIT
              </motion.button>
            </div>
          </motion.form>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="self-center text-center text-white xl:text-left"
          >
            <p className="mb-3 text-lg tracking-wide sm:text-2xl">Travel At Affordable Price</p>
            <h1 className="mx-auto max-w-xl text-4xl leading-[1.08] font-extrabold sm:text-[54px] xl:mx-0 xl:text-[66px]">
              With Most Comfortable Cars
            </h1>
            <p className="mt-7 text-lg">Upto 12% Discount On Advance Booking</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5 xl:justify-start">
              <Button>BOOK NOW</Button>
              <Button>CITY TO CITY OFFERS</Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Service cards: available car types and starting prices. */}
      <section id="services" className="container py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {cars.map((car, i) => (
            <motion.article
              key={car.name}
              initial="hidden"
              whileInView="visible"
              viewport={replayViewport}
              variants={zoomReveal}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="border border-slate-200 bg-white text-center shadow-sm"
            >
              <div className="relative h-44 w-full bg-white sm:h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  className="object-contain px-4 pt-4 sm:px-6 sm:pt-5"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-2xl font-bold text-slate-900">{car.name}</h2>
                <p className="mt-4 text-lg font-semibold">
                  Starting From ₹{car.price}
                  <span className="text-lime-600">/Km</span>
                </p>
                <p className="mt-4 flex justify-center gap-1 text-sm text-slate-500">
                  <Car size={17} className="text-lime-500" />
                  {car.detail}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      {/* About section: SKG introduction, key promises, and feature image. */}
      <section className="container grid gap-10 py-14 sm:gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={slideFromLeft}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="text-center xl:text-left"
        >
          <p className="text-sm font-bold tracking-[.25em] text-lime-600 uppercase">
            About SKG Travel
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Welcome To SKG Travel
          </h2>
          <p className="mt-6 text-justify leading-8 text-slate-500">
            Easy & quick taxi car rental and cab booking solution. SKG Travel is India&apos;s
            leading car rental service provider, offering top-class car & cab hire solutions at the
            most competitive prices. From local sightseeing to long holiday plans, we make every
            trip comfortable, safe, and effortless.
          </p>
          <h3 className="mt-9 text-3xl font-bold">Trust That</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <p key={f} className="flex gap-2 text-left text-slate-600">
                <Check className="mt-1 shrink-0 rounded bg-lime-500 p-0.5 text-white" size={20} />
                {f}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={replayViewport}
          variants={slideFromRight}
          transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
          src="/about-red-audi.png"
          alt="Red Audi ABT sedan"
          className="mx-auto h-auto w-full max-w-[680px] object-contain"
        />
      </section>
      {/* Benefits section: reasons to choose the service. */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={slideFromLeft}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mb-10 text-center text-3xl font-medium text-slate-600 sm:text-4xl"
          >
            Car Rentals with SKG Travel
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([title, text], i) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={replayViewport}
                variants={riseReveal}
                transition={{
                  duration: 0.7,
                  delay: 0.18 + (i % 3) * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="rounded-br-3xl border border-lime-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-2xl font-medium text-slate-600 sm:text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-slate-500 sm:mt-5 sm:text-lg sm:leading-8">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Promo banner: local SKG car and tunnel images with angled lime/white panels. */}
      <section className="promo-section">
        <div className="promo-content container grid xl:grid-cols-2">
          {/* The intrinsic dimensions preserve the 500 × 266 car proportion. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={slideFromLeft}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="promo-box-left"
          >
            <Image
              src="/promo-car.jpg"
              alt="White Toyota Camry cab"
              width={500}
              height={266}
              className="promo-car-image relative z-10 bg-white object-contain"
            />
          </motion.div>
          {/* Right column: 24×7 availability message and booking link. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={replayViewport}
            variants={slideFromRight}
            transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
            className="promo-box-right"
          >
            <h2>Do You Want To Ride With Us? We Are Always Ready To Pick You Up - 24×7</h2>
            <a href="#book" className="promo-book-button">
              BOOK NOW
            </a>
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
/* Reusable form field used in the booking form. */
function Field({ label, placeholder, icon }) {
  return (
    <label className="text-sm font-medium">
      {label}
      <span className="relative mt-2 block">
        <input
          placeholder={placeholder}
          className="w-full border border-slate-200 border-b-lime-500 px-4 py-3 pr-10 transition outline-none focus:border-lime-500"
        />
        {icon && <span className="absolute top-3 right-3 text-slate-500">{icon}</span>}
      </span>
    </label>
  );
}
/* Reusable animated outline button used in the hero area. */
function Button({ children }) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className="promo-book-button cursor-pointer bg-transparent"
    >
      {children}
    </motion.button>
  );
}
