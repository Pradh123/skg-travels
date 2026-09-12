import BookRide from "@/components/BookRide/BookRide";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Suspense } from "react";

export const metadata = {
  title: "Book a Ride | SKG Travel",
  description:
    "Book your SKG Travel cab for a comfortable one-way or round trip. Choose your car and send us your travel details.",
};

export default function BookRidePage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-lime-50/60" />}>
        <BookRide />
      </Suspense>
      <Footer />
    </>
  );
}
