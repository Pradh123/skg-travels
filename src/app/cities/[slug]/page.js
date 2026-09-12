import CityLanding from "@/components/City/CityLanding";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { cities, getCity } from "@/data/cities";
import { notFound } from "next/navigation";

// Pre-render every city listed in the shared navigation/data source.
export function generateStaticParams() {
  return cities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const city = getCity((await params).slug);
  if (!city) return {};

  return {
    title: city.metadata.title,
    description: city.metadata.description,
  };
}

export default async function CityPage({ params }) {
  const city = getCity((await params).slug);
  if (!city) notFound();

  return (
    <>
      <Header />
      <CityLanding city={city} />
      <Footer />
    </>
  );
}
