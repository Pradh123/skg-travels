import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Refunds from "@/components/Refunds/Refunds";

export const metadata = {
  title: "Cancellation & Refunds | SKG Travel",
  description: "Read SKG Travel's booking cancellation, returns, and refund policy.",
};

export default function RefundsPage() {
  return (
    <>
      <Header />
      <Refunds />
      <Footer />
    </>
  );
}
