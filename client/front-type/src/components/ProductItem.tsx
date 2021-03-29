import React from 'react';

type Props = ProductProps & {
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
};

const Item: React.FC<Props> = ({ product, updateProduct, deleteProduct }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{product.name}</h1>
        <span>{product.id}</span>
        <span>{product.category}</span>
        <span>{product.price}</span>
      </div>
      <div className="Card--button">
        <button onClick={() => updateProduct(product)}>Complete</button>
        <button onClick={() => deleteProduct(product.id)} className="Card--button__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
