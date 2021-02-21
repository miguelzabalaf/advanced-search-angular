export interface MenuItem {
  id: string,
  slug: string,
  name: string
}

export interface Product {
  id:           string;
  slug:         string;
  name:         string;
  img_url:      string;
  price:        number;
  in_offer:     boolean;
  offer_price?: number;
  categories:   string[];
  score:        number;
}
