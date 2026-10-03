export type LaunchStatus = 'Launching Soon' | 'Available';

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  status: LaunchStatus;
  ingredients: string[];
  ritualGuide?: string;
  weight?: string;
  packagingNote?: string;
  // Shopify integration readiness fields
  shopifyHandle?: string;
  shopifyProductId?: string;
  price?: {
    amount: number;
    currencyCode: string;
    formatted?: string;
  };
}

export interface EthosPrinciple {
  number: string;
  title: string;
  quote: string;
  description: string;
}

export interface IngredientItem {
  id: string;
  name: string;
  hindiName?: string;
  botanicalName: string;
  role: string;
  story: string;
  notes: string[];
}
