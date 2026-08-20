import { Product } from "@/types";

export const products: Product[] = [
  // ─── Robes Courtes ────────────────────────────────────────────────────────
  {
    id: "rc-001",
    slug: "robe-ambre",
    name: "Robe Ambre",
    category: "robes-courtes",
    price: 149,
    images: [
      "/images/products/robes-courtes/robe-ambre-1.jpg",
      "/images/products/robes-courtes/robe-ambre-2.jpg",
    ],
    description:
      "Une robe courte en soie fluide, cintrée à la taille par un fin ruban. Légère et lumineuse, parfaite pour les soirées estivales.",
    details: ["100% soie", "Coupe ajustée", "Fermeture invisible dans le dos"],
    isNew: false,
    isFeatured: true,
  },
  {
    id: "rc-002",
    slug: "robe-nacre",
    name: "Robe Nacre",
    category: "robes-courtes",
    price: 129,
    images: [
      "/images/products/robes-courtes/robe-nacre-v3.png",
      "/images/products/robes-courtes/robe-nacre-v3.png",
    ],
    description:
      "Blanc nacré et découpes délicates — cette robe courte est taillée dans un crêpe doux qui épouse la silhouette avec élégance.",
    details: ["Crêpe de soie", "Manches courtes", "Col V subtil"],
    isFeatured: false,
  },
  {
    id: "rc-003",
    slug: "robe-cerise",
    name: "Robe Cerise",
    category: "robes-courtes",
    price: 165,
    images: [
      "/images/products/robes-courtes/robe-cerise-1.jpg",
      "/images/products/robes-courtes/robe-cerise-2.jpg",
    ],
    description:
      "Robe courte en broderie anglaise rose pâle, avec un ourlet volantée qui danse au gré des mouvements.",
    details: ["Broderie anglaise", "Ourlet volantée", "Doublure intégrée"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "rc-004",
    slug: "robe-aurore",
    name: "Robe Aurore",
    category: "robes-courtes",
    price: 139,
    images: [
      "/images/products/robes-courtes/robe-aurore-v2.png",
      "/images/products/robes-courtes/robe-aurore-v2.png",
    ],
    description:
      "Coupe babydoll structurée avec bretelles fines et tissu satiné reflet rosé. Délicate et moderne à la fois.",
    details: ["Satin polyester", "Bretelles réglables", "Coupe trapèze"],
  },
  {
    id: "rc-005",
    slug: "robe-flora",
    name: "Robe Flora",
    category: "robes-courtes",
    price: 155,
    images: [
      "/images/products/robes-courtes/robe-flora-v2.png",
      "/images/products/robes-courtes/robe-flora-v2.png",
    ],
    description:
      "Imprimé floral sur fond blanc cassé, coupe wrap qui flatte toutes les silhouettes. Un classique revisité avec subtilité.",
    details: ["Viscose imprimée", "Coupe portefeuille", "Ceinture à nouer"],
    isNew: true,
  },

  // ─── Robes Longues ────────────────────────────────────────────────────────
  {
    id: "rl-001",
    slug: "robe-riviera",
    name: "Robe Riviera",
    category: "robes-longues",
    price: 229,
    images: [
      "/images/products/robes-longues/robe-riviera-v2.png",
      "/images/products/robes-longues/robe-riviera-v2.png",
    ],
    description:
      "Longue robe fluide en mousseline, façon déesse. La coupe empire et le tissu vaporeux créent une silhouette romantique inoubliable.",
    details: ["Mousseline de soie", "Coupe empire", "Encolure dos nu"],
    isFeatured: true,
  },
  {
    id: "rl-002",
    slug: "robe-vienne",
    name: "Robe Vienne",
    category: "robes-longues",
    price: 249,
    images: [
      "/images/products/robes-longues/robe-vienne-v2.png",
      "/images/products/robes-longues/robe-vienne-v2.png",
    ],
    description:
      "Robe longue à fente latérale, en satin doux. Minimalisme chic et sophistication à chaque pas.",
    details: ["Satin de qualité", "Fente latérale", "Fermeture zippée"],
    isFeatured: true,
  },
  {
    id: "rl-003",
    slug: "robe-celeste",
    name: "Robe Céleste",
    category: "robes-longues",
    price: 199,
    images: [
      "/images/products/robes-longues/robe-celeste-v2.png",
      "/images/products/robes-longues/robe-celeste-v2.png",
    ],
    description:
      "Robe longue col chemisier, en coton froissé naturellement. Légèreté bohème et allure assurée du matin au soir.",
    details: ["Coton froissé", "Col chemisier", "Manches longues"],
    isNew: true,
  },
  {
    id: "rl-004",
    slug: "robe-saphir",
    name: "Robe Saphir",
    category: "robes-longues",
    price: 275,
    images: [
      "/images/products/robes-longues/robe-saphir-1.jpg",
      "/images/products/robes-longues/robe-saphir-2.jpg",
    ],
    description:
      "Majestueuse robe longue en velours rose poudré, avec un décolleté V profond et des manches évasées. Pour les grandes occasions.",
    details: ["Velours côtelé", "Manches évasées", "Col V profond"],
  },
  {
    id: "rl-005",
    slug: "robe-paloma",
    name: "Robe Paloma",
    category: "robes-longues",
    price: 215,
    images: [
      "/images/products/robes-longues/robe-paloma-v2.png",
      "/images/products/robes-longues/robe-paloma-v2.png",
    ],
    description:
      "Robe longue asymétrique en jersey soyeux, une épaule dénudée et une drapée moderne qui redéfinit l'élégance contemporaine.",
    details: ["Jersey soyeux", "Asymétrique", "Une épaule"],
    isNew: true,
  },

  // ─── Ensembles ────────────────────────────────────────────────────────────
  {
    id: "en-001",
    slug: "ensemble-ivoire",
    name: "Ensemble Ivoire",
    category: "ensembles",
    price: 289,
    images: [
      "/images/products/ensembles/ensemble-ivoire-1.jpg",
      "/images/products/ensembles/ensemble-ivoire-2.jpg",
    ],
    description:
      "Deux pièces en satin ivoire : top caraco et pantalon large taille haute. L'équilibre parfait entre décontraction luxueuse et sophistication.",
    details: [
      "Top + Pantalon",
      "Satin ivoire",
      "Taille haute",
      "Vendus ensemble",
    ],
    isFeatured: true,
  },
  {
    id: "en-002",
    slug: "ensemble-rosewood",
    name: "Ensemble Rosewood",
    category: "ensembles",
    price: 259,
    images: [
      "/images/products/ensembles/ensemble-rosewood-v2.png",
      "/images/products/ensembles/ensemble-rosewood-v2.png",
    ],
    description:
      "Veste courte structurée et jupe crayon assorties en tweed rose poudré. La grâce d'un tailleur revisité au féminin.",
    details: ["Tweed rose", "Veste + Jupe crayon", "Boutons dorés"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "en-003",
    slug: "ensemble-alba",
    name: "Ensemble Alba",
    category: "ensembles",
    price: 235,
    images: [
      "/images/products/ensembles/ensemble-alba-1.jpg",
      "/images/products/ensembles/ensemble-alba-2.jpg",
    ],
    description:
      "Ensemble sportswear chic : crop top côtelé et short bermuda taille haute en matière premium. Casual et luxueux à la fois.",
    details: ["Jersey côtelé", "Top + Short", "Taille élastique"],
  },
  {
    id: "en-004",
    slug: "ensemble-velours",
    name: "Ensemble Velours",
    category: "ensembles",
    price: 319,
    images: [
      "/images/products/ensembles/ensemble-velours-1.jpg",
      "/images/products/ensembles/ensemble-velours-2.jpg",
    ],
    description:
      "Manteau court et pantalon slim en velours bordeaux rosé. Un ensemble automnal d'une richesse visuelle exceptionnelle.",
    details: ["Velours rose bordeaux", "Manteau + Pantalon", "Coupe slim"],
  },
  {
    id: "en-005",
    slug: "ensemble-lilas",
    name: "Ensemble Lilas",
    category: "ensembles",
    price: 245,
    images: [
      "/images/products/ensembles/ensemble-lilas-v2.png",
      "/images/products/ensembles/ensemble-lilas-v2.png",
    ],
    description:
      "Chemise oversize et pantalon fluide assortis en lin lavé lilas. La douceur d'un été méditerranéen capturée dans un ensemble.",
    details: ["Lin lavé", "Chemise + Pantalon", "Couleur lilas"],
    isNew: true,
  },

  // ─── Nouveautés ───────────────────────────────────────────────────────────
  {
    id: "nv-001",
    slug: "robe-seraphine",
    name: "Robe Séraphine",
    category: "nouveautes",
    price: 189,
    images: [
      "/images/products/nouveautes/robe-seraphine-v2.png",
      "/images/products/nouveautes/robe-seraphine-v2.png",
    ],
    description:
      "La nouvelle pièce maîtresse de la collection : robe mi-longue en soie matelassée rose, avec des détails de couture architecturaux.",
    details: ["Soie matelassée", "Mi-longue", "Coupe structurée"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "nv-002",
    slug: "robe-opale",
    name: "Robe Opale",
    category: "nouveautes",
    price: 175,
    images: [
      "/images/products/nouveautes/robe-opale-v2.png",
      "/images/products/nouveautes/robe-opale-v2.png",
    ],
    description:
      "Robe à reflets irisés en organza, longue et aérienne. Une pièce lumineuse qui capture la lumière à chaque mouvement.",
    details: ["Organza irisé", "Longueur maxi", "Légère et vaporeuse"],
    isNew: true,
    isFeatured: true,
  },
  {
    id: "nv-003",
    slug: "top-dentelle",
    name: "Top Dentelle",
    category: "nouveautes",
    price: 95,
    images: [
      "/images/products/nouveautes/top-dentelle-v2.png",
      "/images/products/nouveautes/top-dentelle-v2.png",
    ],
    description:
      "Haut en dentelle de Calais rose ivoire, légèrement translucide. À porter sur un caraco ou en pièce maîtresse avec un pantalon taille haute.",
    details: ["Dentelle de Calais", "Col rond", "Translucide"],
    isNew: true,
  },
  {
    id: "nv-004",
    slug: "jupe-plissee",
    name: "Jupe Plissée",
    category: "nouveautes",
    price: 115,
    images: [
      "/images/products/nouveautes/jupe-plissee-1.jpg",
      "/images/products/nouveautes/jupe-plissee-2.jpg",
    ],
    description:
      "Jupe mi-longue plissée en satin rose pâle, à taille élastique. Fluide et voluptueuse, elle accompagne chaque silhouette avec grâce.",
    details: ["Satin plissé", "Taille élastique", "Mi-longue"],
    isNew: true,
  },
  {
    id: "nv-005",
    slug: "veste-perlee",
    name: "Veste Perlée",
    category: "nouveautes",
    price: 210,
    images: [
      "/images/products/nouveautes/veste-perlee-v2.png",
      "/images/products/nouveautes/veste-perlee-v2.png",
    ],
    description:
      "Veste de soirée ornée de perles nacrées cousues à la main sur un tissu crêpe ivoire. Pièce de collection, quantités limitées.",
    details: [
      "Crêpe ivoire",
      "Perles nacrées main",
      "Édition limitée",
      "Doublure soie",
    ],
    isNew: true,
    isFeatured: true,
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
