export interface EventItem {
  id: string;
  date: string;
  month: string;
  title: string;
  time: string;
  description: string;
  highlights: string[];
  category: string;
  image: string;
}

export const EVENT_CATEGORIES = [
    "ALL",
    "MIDWEEK SPECIALS",
    "CHAT",
    "CULTURAL",
    "BRUNCH",
    "OFFERS",
    "UPCOMING"
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "e1",
    date: "08",
    month: "Mar",
    title: "INDIGO CULTURE NIGHT",
    time: "8:00 PM onwards",
    description: "Traditional ambiance + Live music",
    highlights: ["Sufi Music", "Live Singer", "Authentic Flavors"],
    category: "CULTURAL",
    image: "/events/culture-night.png"
  },
  {
    id: "e2",
    date: "10",
    month: "Mar",
    title: "INDIGO CHAAT EXPERIENCE",
    time: "7:00 PM onwards",
    description: "Street city adventures with a revised twist",
    highlights: ["New Highlights", "Spicy Chaat", "Sweet & Tangy"],
    category: "CHAT",
    image: "/events/chaat-exp.png"
  },
  {
    id: "e3",
    date: "04",
    month: "Mar",
    title: "MIDWEEK GRILL NIGHT",
    time: "7:00 PM – 10:30 PM",
    description: "Experience the sizzle of the grill",
    highlights: ["Live BBQ", "Grill Specials", "Chef's Secret Sauce"],
    category: "MIDWEEK SPECIALS",
    image: "/events/grill-night.png"
  },
  {
    id: "e4",
    date: "04",
    month: "Mar",
    title: "MIDWEEK GRILL NIGHT",
    time: "7:00 PM – 10:30 PM",
    description: "Experience the sizzle of the grill",
    highlights: ["Live BBQ", "Grill Specials", "Chef's Secret Sauce"],
    category: "MIDWEEK SPECIALS",
    image: "/events/grill-night-2.png"
  }
];
