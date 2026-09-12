import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TermsConditions from "@/components/TermsConditions/TermsConditions";

export const metadata = {
  title: "Terms & Conditions | SKG Travel",
  description: "Read the terms of use, booking cancellation, and return conditions for SKG Travel.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <TermsConditions />
      <Footer />
    </>
  );
}
