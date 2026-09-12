import Link from "next/link";

export default function BlogHero({ title, description, isPost = false }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-cyan-700 via-teal-600 to-lime-600 py-14 text-white sm:py-20 lg:py-24">
      <div className="absolute -top-20 -right-20 -z-10 h-52 w-52 rounded-full border-[36px] border-white/10 sm:-top-28 sm:h-80 sm:w-80 sm:border-[55px]" />
      <div className="absolute -bottom-36 left-[12%] -z-10 h-72 w-72 rounded-full bg-lime-300/15 blur-2xl" />
      <div className="container text-center">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-lime-200 uppercase sm:text-sm sm:tracking-[0.28em]">
          Travel stories and guides
        </p>
        <h1 className="mx-auto max-w-5xl text-3xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-7">
            {description}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:mt-7 sm:text-sm"
        >
          <Link href="/" className="font-semibold transition hover:text-lime-200">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          {isPost ? (
            <>
              <Link href="/blog" className="font-semibold transition hover:text-lime-200">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span className="max-w-full text-lime-200" aria-current="page">
                {title}
              </span>
            </>
          ) : (
            <span className="text-lime-200" aria-current="page">
              Blog
            </span>
          )}
        </nav>
      </div>
    </section>
  );
}
