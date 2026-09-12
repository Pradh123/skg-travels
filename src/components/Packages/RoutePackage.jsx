"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileText,
  MapPin,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const vehicles = [
  { name: "Mini", examples: "WagonR, Ritz, Swift, Grand i10 or similar", rate: 10, seats: 4 },
  { name: "Sedan", examples: "Dzire, Xcent, Etios, Aura or similar", rate: 11, seats: 4 },
  { name: "SUV M", examples: "Ertiga, Honda Mobilio or similar", rate: 15, seats: 6 },
  { name: "SUV", examples: "Innova or similar", rate: 18, seats: 6 },
  { name: "Premium SUV", examples: "Innova Crysta, Tata Hexa or similar", rate: 22, seats: 6 },
];

const rise = { hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } };

function RatedBadgeIcon() {
  return (
    <svg
      viewBox="0 0 64 76"
      width="42"
      height="50"
      fill="none"
      aria-hidden="true"
      className="drop-shadow-[0_2px_3px_rgba(14,165,233,0.18)]"
    >
      <path
        d="m20 45-5 25 10-6 7 9 3-26M44 45l5 25-10-6-7 9-3-26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M32 4.5 37 8l6-.3 2.7 5.4 5.3 3-.5 6 3.2 5-3.2 5 .5 6-5.3 3L43 46.5l-6-.3-5 3.3-5-3.3-6 .3-2.7-5.4-5.3-3 .5-6-3.2-5 3.2-5-.5-6 5.3-3L21 7.7l6 .3 5-3.5Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="27" r="12.5" fill="#ecfeff" stroke="currentColor" strokeWidth="3" />
      <path
        d="m32 18.8 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8 2.5-5Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const detailTabs = [
  { id: "inclusions", label: "Inclusions", icon: CheckCircle2 },
  { id: "exclusions", label: "Exclusions", icon: XCircle },
  { id: "facilities", label: "Facilities", icon: Sparkles },
  { id: "terms", label: "T&C", icon: FileText },
];

function getTabItems(tab, route, vehicle) {
  const content = {
    inclusions: [
      `Base fare for up to ${route.distance} km`,
      "Professional driver allowance",
      "Door-to-door pickup and drop",
      `${vehicle.seats}-passenger seating capacity`,
    ],
    exclusions: [
      "State tax, toll, and parking charges",
      "Night allowance of ₹250, when applicable",
      `Extra distance charged at ₹${vehicle.rate}/km`,
      "Additional stops or route diversions",
    ],
    facilities: [
      "Clean and well-maintained cab",
      "Verified, top-rated driver",
      "Air-conditioned vehicle",
      "24×7 booking assistance",
    ],
    terms: [
      "Fare is an estimate and is confirmed at booking",
      "Vehicle model depends on availability",
      "Waiting and cancellation charges may apply",
      "Carry a valid photo ID during the journey",
    ],
  };

  return content[tab];
}

export default function RoutePackage({ route }) {
  const [openVehicle, setOpenVehicle] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});

  const toggleDetails = (vehicleName) => {
    setOpenVehicle((current) => (current === vehicleName ? null : vehicleName));
    setActiveTabs((current) => ({
      ...current,
      [vehicleName]: current[vehicleName] || "inclusions",
    }));
  };

  return (
    <main className="overflow-x-clip bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-12 text-white sm:py-16">
        <div className="absolute -top-24 -right-16 -z-10 h-64 w-64 rounded-full border-[44px] border-white/10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rise}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container text-center"
        >
          <p className="text-xs font-bold tracking-[0.24em] text-lime-200 uppercase sm:text-sm">
            One-way cab package
          </p>
          <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold capitalize sm:text-5xl">
            {route.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-white/85 sm:text-base">
            <span className="flex items-center gap-2">
              <MapPin size={17} /> Approx. {route.distance} km
            </span>
            <span aria-hidden="true" className="text-lime-200">
              •
            </span>
            <span>Door-to-door service</span>
          </div>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm"
          >
            <Link href="/" className="font-semibold hover:text-lime-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="font-semibold hover:text-lime-200">
              Packages
            </Link>
            <span>/</span>
            <span className="text-lime-200" aria-current="page">
              {route.title}
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="container py-10 sm:py-14 lg:py-16">
        <div className="mb-7 text-center sm:mb-9">
          <p className="text-xs font-bold tracking-[0.22em] text-lime-600 uppercase sm:text-sm">
            Choose your cab
          </p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl">
            Available cars & estimated fares
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Select the car that fits your journey. Final fare and availability will be confirmed
            while booking.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4">
          {vehicles.map((vehicle, index) => {
            const price = Math.round(route.distance * vehicle.rate);
            const isOpen = openVehicle === vehicle.name;

            return (
              <motion.article
                key={vehicle.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={rise}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className="overflow-hidden rounded-br-3xl border border-t-2 border-lime-200 border-t-lime-500 bg-white shadow-sm"
              >
                <div className="grid items-center gap-4 p-5 text-center sm:p-6 md:grid-cols-[1.15fr_.9fr_.8fr_auto] md:gap-7 md:text-left lg:px-8">
                  <div className="min-w-0">
                    <h2 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                      {vehicle.name}
                    </h2>
                    <p className="mx-auto mt-1 max-w-sm text-sm leading-6 break-words text-slate-600 md:mx-0">
                      {vehicle.examples}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 border-t border-slate-100 pt-4 md:border-0 md:pt-0">
                    <span className="grid h-14 w-12 shrink-0 place-items-center text-sky-400">
                      <RatedBadgeIcon />
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Top-rated cabs
                      <br />& drivers
                    </span>
                  </div>

                  <div className="border-t border-slate-100 pt-4 md:border-0 md:pt-0">
                    <p className="text-2xl font-extrabold text-cyan-600">
                      ₹{price.toLocaleString("en-IN")}
                    </p>
                    <p className="mt-1 text-xs font-bold text-slate-700">
                      up to {route.distance} km
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleDetails(vehicle.name)}
                      className="mx-auto mt-2 flex min-h-8 cursor-pointer items-center gap-1 rounded-md text-sm font-bold text-cyan-600 transition hover:text-lime-600 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none md:mx-0"
                      aria-expanded={isOpen}
                    >
                      Details{" "}
                      <ChevronDown
                        size={14}
                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <Link
                    href="/#book"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-lime-500 px-5 py-3 text-base font-extrabold whitespace-nowrap text-white shadow-sm transition hover:bg-lime-600 sm:text-lg md:w-auto"
                  >
                    Book now
                  </Link>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-lime-200 bg-slate-50/80">
                        <div
                          role="tablist"
                          aria-label={`${vehicle.name} fare details`}
                          className="grid grid-cols-2 gap-1 border-b border-slate-200 bg-white px-3 pt-3 sm:flex sm:overflow-x-auto sm:px-6 sm:pt-4"
                        >
                          {detailTabs.map(({ id, label, icon: Icon }) => {
                            const isActive = (activeTabs[vehicle.name] || "inclusions") === id;

                            return (
                              <button
                                key={id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() =>
                                  setActiveTabs((current) => ({ ...current, [vehicle.name]: id }))
                                }
                                className={`relative flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-t-lg px-2 py-2 text-xs font-bold transition focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none sm:justify-start sm:px-5 sm:text-sm ${
                                  isActive
                                    ? "bg-lime-50 text-lime-700"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                              >
                                <Icon size={16} />
                                {label}
                                {isActive && (
                                  <motion.span
                                    layoutId={`active-tab-${vehicle.name}`}
                                    className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500"
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div
                          role="tabpanel"
                          className="grid gap-6 px-4 py-5 sm:px-8 sm:py-7 lg:grid-cols-[1fr_auto] lg:items-center"
                        >
                          <AnimatePresence mode="wait">
                            <motion.ul
                              key={activeTabs[vehicle.name] || "inclusions"}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.18 }}
                              className="grid gap-3 text-left text-sm text-slate-600 sm:grid-cols-2 sm:text-base"
                            >
                              {getTabItems(
                                activeTabs[vehicle.name] || "inclusions",
                                route,
                                vehicle
                              ).map((item) => (
                                <li key={item} className="flex items-start gap-2.5 leading-6">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
                                  {item}
                                </li>
                              ))}
                            </motion.ul>
                          </AnimatePresence>

                          <div className="hidden rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200 lg:block">
                            <CircleDollarSign className="mx-auto text-lime-600" size={26} />
                            <p className="mt-2 text-xs font-bold tracking-wide text-slate-500 uppercase">
                              Estimated fare
                            </p>
                            <p className="mt-1 text-xl font-extrabold text-slate-950">
                              ₹{price.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl items-start gap-3 rounded-br-3xl border border-cyan-100 bg-cyan-50 p-5 text-sm leading-6 text-slate-700 sm:p-6">
          <ShieldCheck className="mt-0.5 shrink-0 text-cyan-600" size={22} />
          <p>
            Displayed fares are estimates based on route distance. Toll, parking, state tax, and
            additional kilometres may be charged separately after confirmation.
          </p>
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
