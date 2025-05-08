export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  discount?: number;
  fastShipping?: boolean;
}

const products: Product[] = [
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    category: "iPhone",
    price: 7999,
    imageUrl:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "iPhone 13 Pro Max is the most advanced model in the iPhone 13 lineup, featuring a 6.7-inch Super Retina XDR display, 12MP Pro camera system, and A15 Bionic chip.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A15 Bionic chip",
      "12MP Pro camera system",
      "Up to 28 hours of video playback",
      "Face ID",
    ],
    inStock: true,
    isNew: true,
    fastShipping: true,
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    category: "iPhone",
    price: 6999,
    imageUrl:
      "https://images.unsplash.com/photo-1638303345113-f93a4ebd0d28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "iPhone 13 Pro combines a beautiful design with exceptional performance, including a 6.1-inch Super Retina XDR display, 12MP Pro Camera, and A15 Bionic chip.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "12MP Pro camera system",
      "Up to 22 hours of video playback",
      "Face ID",
    ],
    inStock: true,
    isNew: true,
    fastShipping: true,
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    category: "iPhone",
    price: 5999,
    imageUrl:
      "https://images.unsplash.com/photo-1632582593957-14d57ff3f55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "iPhone 13 offers a 6.1-inch Super Retina XDR display, dual 12MP camera system, and A15 Bionic chip for exceptional performance.",
    features: [
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual 12MP camera system",
      "Up to 19 hours of video playback",
      "Face ID",
    ],
    inStock: true,
    discount: 10,
    fastShipping: true,
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 Mini",
    category: "iPhone",
    price: 4999,
    imageUrl:
      "https://images.unsplash.com/photo-1621687946327-bbc6ee289f79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "iPhone 13 Mini is compact yet powerful, featuring a 5.4-inch Super Retina XDR display, dual 12MP camera system, and A15 Bionic chip.",
    features: [
      "5.4-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual 12MP camera system",
      "Up to 17 hours of video playback",
      "Face ID",
    ],
    inStock: true,
    discount: 15,
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    category: "Accessory",
    price: 1999,
    imageUrl:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "AirPods Pro offer active noise cancellation, transparency mode, and a custom fit for all-day comfort.",
    features: [
      "Active noise cancellation",
      "Transparency mode",
      "Custom fit",
      "Sweat and water resistant",
      "Spatial audio",
    ],
    inStock: true,
    fastShipping: true,
  },
  {
    id: "carregador-usb-c",
    name: "20W USB-C Charger",
    category: "Accessory",
    price: 299,
    imageUrl:
      "https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "Apple's 20W USB-C charger for fast charging your iPhone, iPad, and other compatible devices.",
    features: [
      "20W power",
      "USB-C connector",
      "Fast charging",
      "Compatible with iPhone and iPad",
      "Compact design",
    ],
    inStock: true,
    discount: 5,
  },
  {
    id: "cabo-usb-c-lightning",
    name: "USB-C to Lightning Cable",
    category: "Accessory",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1602526429245-7026199c11d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "Apple's USB-C to Lightning cable for fast charging your iPhone and other compatible devices.",
    features: [
      "1m length",
      "USB-C and Lightning connectors",
      "Fast charging",
      "Data transfer",
      "Durable design",
    ],
    inStock: true,
    discount: 5,
    fastShipping: true,
  },
  {
    id: "magsafe-charger",
    name: "MagSafe Charger",
    category: "Accessory",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1616348579998-a024c78d18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "The MagSafe charger magnetically attaches to iPhone 12 and later for faster and more convenient wireless charging.",
    features: [
      "Magnetic connection",
      "Wireless charging",
      "Up to 15W of power",
      "Compatible with iPhone 12 and later",
      "Compact design",
    ],
    inStock: false,
    isNew: true,
  },
];

export default products;
