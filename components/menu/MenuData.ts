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
  containsNuts?: boolean;
  isGlutenFree?: boolean;
}

export const MENU_CATEGORIES = [
  "BREAKFAST",
  "APPETIZERS",
  "SOUPS & SALADS",
  "MAIN COURSE",
  "CURRIES",
  "BREADS",
  "DESSERTS",
  "BEVERAGES"
];

export const MENU_DATA: Record<string, MenuItem[]> = {
  "BREAKFAST": [
    { id: "bf1", name: "Goat Keema", description: "Minced goat meat cooked with traditional spices.", price: "19.99", category: "BREAKFAST", image: "/imges/menu/indigo_s menu/goat kalimirch4.webp" },
    { id: "bf2", name: "Egg Bhurji / Egg Omelet", description: "Spiced scrambled eggs or classic omelet.", price: "9.99", category: "BREAKFAST" },
    { id: "bf3", name: "Halwa Puri Sabji", description: "Traditional breakfast with semolina pudding, spicy chickpea curry, and deep-fried puris.", price: "10.99", category: "BREAKFAST" },
    { id: "bf4", name: "Nihari", description: "Slow-cooked mutton simmered for hours with traditional spices.", price: "17.99", category: "BREAKFAST" },
    { id: "bf5", name: "Goat Paya (Seasonal)", description: "Slow-cooked goat trotters in a rich, spicy broth.", price: "19.99", category: "BREAKFAST" }
  ],
  "APPETIZERS": [
    { id: "ap1", name: "Dry Chilli Paneer", description: "Crispy cottage cheese tossed with bell peppers and fresh chilies in a flavorful Indo-Chinese sauce.", price: "14.99", category: "APPETIZERS", isVegetarian: true, image: "/imges/menu/indigo_s menu/chicken paneer.webp", isPopular: true },
    { id: "ap2", name: "Masala Papad", description: "Crispy papad topped with fresh tomatoes, onions, cucumber, cilantro, and chaat masala.", price: "3.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap3", name: "Veg Samosa (2 pcs)", description: "Crispy pastry filled with spiced potatoes, served with mint and tamarind chutney.", price: "4.99", category: "APPETIZERS", isVegetarian: true, image: "/imges/menu/our specials/samosa.webp", isPopular: true },
    { id: "ap4", name: "Keema Samosa (3 pcs)", description: "Crispy pastry filled with minced meat, served with mint and tamarind chutney.", price: "6.99", category: "APPETIZERS" },
    { id: "ap5", name: "Chicken Samosa (3 pcs)", description: "Crispy pastry filled with minced chicken, served with mint and tamarind chutney.", price: "6.99", category: "APPETIZERS" },
    { id: "ap6", name: "Bang Bang Shrimp", description: "Crispy fried shrimp tossed in house sauce.", price: "11.99", category: "APPETIZERS" },
    { id: "ap7", name: "Indigo Fish Fry", description: "Swai fried in a lightly spiced chickpea-flour batter until golden and tender.", price: "12.99", category: "APPETIZERS" },
    { id: "ap8", name: "Chicken Lollipop", description: "Juicy chicken wings, deep-fried and marinated in spices, dipped in a flavorful sauce.", price: "15.99", category: "APPETIZERS", isSpicy: true, image: "/imges/menu/indigo_s menu/chicken lollipops7.webp", isPopular: true },
    { id: "ap9", name: "Chicken Egg Rolls", description: "Minced chicken cooked with spices, wrapped in a soft roll, and lightly fried.", price: "6.99", category: "APPETIZERS" },
    { id: "ap10", name: "Dry Gobi Manchurian", description: "Cauliflower florets coated in corn starch and spices, tossed in a flavorful Indo-Chinese sauce.", price: "12.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap11", name: "Chicken 65", description: "Spicy, deep-fried chicken bites marinated with Indian spices.", price: "10.99", category: "APPETIZERS", isSpicy: true },
    { id: "ap12", name: "Pani Puri", description: "Hollow, crispy puris filled with spiced potatoes and chickpeas, served with tangy and spicy flavored water.", price: "8.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap13", name: "Dahi Puri", description: "Hollow, crispy balls filled with potatoes and brown chickpeas with tamarind sauce and sweet yogurt, thin crunchy noodles.", price: "8.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap14", name: "Samosa Chaat", description: "Chickpeas, sprinkled thin crunchy noodles, sweet yogurt, mint sauce, tamarind sauce.", price: "9.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap15", name: "Kachori Chaat", description: "Savory fried pastry, peanuts, and potatoes sprinkled with thin crunchy noodles, sweet yogurt, mint sauce, tamarind sauce.", price: "9.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap16", name: "Chicken Malai Boti", description: "Chicken marinated in hung curd, cream, and cardamom, then grilled to perfection.", price: "14.99", category: "APPETIZERS" },
    { id: "ap17", name: "Chicken Seekh Kebab", description: "Minced chicken marinated in aromatic spices, grilled to perfection.", price: "14.99", category: "APPETIZERS" },
    { id: "ap18", name: "Chicken Bihari Boti", description: "Thin chicken fillets marinated in yogurt, spices, and mustard oil, grilled to smoky perfection.", price: "14.99", category: "APPETIZERS" },
    { id: "ap19", name: "Beef Bihari Boti", description: "Thin beef fillets marinated in yogurt, spices, and mustard oil, grilled to smoky perfection.", price: "14.99", category: "APPETIZERS" },
    { id: "ap20", name: "Chicken Boti", description: "Tender chicken cubes marinated in Indian spices, sautéed with onions and bell peppers.", price: "11.99", category: "APPETIZERS", image: "/imges/menu/indigo_s menu/chicken boti.webp" },
    { id: "ap21", name: "Beef Kebab", description: "Minced beef marinated with aromatic Indian spices and grilled to perfection.", price: "14.99", category: "APPETIZERS" },
    { id: "ap22", name: "Tandoori Lamb Chops", description: "Juicy bone-in lamb chops marinated overnight in raw papaya and spices, perfectly grilled.", price: "15.99", category: "APPETIZERS" },
    { id: "ap23", name: "Indigo Fish Masala", description: "Swai fried in lightly spiced chickpea-flour batter until golden-tender.", price: "10.99", category: "APPETIZERS" },
    { id: "ap24", name: "Bombay Grill Fish", description: "Whole Pampano fish marinated in aromatic Bombay spices, grilled to perfection.", price: "19.99", category: "APPETIZERS", image: "/imges/menu/indigo_s menu/bombay grilled fish5.webp" },
    { id: "ap25", name: "Mix Grill Platter", description: "Chicken Bihari, chicken seekh kebab, Goat seekh kebab.", price: "31.99", category: "APPETIZERS" },
    { id: "ap26", name: "Paneer Tikka Nawabi", description: "Soft cubes of cottage cheese marinated in rich, aromatic spices and grilled to perfection.", price: "13.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap27", name: "Chicken Tikka Drumsticks", description: "Juicy chicken drumsticks marinated in yogurt, garlic, ginger, and aromatic spices.", price: "10.99", category: "APPETIZERS" },
    { id: "ap28", name: "Fries (Kids)", description: "Crispy golden fries.", price: "4.99", category: "APPETIZERS", isVegetarian: true },
    { id: "ap29", name: "Murgh Malai Boti (Kids)", description: "Mildly spiced grilled chicken.", price: "6.99", category: "APPETIZERS" },
    { id: "ap30", name: "Popcorn Chicken (Kids)", description: "Bite-sized crispy chicken pieces.", price: "5.99", category: "APPETIZERS" }
  ],
  "SOUPS & SALADS": [
    { id: "ss1", name: "Tomato Soup", description: "Smooth and creamy soup made with tomatoes and aromatic spices.", price: "4.99", category: "SOUPS & SALADS", isVegetarian: true },
    { id: "ss2", name: "Hot & Sour Soup", description: "Tangy and spicy soup, available with chicken or vegetarian.", price: "4.99", category: "SOUPS & SALADS" },
    { id: "ss3", name: "Manchow Soup", description: "Spicy soup with vegetables, available with chicken or vegetarian.", price: "4.99", category: "SOUPS & SALADS" }
  ],
  "MAIN COURSE": [
    { id: "mc1", name: "Chicken Schezwan Fried Rice", description: "Stir-fried rice with spicy Schezwan sauce, mixed chicken, and a hint of tangy heat.", price: "14.99", category: "MAIN COURSE", isSpicy: true },
    { id: "mc2", name: "Veg Schezwan Fried Rice", description: "Stir-fried rice with spicy Schezwan sauce, mixed vegetables, and a hint of tangy heat.", price: "13.99", category: "MAIN COURSE", isVegetarian: true, isSpicy: true },
    { id: "mc3", name: "Chicken Fried Rice", description: "Stir-fried rice with a medley of fresh chicken and subtle spices.", price: "13.99", category: "MAIN COURSE" },
    { id: "mc4", name: "Veg Fried Rice", description: "Stir-fried rice with mixed vegetables and a hint of tangy heat.", price: "12.99", category: "MAIN COURSE", isVegetarian: true },
    { id: "mc5", name: "Shrimp Fried Rice", description: "Flavorful stir-fried rice with succulent shrimp, mixed vegetables, and a hint of soy sauce.", price: "14.99", category: "MAIN COURSE" },
    { id: "mc6", name: "Chicken Hakka Noodles", description: "Stir-fried noodles tossed with crisp chicken and savory Asian sauces.", price: "13.99", category: "MAIN COURSE" },
    { id: "mc7", name: "Veg Hakka Noodles", description: "Stir-fried noodles tossed with crisp vegetables and savory Asian sauces.", price: "12.99", category: "MAIN COURSE", isVegetarian: true },
    { id: "mc8", name: "Chicken Schezwan Noodles", description: "Spicy stir-fried noodles with chicken and bold Schezwan flavors.", price: "14.99", category: "MAIN COURSE", isSpicy: true },
    { id: "mc9", name: "Veg Schezwan Noodles", description: "Spicy stir-fried noodles with vegetables and bold Schezwan flavors.", price: "13.99", category: "MAIN COURSE", isVegetarian: true, isSpicy: true },
    { id: "mc10", name: "Chicken Manchurian", description: "Crispy chicken tossed in a tangy, spicy sauce with onions and peppers.", price: "13.99", category: "MAIN COURSE", isSpicy: true },
    { id: "mc11", name: "Veg Manchurian", description: "Crispy vegetable balls tossed in Manchurian sauce.", price: "13.99", category: "MAIN COURSE", isVegetarian: true },
    { id: "mc12", name: "Chilli Chicken", description: "Spicy fried chicken with green chilies, onions, and bell pepper.", price: "10.99", category: "MAIN COURSE", isSpicy: true },
    { id: "mc13", name: "Indigo Special Triple Schezwan Noodles", description: "Fried rice, noodles, and vegetable balls tossed in a bold Schezwan sauce.", price: "14.99", category: "MAIN COURSE", isSpicy: true },
    { id: "mc14", name: "Veg Fried Rice (Kids Portion)", description: "Kid-friendly stir-fried rice with mixed vegetables.", price: "6.99", category: "MAIN COURSE", isVegetarian: true }
  ],
  "CURRIES": [
    { id: "cr1", name: "Goat Korma", description: "Bone-in goat cooked with onions and yogurt in a lightly spiced brown gravy. Served with white rice.", price: "19.99", category: "CURRIES", image: "/imges/menu/indigo_s menu/goat kalimirch4.webp" },
    { id: "cr2", name: "Hyderabadi Goat Curry", description: "Bone-in goat simmered in a rich brown curry with onions, coconut, and yogurt. Served with white rice.", price: "19.99", category: "CURRIES" },
    { id: "cr3", name: "Goat Keema", description: "Minced goat meat cooked with onions, garlic, ginger, and tomatoes. Served with white rice.", price: "19.99", category: "CURRIES", image: "/imges/menu/indigo_s menu/goat kalimirch4.webp" },
    { id: "cr4", name: "Kadhai Goat", description: "Tender goat meat cooked with tomatoes, garlic, and green chilies. Served with white rice.", price: "21.99", category: "CURRIES", isSpicy: true },
    { id: "cr5", name: "Nihari", description: "Slow-cooked mutton simmered for hours with traditional spices. Served with white rice.", price: "19.99", category: "CURRIES" },
    { id: "cr6", name: "Butter Chicken (Boneless)", description: "Tender boneless BBQ chicken in a creamy tomato-butter sauce. Served with white rice.", price: "16.99", category: "CURRIES", image: "/imges/menu/our specials/butter chicken.webp" },
    { id: "cr7", name: "Chicken Handi", description: "Whole bone-in chicken pieces slow-cooked with onions, yogurt, and traditional spices. Served with white rice.", price: "16.99", category: "CURRIES", image: "/imges/menu/our specials/chicken handi.webp" },
    { id: "cr8", name: "Chicken Tikka Masala (Boneless)", description: "Grilled BBQ chicken simmered in a creamy tomato-based sauce with onions and bell peppers. Served with white rice.", price: "16.99", category: "CURRIES" },
    { id: "cr9", name: "Peshawari Chicken Karahi", description: "Mixed bone-in chicken cooked with onion, green onions, cream, and yogurt. Served with white rice.", price: "17.99", category: "CURRIES" },
    { id: "cr10", name: "Kadhai Chicken", description: "Chicken cooked with garlic, onions, green chilies, and tomatoes in a tangy kadhai gravy. Served with white rice.", price: "17.99", category: "CURRIES", isSpicy: true },
    { id: "cr11", name: "Chicken Korma", description: "Tender chicken marinated in yogurt and slow cooked with onions and aromatic spices. Served with white rice.", price: "16.99", category: "CURRIES", image: "/imges/menu/indigo_s menu/chicken korma3.webp" },
    { id: "cr12", name: "Shrimp Masala", description: "Shrimp cooked with onions, tomatoes, garlic, ginger, and bold spices. Served with white rice.", price: "15.99", category: "CURRIES" },
    { id: "cr13", name: "Paneer Bhurji", description: "Crumbled cottage cheese cooked with onions, tomatoes, green chilies, ginger, and garlic. Served with white rice.", price: "14.99", category: "CURRIES", isVegetarian: true },
    { id: "cr14", name: "Paneer Makhani", description: "Cottage cheese cubes cooked in a rich tomato and onion cream gravy. Served with white rice.", price: "14.99", category: "CURRIES", isVegetarian: true },
    { id: "cr15", name: "Palak Paneer", description: "Soft paneer cubes simmered in a creamy spinach sauce with fenugreek and aromatic spices. Served with white rice.", price: "13.99", category: "CURRIES", isVegetarian: true },
    { id: "cr16", name: "Malai Kofta", description: "Soft vegetable dumplings simmered in a rich, creamy milk-based gravy. Served with white rice.", price: "15.99", category: "CURRIES", isVegetarian: true },
    { id: "cr17", name: "Chana Masala", description: "Chickpeas cooked with onions and tomatoes in a flavorful spiced gravy. Served with white rice.", price: "12.99", category: "CURRIES", isVegetarian: true },
    { id: "cr18", name: "Dal Makhani", description: "Kidney beans and whole urad slow-cooked in butter and cream with aromatic spices. Served with white rice.", price: "12.99", category: "CURRIES", isVegetarian: true },
    { id: "cr19", name: "Dal Tadka", description: "Yellow lentils cooked with onions and tomatoes in a flavorful spiced gravy. Served with white rice.", price: "12.99", category: "CURRIES", isVegetarian: true },
    { id: "cr20", name: "Veg Jalfrezi", description: "Mixed vegetables sautéed with onions, tomatoes, and bell peppers in a tangy, spiced gravy. Served with white rice.", price: "13.99", category: "CURRIES", isVegetarian: true }
  ],
  "BREADS": [
    { id: "br1", name: "Butter Naan", description: "Freshly baked naan bread with butter on top.", price: "2.99", category: "BREADS", isVegetarian: true, image: "/imges/menu/indigo_s menu/butter naan.webp" },
    { id: "br2", name: "Garlic Naan", description: "Naan bread with butter, garlic, and cilantro.", price: "3.99", category: "BREADS", isVegetarian: true, image: "/imges/menu/our specials/garlic naan.webp" },
    { id: "br3", name: "Bullet Naan", description: "Naan bread with butter, chili, cilantro, and sesame seeds.", price: "3.99", category: "BREADS", isVegetarian: true, isSpicy: true },
    { id: "br4", name: "Cheese Naan", description: "Naan bread with butter, filled with melted cheese.", price: "4.99", category: "BREADS", isVegetarian: true },
    { id: "br5", name: "Onion Kulcha", description: "Naan bread with butter, filled with green onions, red onions, and cilantro.", price: "4.99", category: "BREADS", isVegetarian: true },
    { id: "br6", name: "Butter Melt Chapati", description: "Soft whole wheat flatbread brushed with melted butter.", price: "0.99", category: "BREADS", isVegetarian: true },
    { id: "br7", name: "Tawa Paratha", description: "Thick whole wheat flatbread, pan-cooked with butter.", price: "3.99", category: "BREADS", isVegetarian: true },
    { id: "br8", name: "Premium Breadbasket", description: "Combination of butter naan, garlic naan, chili naan, paratha, and cheese naan.", price: "14.99", category: "BREADS", isVegetarian: true }
  ],
  "DESSERTS": [
    { id: "ds1", name: "Carrot Halwa", description: "A sweet dessert made with grated carrots, milk, sugar, and garnished with nuts.", price: "5.99", category: "DESSERTS", isVegetarian: true, image: "/imges/menu/indigo_s menu/carrot halva3.webp" },
    { id: "ds2", name: "Ras Malai", description: "Soft cheese dumplings soaked in sweet, creamy milk and garnished with nuts.", price: "6.99", category: "DESSERTS", isVegetarian: true, image: "/imges/menu/indigo_s menu/rabdi shot2.webp" },
    { id: "ds3", name: "Mawa Ice Cream", description: "Rich and creamy traditional Indian ice cream.", price: "5.99", category: "DESSERTS", isVegetarian: true },
    { id: "ds4", name: "Falooda Ice Cream", description: "Refreshing rose-flavored dessert with vermicelli and ice cream.", price: "5.99", category: "DESSERTS", isVegetarian: true }
  ],
  "BEVERAGES": [
    { id: "bv1", name: "Water", description: "Bottled water.", price: "1.99", category: "BEVERAGES" },
    { id: "bv2", name: "Sparkling Water", description: "Chilled sparkling water.", price: "2.99", category: "BEVERAGES" },
    { id: "bv3", name: "Soda", description: "Choice of Sprite, Coke, Coke Zero, Dr Pepper, or Ginger Ale.", price: "1.99", category: "BEVERAGES" },
    { id: "bv4", name: "Mango Lassi", description: "Refreshing, creamy yogurt drink with a rich mango flavor.", price: "5.99", category: "BEVERAGES", image: "/imges/menu/our specials/mango lassi.webp" },
    { id: "bv5", name: "Indigo Special Lassi", description: "Sweet lassi topped with a scoop of ice cream and dry fruit.", price: "7.99", category: "BEVERAGES" },
    { id: "bv6", name: "Salted Lassi", description: "Light and refreshing yogurt-based drink with a tangy taste.", price: "3.99", category: "BEVERAGES" },
    { id: "bv7", name: "Mojito", description: "Refreshing drink with mint and soda, served chilled.", price: "5.99", category: "BEVERAGES" },
    { id: "bv8", name: "Lassi Pitcher", description: "Perfect for sharing - large pitcher of our signature lassi.", price: "13.99", category: "BEVERAGES" },
    { id: "bv9", name: "Lemonade Pitcher", description: "Freshly made lemonade pitcher.", price: "12.99", category: "BEVERAGES" },
    { id: "bv10", name: "Coffee", description: "Freshly brewed coffee.", price: "2.99", category: "BEVERAGES" },
    { id: "bv11", name: "Chai", description: "Hot tea made with cow’s milk, served warm.", price: "2.99", category: "BEVERAGES", image: "/imges/menu/indigo_s menu/chai.webp" }
  ]
};

