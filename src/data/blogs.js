// Keep the listing and article pages in sync by editing blog content here.
// Images use the available high-resolution site assets until the original blog photos are supplied.
export const blogs = [
  {
    slug: "best-tourist-places-to-visit-in-pune",
    title: "Best Tourist Places to Visit in Pune",
    excerpt: "",
    image: "/city-pune-hero.png",
    imageAlt: "Pune city and historic landmarks",
    likes: 5,
  },
  {
    slug: "goa-car-booking-online",
    title: "Goa Car Booking Online: Your Ticket to an Unforgettable Beach Getaway",
    excerpt:
      "Goa, a coastal paradise renowned for its stunning beaches and vibrant culture, invites travelers to bask in the sun and unwind by the sea.",
    image: "/city-goa-hero.png",
    imageAlt: "Goa coast and car rental",
    likes: 4,
  },
  {
    slug: "pune-travels-car-rental",
    title: "Pune Travels Car Rental: Your Gateway to Seamless Pune Exploration",
    excerpt:
      "Pune, a city steeped in history and culture, beckons travelers with its architectural marvels, educational institutions, and serene landscapes.",
    image: "/welcome-pune.png",
    imageAlt: "Travel in Pune",
    likes: 3,
  },
  {
    slug: "online-car-booking-in-mumbai",
    title: "The Ultimate Guide to Online Car Booking in Mumbai: Hassle-Free Travel Options",
    excerpt:
      "Mumbai, the bustling metropolis of India, is known for its vibrant energy and diverse attractions. When it comes to navigating this dynamic city and its surroundings,",
    image: "/welcome-mumbai.png",
    imageAlt: "Car booking in Mumbai",
    likes: 3,
  },
  {
    slug: "cab-for-airport",
    title: "Cab For Airport",
    excerpt:
      "Are you ready to embark on an unforgettable adventure? Look no further than SKG Travel, your trusted local travel company. With a passion for exploration and",
    image: "/about-premium-cab.png",
    imageAlt: "Premium cab for airport travel",
    likes: 3,
  },
  {
    slug: "agencies-should-use-social-media",
    title: "AGENCIES SHOULD USE SOCIAL MEDIA",
    excerpt:
      "Being present on social media helps you to communicate with your costumers and stay within their reach. This way whenever the customers will need a cab",
    image: "/skg-logo-hd.png",
    imageAlt: "SKG Travels social media",
    likes: 3,
  },
  {
    slug: "marketing-of-our-cab-service-online",
    title: "MARKETING OF OUR CAB SERVICE ONLINE",
    excerpt:
      "Cab services are very much used in today’s world. People prefer cab services more than any other transportation. Whenever a customer wants to hail a cab",
    image: "/city-hero.png",
    imageAlt: "Online cab service marketing",
    likes: 3,
  },
  {
    slug: "reputation-of-our-cab-service",
    title: "REPUTATION OF OUR CAB SERVICE",
    excerpt:
      "Reputation management in today’s world is one of the most important factors to be considered by all companies. It is important for us also to maintain",
    image: "/car-innova-crysta.png",
    imageAlt: "SKG Travels cab service",
    likes: 3,
  },
  {
    slug: "how-we-work",
    title: "HOW WE WORK",
    excerpt:
      "Most of our company’s work is done online. With the development of this mobile app from where customers can book a cab, our business is performing",
    image: "/city-mumbai-hero.png",
    imageAlt: "SKG Travels online booking",
    likes: 3,
  },
  {
    slug: "goals-to-achieve",
    title: "GOALS TO ACHIEVE",
    excerpt:
      "We SKG Travels, are working with the objective of providing the best cab services in Mumbai. Cab service is a luxury facility available everywhere. People prefer",
    image: "/car-ertiga.png",
    imageAlt: "SKG Travels car service",
    likes: 4,
  },
  {
    slug: "what-we-serve",
    title: "WHAT WE SERVE",
    excerpt:
      "Social media is a great way to attract customers if you have an online booking system on your company web page. You need to raise awareness",
    image: "/about-red-audi.png",
    imageAlt: "SKG Travels service car",
    likes: 4,
  },
];

export function getBlog(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
