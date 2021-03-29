import React, { useEffect, useState } from 'react';
import Item from './components/ProductItem';
import AddProduct from './components/AddProduct';
import { getProducts, addProduct, updateProduct, deleteProduct } from './Api';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (): void => {
    getProducts()
      .then(({ data: { products } }: Product[] | any) => setProducts(products))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveProduct = (e: React.FormEvent, formData: Product): void => {
    e.preventDefault();
    addProduct(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error('Error! Product not saved');
        }
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateProduct = (product: Product): void => {
    updateProduct(product)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Product not updated');
        }
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteProduct = (id: number): void => {
    deleteProduct(id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error('Error! Product not deleted');
        }
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="App">
      <h1>Produtos</h1>
      <AddProduct addProduct={handleSaveProduct} />
      {products.map((product: Product) => (
        <Item
          key={product.id}
          updateProduct={handleUpdateProduct}
          deleteProduct={handleDeleteProduct}
          product={product}
        />
      ))}
    </main>
  );
};

export default App;
