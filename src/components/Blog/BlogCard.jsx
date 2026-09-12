import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function BlogCard({ blog, index }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-300 hover:shadow-xl">
      <Link href={`/blog/${blog.slug}`} className="block" aria-label={`Read ${blog.title}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 40vw"
            loading={index < 3 ? "eager" : "lazy"}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="line-clamp-3 text-xl leading-snug font-bold text-slate-950 sm:text-2xl">
          <Link href={`/blog/${blog.slug}`} className="transition hover:text-teal-700">
            {blog.title}
          </Link>
        </h2>
        {blog.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {blog.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm">
          <span
            className="flex items-center gap-2 text-slate-500"
            aria-label={`${blog.likes} likes`}
          >
            <Heart size={18} className="text-lime-600" aria-hidden="true" /> {blog.likes}
          </span>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-teal-700 transition hover:text-lime-700"
          >
            Read more <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
