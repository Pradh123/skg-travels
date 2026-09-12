"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { cities } from "@/data/cities";
const links = [
  { label: "Home", href: "/" },
  {
    label: "Our services & pricing",
    href: "/#services",
    children: [
      { label: "Cars", href: "/cars" },
      { label: "Local Rental", href: "/local-rental" },
      { label: "City To City", href: "/packages" },
    ],
  },
  {
    label: "Cities",
    href: "/cities/mumbai",
    children: cities.map(({ name, slug }) => ({ label: name, href: `/cities/${slug}` })),
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
];
const MotionLink = motion.create(Link);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <header className="relative z-20 bg-white font-sans shadow-sm">
      <div className="relative h-14 overflow-hidden text-white">
        <div className="absolute inset-x-0 top-0 h-[52px] bg-black" />
        <div
          className="absolute inset-y-0 left-0 w-[58%] bg-lime-500 sm:w-[55%] lg:w-[48%]"
          style={{ clipPath: "polygon(0 0, 93% 0, 100% 100%, 0 100%)" }}
        />
        <div className="relative container flex h-[52px] items-center gap-3 text-xs font-semibold sm:gap-4 sm:text-sm lg:gap-5">
          <span className="hidden sm:inline">Need Help?</span>
          <a
            href="tel:+917506222999"
            className="flex items-center gap-2 transition hover:text-slate-950"
          >
            <Phone className="fill-white" size={18} /> +91 75062 22999
          </a>
          <a
            href="mailto:support@skgtravels.in"
            className="ml-auto hidden items-center gap-2 transition hover:text-lime-400 md:flex lg:ml-0 lg:hover:text-slate-950"
          >
            <Mail size={19} /> support@skgtravels.in
          </a>
        </div>
      </div>
      <nav className="container flex h-24 items-center justify-between sm:h-[110px] xl:h-[124px]">
        <Link href="/" className="flex items-center" aria-label="SKG Travel home">
          <Image
            src="/skg-logo-hd.png"
            alt="SKG Travel"
            width={164}
            height={116}
            priority
            className="h-[82px] w-auto object-contain sm:h-[92px]"
          />
        </Link>
        <div className="hidden items-center gap-5 text-[16px] font-semibold text-slate-950 xl:flex 2xl:gap-6 2xl:text-[17px]">
          {links.map((link) => (
            <div key={link.label} className="group relative py-5">
              <Link
                href={link.href}
                className="flex items-center gap-1 whitespace-nowrap transition hover:text-lime-600"
              >
                {link.label}
                {link.children ? (
                  <ChevronDown
                    className="mt-0.5 fill-current transition-transform duration-200 group-hover:rotate-180"
                    size={14}
                  />
                ) : null}
              </Link>
              {link.children ? (
                <div className="invisible absolute top-full left-0 z-30 min-w-52 translate-y-2 border-t-2 border-lime-500 bg-white py-2 text-[15px] text-slate-800 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-2.5 whitespace-nowrap transition hover:bg-lime-50 hover:text-lime-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <MotionLink
          href="/#book"
          className="hidden h-12 w-52 shrink-0 items-center justify-center gap-2 bg-lime-600 py-3 pr-5 pl-10 text-lg font-medium whitespace-nowrap text-white xl:flex"
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.02 }}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 24% 100%)" }}
        >
          <FaPhoneAlt size={16} /> BOOK A RIDE
        </MotionLink>
        <button
          onClick={() => setOpen(!open)}
          className="rounded p-2 text-slate-950 transition hover:bg-lime-50 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 xl:hidden">
            <motion.button
              className="absolute inset-0 bg-black/45"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute top-0 right-0 flex max-h-dvh w-full flex-col bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-100 px-5">
                <Image
                  src="/skg-logo-hd.png"
                  alt="SKG Travel"
                  width={110}
                  height={78}
                  className="h-16 w-auto object-contain"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-slate-900 transition hover:bg-lime-50"
                  aria-label="Close menu"
                >
                  <X size={25} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-3">
                {links.map((link) => {
                  const isExpanded = expandedItem === link.label;

                  return (
                    <div key={link.label} className="border-b border-slate-100 last:border-0">
                      {link.children ? (
                        <>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between py-4 text-left font-semibold text-slate-950"
                            onClick={() => setExpandedItem(isExpanded ? null : link.label)}
                            aria-expanded={isExpanded}
                          >
                            {link.label}
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-lime-600" : ""}`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <div className="mb-3 border-l-2 border-lime-500 pl-4">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      className="block py-2.5 text-sm text-slate-600 transition hover:text-lime-600"
                                      onClick={() => setOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          className="block py-4 font-semibold text-slate-950"
                          href={link.href}
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="shrink-0 border-t border-slate-100 p-5">
                <Link
                  href="/#book"
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center justify-center gap-2 bg-lime-600 px-4 font-semibold text-white"
                >
                  <FaPhoneAlt size={15} /> BOOK A RIDE
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
