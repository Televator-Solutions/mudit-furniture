import { ProductCategory } from './product';

export type Category = {
  id: string;
  slug: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCountText: string;
  highlights: string[];
};
