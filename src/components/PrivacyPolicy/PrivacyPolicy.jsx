"use client";

import { motion } from "framer-motion";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import LegalSidebarNav from "@/components/LegalSidebarNav/LegalSidebarNav";
import { isPageVisible } from "@/data/visiblePages";

const viewport = { once: false, amount: 0.12 };
const rise = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "This privacy policy sets out how Skgtravel uses and protects any information that you give Skgtravel when you use this website. Skgtravel is committed to ensuring that your privacy is protected. We ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement. Skgtravel may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are aware of any changes.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We gather the following information from you: Name, Mobile Number, and Contact details including email address. Additionally, we collect usage data when you engage with our services, such as your browser type, referring URL, visited sections, and time of access. For call bookings, we may also record your preferred language, country site (if applicable), mobile device manufacturer, and operating system. We adhere to relevant laws and do not share or transfer SMS/text message data to any third party except as outlined in this privacy policy. This information is crucial for us to comprehend your requirements and enhance our services to better serve you.",
    ],
  },
  {
    id: "record-keeping",
    title: "Internal record keeping.",
    paragraphs: [
      "We may use the information to improve our products and services. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone or mail. We may use the information to customize the website according to your interests.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
    ],
  },
  {
    id: "cookies",
    title: "How we use cookies",
    paragraphs: [
      "A cookie is a small file that seeks permission to be placed on your computer’s hard drive. Once accepted, the file is added and helps analyze web traffic or notifies you when you visit a specific site. Cookies enable web applications to respond to you as an individual, tailoring their operations based on your preferences. Cookies assist us in providing a better website by monitoring which pages you find useful. They do not grant access to your computer or any information about you, except for the data you decide to share.",
    ],
  },
  {
    id: "external-links",
    title: "Links to other websites",
    paragraphs: [
      "Our website may have links to other sites. We don’t control these external sites and can’t guarantee the privacy of your information there. Each site has its own privacy policy. Be cautious and review the privacy statement of any site you visit.",
    ],
  },
  {
    id: "contacting-us",
    title: "Contacting us",
    paragraphs: [
      "If there are any questions regarding this privacy policy you may contact us using the information on the Contact Us page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="overflow-x-clip bg-white text-slate-900">
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
          <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <ShieldCheck size={28} />
          </span>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
            Your information matters
          </p>
          <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            Learn what information we collect, why we use it, and how we work to keep it protected.
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
              Privacy Policy
            </span>
          </nav>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={rise}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="rounded-br-3xl border border-lime-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto"
          >
            <div className="flex items-center justify-center gap-2 text-center lg:justify-start lg:text-left">
              <LockKeyhole size={20} className="text-lime-600" />
              <h2 className="font-bold text-slate-950">Policy sections</h2>
            </div>
            <LegalSidebarNav
              sections={sections}
              sectionLabel="Privacy policy sections"
              columns="sm:grid-cols-2 lg:grid-cols-1"
            />
          </motion.aside>

          <div className="space-y-5 sm:space-y-6">
            {sections.map((section, index) => (
              <motion.article
                id={section.id}
                key={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={rise}
                transition={{ duration: 0.65, delay: 0.14 + (index % 2) * 0.08, ease: "easeOut" }}
                className="scroll-mt-6 rounded-br-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-lime-500" />
                  <div>
                    <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-justify text-sm leading-7 text-slate-600 sm:text-left sm:text-base sm:leading-8">
                      {section.id === "contacting-us" ? (
                        isPageVisible("/contact") ? (
                          <p>
                            If there are any questions regarding this privacy policy you may contact
                            us using the information on the{" "}
                            <Link
                              href="/contact"
                              className="font-bold text-lime-600 underline-offset-4 transition hover:text-lime-700 hover:underline"
                            >
                              Contact Us
                            </Link>{" "}
                            page.
                          </p>
                        ) : (
                          <p>
                            If there are any questions regarding this privacy policy, email us at{" "}
                            <a
                              href="mailto:support@skgtravels.in"
                              className="font-bold text-lime-600 underline-offset-4 transition hover:text-lime-700 hover:underline"
                            >
                              support@skgtravels.in
                            </a>
                            .
                          </p>
                        )
                      ) : (
                        section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                      )}
                    </div>
                  </div>
                </div>
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
