import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { isPageVisible } from "@/data/visiblePages";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refunds", href: "/refunds" },
];

const serviceLinks = [
  { label: "City to City", href: "/packages" },
  { label: "Local Rentals", href: "/local-rental" },
];

export default function Footer() {
  const visibleCompanyLinks = companyLinks.filter(({ href }) => isPageVisible(href));
  const visibleServiceLinks = serviceLinks.filter(({ href }) => isPageVisible(href));

  return (
    <footer className="w-full bg-black pt-10 pb-24 text-white sm:py-10">
      <div className="container grid gap-9 text-center md:grid-cols-3 md:gap-7 md:text-left">
        {visibleCompanyLinks.length > 0 && (
          <div>
            <h3 className="mb-4 text-xl text-slate-400">Company</h3>
            <div className="space-y-2 text-sm sm:text-base">
              {visibleCompanyLinks.map(({ label, href }) => (
                <p key={href}>
                  <Link href={href} className="transition hover:text-lime-500">
                    {label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        )}
        {visibleServiceLinks.length > 0 && (
          <div>
            <h3 className="mb-4 text-xl text-slate-400">Services</h3>
            <div className="space-y-2 text-sm sm:text-base">
              {visibleServiceLinks.map(({ label, href }) => (
                <p key={href}>
                  <Link href={href} className="transition hover:text-lime-500">
                    {label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        )}
        <div>
          <h3 className="mb-4 text-xl text-slate-400">Get in touch</h3>
          <p className="text-sm sm:text-base">Contact us</p>
          <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://www.youtube.com/channel/UCYIC6L3qmaEJk695xwbQ0-g"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-lime-500 hover:text-lime-500"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="https://www.instagram.com/skgtravelsind/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-lime-500 hover:text-lime-500"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://x.com/skgtravelsInd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-lime-500 hover:text-lime-500"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/skg-travels/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-lime-500 hover:text-lime-500"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
