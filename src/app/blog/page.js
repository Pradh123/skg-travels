import BlogCard from "@/components/Blog/BlogCard";
import BlogHero from "@/components/Blog/BlogHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Travel Blog | SKG Travels",
  description: "Explore SKG Travels articles on cab booking, car rentals, and travel in India.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero
          title="Travel Blog"
          description="Travel ideas, cab booking guides, and stories from the road."
        />
        <section className="container py-12 sm:py-16 lg:py-20" aria-label="Blog articles">
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
