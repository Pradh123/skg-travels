"use client";

import { motion } from "framer-motion";
import { Car, Check, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const viewport = { once: true, amount: 0.16 };
const rise = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function CityLanding({ city }) {
  const { hero, about, welcome, promo, fleet } = city;

  return (
    <main className="overflow-x-clip bg-white text-slate-900">
      {/* Shared hero: the copy changes from city data while its visual treatment stays consistent. */}
      <section className="city-hero relative isolate min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[660px]">
        <Image
          src={hero.image}
          alt={`Comfortable car rental service in ${city.name}`}
          fill
          priority
          sizes="100vw"
          className="city-hero-image -z-20"
          style={{
            "--hero-position-mobile": hero.imagePosition.mobile,
            "--hero-position-tablet": hero.imagePosition.tablet,
            "--hero-position-desktop": hero.imagePosition.desktop,
          }}
        />
        <div className="city-hero-overlay absolute inset-0 -z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rise}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="container flex min-h-[560px] items-start pt-10 sm:min-h-[620px] sm:pt-14 lg:min-h-[660px] lg:items-center lg:py-16"
        >
          <div className="max-w-[19rem] text-white sm:max-w-md lg:max-w-xl">
            <p className="text-lg font-medium tracking-wide sm:text-2xl lg:text-3xl">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl leading-[1.08] font-extrabold sm:mt-4 sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/90 sm:text-base">
              {hero.description}
            </p>
            <Link href={hero.buttonHref} className="promo-book-button mt-7">
              {hero.buttonLabel}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About block mirrors the supplied two-column city layout. */}
      <section className="container py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={rise}>
            <p className="text-lg font-bold text-lime-600 sm:text-xl">{about.eyebrow}</p>
            <h2 className="mt-2 text-3xl leading-tight font-extrabold text-slate-950 sm:text-5xl">
              {about.title}
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
              {about.features.map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded bg-lime-500 text-white">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
            className={
              welcome.image
                ? "flex items-center justify-center bg-white"
                : "rounded-br-[3rem] bg-gradient-to-br from-orange-50 to-lime-50 p-8 text-center shadow-sm ring-1 ring-lime-100 sm:p-12"
            }
          >
            {welcome.image ? (
              <div className="relative aspect-[4/3] w-full max-w-2xl">
                <Image
                  src={welcome.image}
                  alt={welcome.imageAlt}
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 38vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <>
                <MapPin className="mx-auto text-orange-500" size={72} strokeWidth={1.6} />
                <p className="mt-5 text-sm font-bold tracking-[.2em] text-lime-600 uppercase">
                  {welcome.eyebrow}
                </p>
                <p className="mt-2 text-4xl font-extrabold text-slate-950 sm:text-5xl">
                  {welcome.title}
                </p>
                <p className="mt-4 text-lg text-slate-600">{welcome.tagline}</p>
              </>
            )}
          </motion.aside>
        </div>
      </section>

      {/* Existing shared promo artwork keeps this page aligned with the current SKG theme. */}
      <section className="promo-section overflow-hidden">
        <div className="container grid xl:grid-cols-2">
          <div className="promo-box-left">
            <Image
              src={promo.carImage}
              alt="SKG rental sedan"
              width={500}
              height={266}
              className="promo-car-image mx-auto object-cover xl:mx-0"
            />
          </div>
          <div className="promo-box-right">
            <h2>{promo.title}</h2>
            <Link href={promo.buttonHref} className="promo-book-button">
              {promo.buttonLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Route cards are generated from the active city's data. */}
      <section className="container py-14 sm:py-20 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={rise}
          className="text-center"
        >
          <p className="text-lg font-bold text-lime-600">{fleet.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-5xl">{fleet.title}</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {fleet.routes.map((route, index) => (
            <motion.article
              key={route.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={rise}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
              className="border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl sm:p-8"
            >
              <div className="relative mx-auto h-36 w-full max-w-xs">
                <Image
                  src={route.image}
                  alt={`${route.title} cab`}
                  fill
                  sizes="320px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-950 sm:text-2xl">
                {route.title}
              </h3>
              <p className="mt-4 font-bold text-slate-900">{route.tripType}</p>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                <Car className="text-lime-600" size={19} /> {route.vehicleTypes}
              </p>
            </motion.article>
          ))}
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
