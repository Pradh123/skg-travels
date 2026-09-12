"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";

export default function RelatedBlogs({ blogs }) {
  const trackRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanGoBack(track.scrollLeft > 2);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    const observer = new ResizeObserver(updateArrows);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateArrows]);

  function scroll(direction) {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = track.firstElementChild.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className="container border-t border-slate-200 py-14" aria-labelledby="more-blogs">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 id="more-blogs" className="text-2xl font-bold text-slate-950 sm:text-3xl">
          More from our blog
        </h2>
        <div className="flex gap-2" aria-label="Related blog controls">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={!canGoBack}
            aria-label="Previous blogs"
            aria-controls="related-blog-track"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-teal-700 text-teal-700 transition hover:bg-teal-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-teal-700"
          >
            <ArrowLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={!canGoForward}
            aria-label="Next blogs"
            aria-controls="related-blog-track"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-teal-700 text-teal-700 transition hover:bg-teal-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-teal-700"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        id="related-blog-track"
        onScroll={updateArrows}
        tabIndex={0}
        aria-label="Related blogs"
        className="related-blog-track grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto scroll-smooth pb-5 md:auto-cols-[calc((100%-1.5rem)/2)] xl:auto-cols-[calc((100%-3rem)/3)]"
      >
        {blogs.map((blog, index) => (
          <div key={blog.slug} className="min-w-0 snap-start">
            <BlogCard blog={blog} index={index + 3} />
          </div>
        ))}
      </div>
    </section>
  );
}
