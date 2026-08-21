export type ProductCategory = 
  | 'living-room'
  | 'bedroom'
  | 'office'
  | 'dining'
  | 'storage'
  | 'custom';

export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: ProductCategory;
  description: string;
  image: string;
  fallbackImage?: string;
  featured?: boolean;
  dimensions?: string;
  material?: string;
  finish?: string;
  warranty?: string;
  tags?: string[];
  popularFor?: string;
};
