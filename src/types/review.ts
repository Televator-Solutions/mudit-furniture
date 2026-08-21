export type Review = {
  id: string;
  author: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
  highlightTopic?: string;
  verified?: boolean;
};
