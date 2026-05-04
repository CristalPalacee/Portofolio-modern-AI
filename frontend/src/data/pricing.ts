import { PricingPlan } from "@/types/pricing.type";
import { pricingPlansId } from "@/data/price";

export const pricingPlans: PricingPlan[] = pricingPlansId.map(
  ({ slug, name, price, description, features, recommended }) => ({
    slug,
    name,
    price,
    description,
    features,
    recommended,
  }),
);
