import BlogHero from "@/components/Blog/BlogHero";
import RelatedBlogs from "@/components/Blog/RelatedBlogs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { blogs, getBlog } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const blog = getBlog((await params).slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | SKG Travels`,
    description: blog.excerpt || blog.title,
  };
}

export default async function BlogPostPage({ params }) {
  const blog = getBlog((await params).slug);
  if (!blog) notFound();
  const related = blogs.filter((item) => item.slug !== blog.slug);

  return (
    <>
      <Header />
      <main>
        <article>
          <BlogHero title={blog.title} isPost />
          <div className="container max-w-5xl py-12 sm:py-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                loading="eager"
                className="object-cover"
              />
            </div>
            {blog.excerpt && (
              <p className="mt-8 text-center text-lg leading-9 text-slate-700 sm:text-left">
                {blog.excerpt}
              </p>
            )}
            <Link
              href="/#book"
              className="mx-auto mt-9 flex w-fit rounded-lg bg-lime-500 px-6 py-3 font-bold text-white transition hover:bg-lime-600 sm:ml-0"
            >
              Book a ride
            </Link>
          </div>
        </article>
        <RelatedBlogs blogs={related} />
      </main>
      <Footer />
    </>
  );
}
