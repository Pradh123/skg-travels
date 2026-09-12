"use client";

import { CalendarDays, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const timeSlots = Array.from({ length: 48 }, (_, index) => {
  const hours = Math.floor(index / 2);
  const minutes = index % 2 === 0 ? "00" : "30";
  return `${String(hours).padStart(2, "0")}:${minutes}`;
});

function localISO(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function useCloseOnOutsideClick(ref, open, setOpen) {
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event) {
      if (!ref.current?.contains(event.target)) setOpen(false);
    }
    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, ref, setOpen]);
}

function usePopupPlacement(rootRef, panelRef, open, contentKey = "") {
  const [placement, setPlacement] = useState({ above: false, alignRight: false, maxHeight: 320 });

  useLayoutEffect(() => {
    if (!open) return;

    function updatePlacement() {
      const root = rootRef.current?.getBoundingClientRect();
      const panel = panelRef.current?.getBoundingClientRect();
      if (!root || !panel) return;

      const spaceBelow = window.innerHeight - root.bottom;
      const spaceAbove = root.top;
      const above = spaceBelow < panel.height + 12 && spaceAbove > spaceBelow;
      setPlacement({
        above,
        alignRight: root.left + panel.width > window.innerWidth - 12,
        maxHeight: Math.max(96, Math.floor((above ? spaceAbove : spaceBelow) - 12)),
      });
    }

    updatePlacement();
    window.addEventListener("resize", updatePlacement);
    window.addEventListener("scroll", updatePlacement, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePlacement);
      window.removeEventListener("scroll", updatePlacement);
    };
  }, [open, rootRef, panelRef, contentKey]);

  return placement;
}

export function DatePicker({ label, name, value, onChange, minDate }) {
  const today = localISO(new Date());
  const earliestDate = minDate && minDate > today ? minDate : today;
  const [open, setOpen] = useState(false);
  const [displayMonth, setDisplayMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const panelId = useId();
  useCloseOnOutsideClick(rootRef, open, setOpen);
  const placement = usePopupPlacement(
    rootRef,
    panelRef,
    open,
    `${displayMonth.getFullYear()}-${displayMonth.getMonth()}`
  );

  const year = displayMonth.getFullYear();
  const month = displayMonth.getMonth();
  const offset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = displayMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const canGoPrevious = localISO(new Date(year, month, 0)) >= earliestDate;
  const selectedLabel = value
    ? new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Select date";

  function toggle() {
    if (!open) {
      const start = value || earliestDate;
      const selected = new Date(`${start}T00:00:00`);
      setDisplayMonth(new Date(selected.getFullYear(), selected.getMonth(), 1));
    }
    setOpen(!open);
  }

  return (
    <div ref={rootRef} className="relative min-w-0 text-sm font-medium">
      <span>{label}</span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={toggle}
        aria-label={`${label}: ${selectedLabel}`}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-2 flex w-full cursor-pointer items-center justify-between border border-slate-200 border-b-lime-500 bg-white px-4 py-2.5 text-left transition hover:border-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
      >
        <span className={value ? "text-slate-900" : "text-slate-500"}>{selectedLabel}</span>
        <CalendarDays size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
      </button>
      {open && (
        <div
          id={panelId}
          ref={panelRef}
          style={{ maxHeight: placement.maxHeight }}
          className={`absolute z-40 w-[min(20rem,calc(100vw-3rem))] overflow-y-auto rounded-xl border border-lime-200 bg-white p-4 shadow-2xl ${placement.above ? "bottom-full mb-2" : "top-full mt-2"} ${placement.alignRight ? "right-0" : "left-0"}`}
        >
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setDisplayMonth(new Date(year, month - 1, 1))}
              disabled={!canGoPrevious}
              aria-label="Previous month"
              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-teal-700 hover:bg-lime-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-bold text-slate-900">{monthLabel}</span>
            <button
              type="button"
              onClick={() => setDisplayMonth(new Date(year, month + 1, 1))}
              aria-label="Next month"
              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-teal-700 hover:bg-lime-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-500">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {Array.from({ length: offset }, (_, index) => (
              <span key={`empty-${index}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, index) => {
              const date = new Date(year, month, index + 1);
              const iso = localISO(date);
              const isSelected = iso === value;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={iso < earliestDate}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  aria-label={date.toLocaleDateString("en-IN", { dateStyle: "full" })}
                  aria-pressed={isSelected}
                  className={`grid aspect-square cursor-pointer place-items-center rounded-lg text-sm transition disabled:cursor-not-allowed disabled:text-slate-300 ${isSelected ? "bg-lime-500 font-bold text-white" : "text-slate-700 hover:bg-lime-100"}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function TimePicker({ label, name, value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const panelId = useId();
  useCloseOnOutsideClick(rootRef, open, setOpen);
  const placement = usePopupPlacement(rootRef, panelRef, open);

  function formatTime(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
  }

  return (
    <div ref={rootRef} className="relative min-w-0 text-sm font-medium">
      <span>{label}</span>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={`${label}: ${value ? formatTime(value) : "Select time"}`}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-2 flex w-full cursor-pointer items-center justify-between border border-slate-200 border-b-lime-500 bg-white px-4 py-2.5 text-left transition hover:border-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
      >
        <span className={value ? "text-slate-900" : "text-slate-500"}>
          {value ? formatTime(value) : "Select time"}
        </span>
        <Clock3 size={18} className="shrink-0 text-teal-700" aria-hidden="true" />
      </button>
      {open && (
        <div
          id={panelId}
          ref={panelRef}
          style={{ maxHeight: placement.maxHeight }}
          className={`absolute z-40 w-[min(18rem,calc(100vw-3rem))] overflow-y-auto rounded-xl border border-lime-200 bg-white p-3 shadow-2xl ${placement.above ? "bottom-full mb-2" : "top-full mt-2"} ${placement.alignRight ? "right-0" : "left-0"}`}
        >
          <p className="px-2 pb-2 font-bold text-slate-900">Choose pickup time</p>
          <div className="grid max-h-56 grid-cols-2 gap-1 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => {
                  onChange(time);
                  setOpen(false);
                }}
                aria-pressed={time === value}
                className={`cursor-pointer rounded-lg px-2 py-2 text-center text-sm transition ${time === value ? "bg-lime-500 font-bold text-white" : "text-slate-700 hover:bg-lime-100"}`}
              >
                {formatTime(time)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
