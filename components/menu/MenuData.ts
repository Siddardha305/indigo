export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export const MENU_CATEGORIES = [
  "NIBBLES",
  "SOUPS & SALAD",
  "MAIN COURSE",
  "BREADS & RICE",
  "DESSERTS",
  "BEVERAGES",
  "COFFEE",
  "BREAKFAST"
];

export const MENU_DATA: Record<string, MenuItem[]> = {
  "NIBBLES": [
    {
      id: "n1",
      name: "BANG BANG SHRIMP",
      description: "Crispy fried shrimp tossed in a creamy, sweet + spicy chili aioli. With soft bun.",
      price: "14.99",
      category: "NIBBLES",
      image: "/menu/bang-bang-shrimp.png"
    },
    {
      id: "n2",
      name: "CHICKEN 65 (SPICY)",
      description: "South Indian classic of crispy chicken tossed with curry leaves and fiery spices.",
      price: "13.99",
      category: "NIBBLES",
      isSpicy: true
    },
    {
      id: "n3",
      name: "MASALA PAPAD",
      description: "Each dish is a reflection of our passion for flavor, bringing together tradition and story.",
      price: "11.99",
      category: "NIBBLES"
    },
    {
      id: "n4",
      name: "CHICKEN LOLLIPOP (SPICY)",
      description: "French-cut chicken wings in a tangy and spicy Indo-Chinese chili sauce.",
      price: "13.99",
      category: "NIBBLES",
      isSpicy: true
    },
    {
      id: "n5",
      name: "DRY CHILLI PANEER",
      description: "Each dish is a reflection of our passion for flavor, bringing together tradition and story.",
      price: "11.99",
      category: "NIBBLES",
      isVegetarian: true
    },
    {
      id: "n6",
      name: "DRY GOBI MANCHURIAN",
      description: "Crispy cauliflower tossed with onion, ginger, and green chilies.",
      price: "13.99",
      category: "NIBBLES",
      isVegetarian: true
    }
  ],
  "SOUPS & SALAD": [
    {
        id: "ss1",
        name: "LENTIL SOUP",
        description: "A warm, comforting lentil soup tempered with cumin and garlic.",
        price: "7.99",
        category: "SOUPS & SALAD",
        image: "/menu/lentil-soup.png",
        isVegetarian: true
    },
    {
        id: "ss2",
        name: "INDIGO SALAD",
        description: "Fresh greens, cucumber, tomatoes, and red onions with a citrus dressing.",
        price: "9.99",
        category: "SOUPS & SALAD",
        isVegetarian: true
    }
  ],
  "MAIN COURSE": [
    {
      id: "m1",
      name: "BUTTER CHICKEN",
      description: "A symphony of butter and spice that turns every bite into a memory.",
      price: "18.99",
      category: "MAIN COURSE",
      image: "/menu/butter-chicken.png"
    },
    {
      id: "m2",
      name: "CHICKEN HANDI",
      description: "Slow-cooked in spices, a flavor that lingers in the heart.",
      price: "17.99",
      category: "MAIN COURSE",
      image: "/menu/chicken-handi.png"
    },
    {
        id: "m3",
        name: "BEEF NIHARI",
        description: "A slow-cooked beef stew, rich and flavorful, served with ginger and lemon.",
        price: "20.99",
        category: "MAIN COURSE"
    }
  ],
  "BREADS & RICE": [
    {
        id: "br1",
        name: "GARLIC NAAN",
        description: "Freshly baked in the tandoor with garlic and butter.",
        price: "3.99",
        category: "BREADS & RICE",
        image: "/menu/garlic-naan.png",
        isVegetarian: true
    },
    {
        id: "br2",
        name: "ZAFRANI PILAU",
        description: "Aromatic basmati rice cooked with saffron and whole spices.",
        price: "8.99",
        category: "BREADS & RICE",
        isVegetarian: true
    }
  ],
  "DESSERTS": [
    {
        id: "d1",
        name: "GULAB JAMUN",
        description: "Deep-fried milk solids soaked in a warm sugar syrup flavored with cardamom.",
        price: "6.99",
        category: "DESSERTS",
        image: "/menu/gulab-jamun.png"
    },
    {
        id: "d2",
        name: "SHAHI TUKRAY",
        description: "A royal bread pudding enriched with saffron, milk, and nuts.",
        price: "8.99",
        category: "DESSERTS"
    }
  ],
  "BEVERAGES": [
    {
        id: "bv1",
        name: "MANGO LASSI",
        description: "A creamy and refreshing yogurt drink made with sweet mangoes.",
        price: "5.99",
        category: "BEVERAGES",
        image: "/menu/mango-lassi.png"
    },
    {
        id: "bv2",
        name: "MASALA CHAI",
        description: "Traditional spiced tea brewed with ginger and cardamom.",
        price: "3.99",
        category: "BEVERAGES"
    }
  ],
  "COFFEE": [
    {
        id: "c1",
        name: "CAPPUCCINO",
        description: "Balanced espresso and steamed milk, finished with a crown of foam.",
        price: "4.99",
        category: "COFFEE",
        image: "/menu/coffee.png"
    }
  ],
  "BREAKFAST": [
    {
        id: "bf1",
        name: "HALWA PURI",
        description: "Traditional breakfast with semolina pudding, spicy chickpea curry, and deep-fried puris.",
        price: "12.99",
        category: "BREAKFAST",
        image: "/menu/halwa-puri.png"
    }
  ]
};

export const OFFERS_DATA = [
  {
    id: "o1",
    tag: "Chef's Special",
    title: "ROYAL DINNER COMBO",
    description: "Enjoy Deluxe Chicken Curry, Naan, Rice, Raita and Gulab Jamun at Special price.",
    image: "/menu/offer1.png"
  },
  {
    id: "o2",
    tag: "Family Deal",
    title: "WEEKEND FEAST",
    description: "Share the love with our curated family platter for four.",
    image: "/menu/offer2.png"
  }
];

export const SPECIALS_DATA = [
  {
    id: "s1",
    name: "BUTTER CHICKEN",
    description: "A symphony of butter and spice that turns every bite into a memory.",
    image: "/menu/butter-chicken.png"
  },
  {
    id: "s2",
    name: "CHICKEN HANDI",
    description: "Slow-cooked in spices, a flavor that lingers in the heart.",
    image: "/menu/chicken-handi.png"
  },
  {
    id: "s3",
    name: "SAMOSA",
    description: "In every crisp layer lies a warm, flavorful story.",
    image: "/menu/samosa.png"
  },
  {
    id: "s4",
    name: "MANGO LASSI",
    description: "The sweetness of mango and yogurt in every sip.",
    image: "/menu/mango-lassi.png"
  }
];

export const SIGNATURE_DATA = [
  {
    id: "si1",
    date: "04 Mar",
    event: "KHUSHIYALI NIGHT",
    time: "7:00 PM – 10:30 PM",
    description: "Live Music performance with special delicacies.",
    buttonText: "Bоок Now",
    image: "/menu/signature1.png"
  },
  {
    id: "si2",
    date: "08 Mar",
    event: "FLAVOURS OF PUNJAB",
    time: "8:00 PM onwards",
    description: "Authentic Punjabi Buffet with unlimited drinks.",
    buttonText: "Bоок Now",
    image: "/menu/signature2.png"
  },
  {
    id: "si3",
    date: "10 Mar",
    event: "SUNDAY BRUNCH",
    time: "1:00 PM onwards",
    description: "Experience the ultimate brunch with over 50 items.",
    buttonText: "Bоок Now",
    image: "/menu/signature3.png"
  }
];
