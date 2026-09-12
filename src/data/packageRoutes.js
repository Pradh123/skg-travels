export const packageRoutes = [
  { title: "Mumbai To Pune - Cab One Way", slug: "mumbai-to-pune-cab-one-way", distance: 150 },
  { title: "Pune To Mumbai - Cab One Way", slug: "pune-to-mumbai-cab-one-way", distance: 150 },
  { title: "Mumbai To Surat Cab One Way", slug: "mumbai-to-surat-cab-one-way", distance: 285 },
  { title: "Surat To Mumbai Cab One Way", slug: "surat-to-mumbai-cab-one-way", distance: 285 },
  { title: "Mumbai To Nashik Cab One Way", slug: "mumbai-to-nashik-cab-one-way", distance: 170 },
  { title: "Nashik To Mumbai Cab One Way", slug: "nashik-to-mumbai-cab-one-way", distance: 170 },
  { title: "Mumbai To Goa Cab One Way", slug: "mumbai-to-goa-cab-one-way", distance: 590 },
  { title: "Goa To Mumbai Cab One Way", slug: "goa-to-mumbai-cab-one-way", distance: 590 },
  { title: "Mumbai To Vapi Cab One Way", slug: "mumbai-to-vapi-cab-one-way", distance: 175 },
  { title: "Vapi To Mumbai Cab One Way", slug: "vapi-to-mumbai-cab-one-way", distance: 175 },
  { title: "Mumbai To Shirdi Cab One Way", slug: "mumbai-to-shirdi-cab-one-way", distance: 240 },
  { title: "Shirdi To Mumbai Cab One Way", slug: "shirdi-to-mumbai-cab-one-way", distance: 240 },
  { title: "Mumbai To Lonavala Cab One Way", slug: "mumbai-to-lonavala-cab-one-way", distance: 85 },
  { title: "Lonavala To Mumbai Cab One Way", slug: "lonavala-to-mumbai-cab-one-way", distance: 85 },
  {
    title: "Ahmedabad To Mumbai Cab One Way",
    slug: "ahmedabad-to-mumbai-cab-one-way",
    distance: 525,
  },
  {
    title: "Mumbai To Ahmedabad Cab One Way",
    slug: "mumbai-to-ahmedabad-cab-one-way",
    distance: 525,
  },
  {
    title: "Mumbai Airport To Ahmedabad Cab",
    slug: "mumbai-airport-to-ahmedabad-cab",
    distance: 530,
  },
];

export function getPackageRoute(slug) {
  return packageRoutes.find((route) => route.slug === slug);
}
