import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LocalRental from "@/components/LocalRental/LocalRental";

export const metadata = {
  title: "Local Car Rental Plans | SKG Travel",
  description:
    "Book flexible local car rental packages with clean cabs, professional drivers, and transparent hourly fares.",
};

export default function LocalRentalPage() {
  return (
    <>
      <Header />
      <LocalRental />
      <Footer />
    </>
  );
}
