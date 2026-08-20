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
  price: number;
  images: string[];
  description: string;
  details?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface FavoriteStore {
  favorites: string[];
  toggle: (id: string) => void;
  isFavorite: (id: string) => boolean;
}
