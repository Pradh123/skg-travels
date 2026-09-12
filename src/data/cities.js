const features = [
  "We are trusted",
  "Larger range of vehicles",
  "Luxury brands available",
  "Service across India",
];

const promo = {
  title: "Do You Want To Ride With Us? We Are Always Ready To Pick You Up - 24/7!",
  buttonLabel: "BOOK NOW",
  buttonHref: "/#book",
  carImage: "/promo-car.jpg",
};

const cityContent = [
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    intro:
      "Mumbai is Maharashtra's energetic coastal capital, known for iconic landmarks, business districts, shopping, food, and memorable experiences.",
    service:
      "SKG Travel helps families, tourists, and business travellers enjoy dependable Mumbai rides with clean cars and experienced drivers.",
    tagline: "कुछ दिन तो गुजारो मुंबई में",
    welcomeImage: "/welcome-mumbai.png",
    heroImage: "/city-mumbai-hero.png",
    heroPosition: { mobile: "68% center", tablet: "64% center", desktop: "62% center" },
    routes: ["Mumbai To Pune Taxi", "Mumbai To Nashik Taxi", "Mumbai To Goa Taxi"],
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    intro:
      "Goa is loved for its beaches, heritage streets, churches, nightlife, and relaxed coastal charm. A private cab gives you the freedom to explore comfortably.",
    service:
      "SKG Travel provides dependable airport transfers, sightseeing rides, and outstation journeys for families, groups, and business travellers.",
    tagline: "कुछ दिन तो गुजारो गोवा में",
    welcomeImage: "/welcome-goa.png",
    heroImage: "/city-goa-hero.png",
    heroPosition: { mobile: "70% center", tablet: "66% center", desktop: "62% center" },
    routes: ["Goa To Mumbai Taxi", "Goa To Pune Taxi", "Goa Local Sightseeing"],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    intro:
      "Pune is a beautiful city admired for its pleasant atmosphere, history, education, food, and nearby hill destinations.",
    service:
      "SKG Travel assists families, tourists, and professionals with clean cars and experienced drivers for local and intercity journeys.",
    tagline: "कुछ दिन तो गुजारो पुणे में",
    welcomeImage: "/welcome-pune.png",
    heroImage: "/city-pune-hero.png",
    heroPosition: { mobile: "72% center", tablet: "67% center", desktop: "62% center" },
    routes: ["Pune To Mumbai Taxi", "Pune To Nashik Taxi", "Pune To Goa Taxi"],
  },
  {
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    intro:
      "Nashik combines sacred ghats, ancient temples, vineyards, and scenic countryside. A private cab is a convenient way to explore it.",
    service:
      "SKG Travel offers dependable local rentals and outstation cabs with clean vehicles and professional drivers.",
    tagline: "कुछ दिन तो गुजारो नाशिक में",
    welcomeImage: "/welcome-nashik.png",
    heroImage: "/city-nashik-hero.png",
    heroPosition: { mobile: "72% center", tablet: "67% center", desktop: "62% center" },
    routes: ["Nashik To Mumbai Taxi", "Nashik To Pune Taxi", "Nashik To Shirdi Taxi"],
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    state: "Gujarat",
    intro:
      "Gujarat is known for its heritage, temples, wildlife, colourful culture, and thriving cities. A chauffeur-driven cab makes every journey comfortable.",
    service:
      "SKG Travel assists families, tourists, and business travellers with dependable rides, clean vehicles, and experienced drivers.",
    tagline: "कुछ दिन तो गुजारो गुजरात में",
    heroImage: "/city-gujarat-hero.png",
    heroPosition: { mobile: "72% center", tablet: "67% center", desktop: "62% center" },
    welcomeImage: "/welcome-gujarat.png",
    routes: ["Vapi To Mumbai Taxi", "Vadodara To Mumbai Taxi", "Surat To Mumbai Taxi"],
  },
];

const carImages = ["/car-mini.png", "/car-sedan.jpeg", "/car-premium-suv.jpeg"];

// Complete page data is exposed as one array; the dynamic route selects an object by slug.
export const cities = cityContent.map((city) => ({
  slug: city.slug,
  name: city.name,
  state: city.state,
  metadata: {
    title: `Taxi & Car Rental Service in ${city.name} | SKG Travel`,
    description: `Book a clean, reliable chauffeur-driven cab in ${city.name} for local and outstation travel.`,
  },
  hero: {
    eyebrow: "Travel At Best Rate",
    title: "With Most Comfortable Cars",
    description: `Reliable taxi and car rental service in ${city.name}, available for local and outstation travel.`,
    image: city.heroImage,
    imagePosition: city.heroPosition,
    buttonLabel: "BOOK NOW",
    buttonHref: "/#book",
  },
  about: {
    eyebrow: "About Us",
    title: `Welcome To SKG Travel - Taxi And Cab Rental Service In ${city.name}`,
    paragraphs: [
      city.intro,
      city.service,
      "We provide safe, reliable, and comfortable car rental solutions at transparent rates. From short city rides to long-distance trips, there is a suitable vehicle for every occasion.",
    ],
    features,
  },
  welcome: city.welcomeImage
    ? {
        image: city.welcomeImage,
        imageAlt: `Welcome to ${city.name} — ${city.tagline}`,
      }
    : {
        eyebrow: "Welcome to",
        title: city.name,
        tagline: city.tagline,
      },
  promo,
  fleet: {
    eyebrow: "See Our",
    title: "Types Of Car",
    routes: city.routes.map((title, index) => ({
      title,
      tripType: "One Way/Roundtrip",
      vehicleTypes: "Mini, Sedan, Premium SUVs",
      image: carImages[index],
    })),
  },
}));

export function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}
