"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CalendarDays,
  CarFront,
  CheckCircle2,
  Headphones,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { DatePicker, TimePicker } from "@/components/Home/BookingPickers";

const benefits = [
  {
    icon: CarFront,
    title: "Comfortable rides",
    text: "Clean, well-maintained cars for every journey.",
  },
  { icon: ShieldCheck, title: "Trusted drivers", text: "Professional drivers who know the route." },
  {
    icon: Headphones,
    title: "24/7 assistance",
    text: "Our team is ready to help with your booking.",
  },
];

const inputClass =
  "mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/15";

export default function BookRide() {
  const searchParams = useSearchParams();
  const car = searchParams.get("car") || "";
  const [trip, setTrip] = useState("One way");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dateError, setDateError] = useState("");

  function submitBooking(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!pickupDate || !pickupTime || (trip === "Round trip" && !returnDate)) {
      setDateError("Please select your pickup date and time, and a return date for round trips.");
      return;
    }
    setDateError("");
    const message = [
      "Hello SKG Travel, I would like to book a ride.",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Trip: ${trip}`,
      car && `Car: ${car}`,
      `From: ${data.get("from")}`,
      `To: ${data.get("to")}`,
      `Pickup: ${pickupDate} at ${pickupTime}`,
      trip === "Round trip" && `Return: ${returnDate}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/917506222999?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-14 text-white sm:py-20">
        <div className="absolute -top-24 -right-20 -z-10 h-72 w-72 rounded-full border-[45px] border-white/10" />
        <div className="container text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-lime-200 uppercase sm:text-sm">
            Your journey starts here
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Book a Ride</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-lg">
            Share your travel details and our team will help you plan a comfortable ride.
          </p>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center justify-center gap-2 text-sm"
          >
            <Link href="/" className="hover:text-lime-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-lime-200">
              Cars
            </Link>
            <span>/</span>
            <span className="text-lime-200" aria-current="page">
              Book a Ride
            </span>
          </nav>
        </div>
      </section>

      <section className="bg-lime-50/60 px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,.7fr)] lg:gap-12">
          <form
            onSubmit={submitBooking}
            className="rounded-2xl border-t-4 border-lime-600 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10"
          >
            <div className="mb-7">
              <p className="text-xs font-bold tracking-[0.2em] text-lime-700 uppercase">
                Booking request
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Where can we take you?</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in your details and send your request on WhatsApp.
              </p>
              {car && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-800">
                  <CarFront size={17} /> {car}
                </p>
              )}
            </div>
            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Name
                <input
                  className={inputClass}
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Mobile number
                <input
                  className={inputClass}
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+() -]{10,15}"
                  placeholder="Mobile number"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>
            <fieldset className="my-6">
              <legend className="mb-3 text-sm font-semibold text-slate-700">Trip type</legend>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {["One way", "Round trip"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={trip === option}
                    onClick={() => {
                      setTrip(option);
                      if (option === "One way") setReturnDate("");
                    }}
                    className={`cursor-pointer rounded-md border px-5 py-2.5 text-sm font-semibold transition ${trip === option ? "border-lime-700 bg-lime-700 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-lime-600 hover:text-lime-700"}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                From
                <input
                  className={inputClass}
                  name="from"
                  placeholder="Pickup location"
                  autoComplete="street-address"
                  required
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                To
                <input className={inputClass} name="to" placeholder="Drop-off location" required />
              </label>
              <DatePicker
                label="Pickup Date"
                name="pickupDate"
                value={pickupDate}
                onChange={(date) => {
                  setPickupDate(date);
                  if (returnDate && returnDate < date) setReturnDate("");
                }}
              />
              <TimePicker
                label="Pickup Time"
                name="pickupTime"
                value={pickupTime}
                onChange={setPickupTime}
              />
              {trip === "Round trip" && (
                <DatePicker
                  label="Return Date"
                  name="returnDate"
                  value={returnDate}
                  minDate={pickupDate}
                  onChange={setReturnDate}
                />
              )}
            </div>
            {dateError && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-600">
                {dateError}
              </p>
            )}
            <button
              type="submit"
              className="mt-8 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-700 px-6 py-3 font-bold text-white transition hover:bg-lime-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-700 sm:w-auto"
            >
              <CheckCircle2 size={18} /> Send booking request
            </button>
          </form>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-lime-300 uppercase">
                Ride with confidence
              </p>
              <h2 className="mt-3 text-2xl font-bold">Book a Ride with SKG Travel</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Need reliable transportation for business or pleasure? Book a comfortable ride and
                reach your destination with ease.
              </p>
              <a
                href="tel:+917506222999"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-lime-300 hover:text-white"
              >
                Call +91 75062 22999 <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-lime-100 text-lime-700">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="container py-14 sm:py-20">
        <p className="text-xs font-bold tracking-[0.2em] text-lime-700 uppercase">Why choose us</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Simple booking. Comfortable travel.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              MapPin,
              "Easy booking",
              "Share your pickup, destination, and travel dates in a few steps.",
            ],
            [CalendarDays, "Fair prices", "Get clear pricing for your trip before you travel."],
            [
              ShieldCheck,
              "Dependable service",
              "Travel with experienced drivers and a team ready to assist.",
            ],
          ].map(([Icon, title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 p-6">
              <Icon size={25} className="text-lime-700" />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
