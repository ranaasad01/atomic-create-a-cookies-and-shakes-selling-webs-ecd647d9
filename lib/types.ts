export type Category = "cookies" | "shakes" | "bundles";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: Category;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  isBestseller?: boolean;
  isFeatured?: boolean;
  calories?: number;
  allergens?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface OrderDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  deliveryNotes?: string;
  paymentMethod: "card" | "cash";
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}
