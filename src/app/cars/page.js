import Cars from "@/components/Cars/Cars";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Outstation Cars & Per Km Rates | SKG Travel",
  description:
    "Choose a clean outstation cab, SUV, Innova, luxury car, or tempo traveller with transparent per-kilometre rates.",
};

export default function CarsPage() {
  return (
    <>
      <Header />
      <Cars />
      <Footer />
    </>
  );
}
