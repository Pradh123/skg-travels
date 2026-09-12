import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Contact Us | SKG Travel",
  description: "Contact SKG Travel for reliable cab bookings, travel enquiries, and 24/7 support.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