export const OFFERS_DATA = [
  {
    id: "o1",
    tag: "Chef's Special",
    title: "MIX GRILL PLATTER",
    description: "Enjoy Chicken Bihari, chicken seekh kebab, and Goat seekh kebab at a special price.",
    image: "/menu/mix-grill.png"
  },
  {
    id: "o2",
    tag: "Lunch Special",
    title: "CURRY & RICE COMBO",
    description: "Your choice of any classic curry served with fragrant basmati white rice.",
    image: "/menu/curry-combo.png"
  }
];

export const SPECIALS_DATA = [
  { id: "s1", name: "BUTTER CHICKEN", description: "A symphony of butter and spice that turns every bite into a memory.", image: "/imges/home/Most Loved Sec/butter chicken.webp", isPopular: true },
  { id: "s2", name: "GOAT KORMA", description: "Traditional bone-in goat cooked to perfection.", image: "/imges/home/Most Loved Sec/peshawari.webp", isPopular: true },
  { id: "s3", name: "SAMOSA CHAAT", description: "A tangy, spicy, and sweet explosion of flavors.", image: "/imges/home/Most Loved Sec/samosa.webp", isPopular: true },
  { id: "s4", name: "MANGO LASSI", description: "The sweetness of mango and yogurt in every sip.", image: "/imges/home/Most Loved Sec/mango lassi.webp", isPopular: true }
];

export const SIGNATURE_DATA = [
  {
    id: "si1",
    date: "04 Mar",
    event: "KHUSHIYALI NIGHT",
    time: "7:00 PM – 10:30 PM",
    description: "Live Music performance with special delicacies.",
    highlights: ["Live Gazals", "Mughlai Platter", "Royal Ambience"],
    buttonText: "Bоок Now",
    image: "/menu/signature1.png"
  },
  {
    id: "si2",
    date: "08 Mar",
    event: "FLAVOURS OF PUNJAB",
    time: "8:00 PM onwards",
    description: "Authentic Punjabi Buffet with unlimited drinks.",
    highlights: ["Clay Oven Tandoori", "Amritsari Kulcha", "Lassi Bar"],
    buttonText: "Bоок Now",
    image: "/menu/signature2.png"
  },
  {
    id: "si3",
    date: "10 Mar",
    event: "SUNDAY BRUNCH",
    time: "1:00 PM onwards",
    description: "Experience the ultimate brunch with over 50 items.",
    highlights: ["50+ Multi-cuisine items", "Live Dosa Station", "Unlimited Mimosas"],
    buttonText: "Bоок Now",
    image: "/menu/signature3.png"
  }
];
