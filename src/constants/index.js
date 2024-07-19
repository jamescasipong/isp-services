import { avatar, globe, calendar, lock } from "../assets/index.js";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const heading = [
  {
    id: "1",
    logo: avatar,
    title: "Subheading",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    id: "2",
    logo: globe,
    title: "Subheading",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    id: "3",
    logo: calendar,
    title: "Subheading",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
  {
    id: "4",
    logo: lock,
    title: "Subheading",
    description:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
  },
];

export const footer = [
  {
    key: "1",
    id: "home",
    title: "Home",
    links: [
      {
        id: "1",
        name: "Content",
        links: "#",
      },
      {
        id: "2",
        name: "Explore",
        links: "#",
      },
      {
        id: "3",
        name: "Notes",
        links: "#",
      },
    ],
  },
  {
    key: "2",
    id: "features",
    title: "Community",
    links: [
      {
        id: "1",
        name: "Help Center",
        links: "#",
      },
      {
        id: "2",
        name: "NewsLetters",
        links: "#",
      },
      {
        id: "3",
        name: "Blog",
        links: "#",
      },
    ],
  },
  {
    key: "3",
    id: "contact",
    title: "Partner",
    links: [
      {
        id: "1",
        name: "Our Partner",
        links: "#",
      },
      {
        id: "2",
        name: "Become a Partner",
        links: "#",
      },
    ],
  },
];

export const plans = [
  {
    id: "1",
    name: "FiberX - 100 Mbps",
    prices: "₱1500",
    deadline: "per month",
    f1: " Stream Music,  download movies and photos",
    f2: " Video conferencing",
    f3: "Free Access to BlastTV",
    f4: "Data Roaming",
  },
  {
    id: "2",
    name: "FiberZ - 200 Mbps",
    prices: "₱2500",
    deadline: "per month",
    f1: " Stream Music",
    f2: " Faster photo and movie downloads",
    f3: " Video Conferencing",
    f4: " Supports online learning & remote work",
  },

  {
    id: "3",
    name: "FiberPlus - 300 Mbps",
    prices: "$3500",
    deadline: "per month",
    f1: " WiFi-6 Next Gen Modem for improved WiFi speed",
    f2: "Best streaming experience with BlastTV and FiberTV",
    f3: "Fast Downloads & No Lags",
    f4: "Data Roaming",
  },
];
