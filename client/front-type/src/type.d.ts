interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

type ApiDataType = {
  message: string;
  status: string;
  products: Product[];
  product?: Product;
};
