import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Book Cabs & Car Rentals in India | SKG Travels",
  description:
    "Book local cabs, city-to-city rides, and car rentals with SKG Travels. Choose comfortable cars, transparent fares, and 24/7 support.",
};

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
