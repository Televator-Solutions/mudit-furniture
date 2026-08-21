export type GalleryItem = {
  id: string;
  title: string;
  category: 'living-room' | 'bedroom' | 'office' | 'chairs' | 'tables' | 'cabinets' | 'custom';
  categoryLabel: string;
  image: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
};
