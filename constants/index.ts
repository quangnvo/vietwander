// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/pricing", key: "pricing ", label: "Pricing " },
  { href: "/contact", key: "contact_us", label: "Contact" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  // "/person-1.png",
  // "/person-2.png",
  // "/person-3.png",
  // "/person-4.png",
  "/person-5.png",
  "/person-6.png",
  "/person-7.png",
  "/person-8.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Offline Maps",
    icon: "/map.svg",
    variant: "green",
    description:
      "Experience uninterrupted exploration with our offline maps, perfect for activities signal-challenged locations.",
  },
  {
    title: "Remind schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Set a reminder to organize a holiday adventure with friends, taking advantage of the enticing offers, streamlining the planning process.",
  },
  {
    title: "Augmented Reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Using augmented reality technology, our guide seamlessly navigates you from forests to mountains.",
  },
  {
    title: "New locations",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Explore new locations monthly with insights from our community, and stay updated on hidden gems, including shops and restaurants.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["About Vietwander", "Jobs", "Privacy Policy"],
  },
  {
    title: "Our Community",
    links: ["Solo wander", "Couple wander", "Group wander", "Family wander"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "+84 93-456-789" },
    { label: "Email Officer", value: "vietwandercustomer@vietwander.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    // "/twitter.svg",
    "/youtube.svg",
    // "/wordpress.svg",
  ],
};

// PRICING SECTION
export const pricingPlans = [
  {
    title: "Explorer",
    price: 0,
    currency: "USD",
    frequency: " / month",
    description:
      "Get started with our free plan and discover Vietnam's hidden gems.",
    features: ["Access to 50 popular destinations", "Basic travel guides"],
    cta: "Start for free",
    mostPopular: false,
  },
  {
    title: "Adventurer",
    price: 9,
    currency: "USD",
    frequency: " / month",
    description: "Perfect for solo travelers and explorers of all levels.",
    features: [
      "Access to 200+ destinations",
      "Detailed travel guides",
      "Priority customer support",
    ],
    cta: "Get started",
    mostPopular: true,
  },
  {
    title: "Wanderlust Pro",
    price: 19,
    currency: "USD",
    frequency: " / month",
    description: "Unlock the full experience and explore Vietnam like a pro.",
    features: [
      "Unlimited destination access",
      "Customized travel itineraries",
      "24/7 premium support",
      "Exclusive deals and offers",
    ],
    cta: "Upgrade now",
    mostPopular: false,
  },
];
