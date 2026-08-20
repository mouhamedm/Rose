// Core domain types for the ROSÉ e-commerce platform

export type CategorySlug =
  | "robes-courtes"
  | "robes-longues"
  | "ensembles"
  | "nouveautes";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  coverImage: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number; // in euros (e.g. 129.00)
  images: string[];
  description: string;
  details?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface FavoriteStore {
  favorites: string[]; // product ids
  toggle: (id: string) => void;
  isFavorite: (id: string) => boolean;
}
