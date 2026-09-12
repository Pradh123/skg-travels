import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | SKG Travel",
  description: "Read how SKG Travel collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
