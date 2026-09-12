"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function LegalSidebarNav({ sections, sectionLabel, columns }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  useEffect(() => {
    let frame;

    function updateActiveSection() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.35;
        let current = sections[0]?.id;

        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= marker) current = section.id;
        }

        setActiveSection(current);
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <nav aria-label={sectionLabel} className={`mt-4 grid gap-1 ${columns}`}>
      {sections.map((section) => {
        const active = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active ? "location" : undefined}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center justify-between rounded-lg border-l-4 px-3 py-2.5 text-sm transition ${active ? "border-lime-600 bg-lime-50 font-semibold text-lime-800" : "border-transparent text-slate-600 hover:bg-lime-50 hover:text-lime-700"}`}
          >
            {section.title}
            <ChevronRight size={15} className="shrink-0" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
