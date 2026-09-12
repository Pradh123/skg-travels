import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RoutePackage from "@/components/Packages/RoutePackage";
import { getPackageRoute, packageRoutes } from "@/data/packageRoutes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return packageRoutes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = getPackageRoute(slug);

  if (!route) return {};

  return {
    title: `${route.title} | SKG Travel`,
    description: `Book a reliable ${route.title.toLowerCase()} with transparent fares, clean cars, and professional drivers.`,
  };
}

export default async function RoutePackagePage({ params }) {
  const { slug } = await params;
  const route = getPackageRoute(slug);

  if (!route) notFound();

  return (
    <>
      <Header />
      <RoutePackage route={route} />
      <Footer />
    </>
  );
}
