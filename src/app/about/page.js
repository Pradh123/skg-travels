import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "About Us | SKG Travel",
  description:
    "Learn about SKG Travel's reliable, affordable car rental and cab services across India.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}
