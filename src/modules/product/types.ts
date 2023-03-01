export interface CatalogProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export interface CartProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  count: number;
  total: number;
}


export interface ProductDetails extends CatalogProduct {
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
