export type PricingPlan = {
  slug: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};
