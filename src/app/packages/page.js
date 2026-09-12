import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Packages from "@/components/Packages/Packages";

export const metadata = {
  title: "Cab Packages & Popular Routes | SKG Travel",
  description:
    "Explore SKG Travel's popular one-way intercity cab packages from Mumbai, Pune, Goa, Surat, Nashik, Shirdi, and more.",
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <Packages />
      <Footer />
    </>
  );
}
