import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full bg-black pt-10 pb-24 text-white sm:py-10">
      <div className="container grid gap-9 text-center md:grid-cols-3 md:gap-7 md:text-left">
        <div>
          <h3 className="mb-4 text-xl text-slate-400">Company</h3>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <Link href="/about" className="transition hover:text-lime-500">
                About us
              </Link>
            </p>
            <p>
              <Link href="/privacy-policy" className="transition hover:text-lime-500">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link href="/terms-and-conditions" className="transition hover:text-lime-500">
                Terms and Conditions
              </Link>
            </p>
            <p>
              <Link href="/refunds" className="transition hover:text-lime-500">
                Refunds
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl text-slate-400">Services</h3>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <Link href="/packages" className="transition hover:text-lime-500">
                City to City
              </Link>
            </p>
            <p>
              <Link href="/local-rental" className="transition hover:text-lime-500">
                Local Rentals
              </Link>
            </p>
          </div>
        </div>
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
