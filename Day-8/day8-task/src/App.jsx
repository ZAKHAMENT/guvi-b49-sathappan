import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';
import './App.css';

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },

  {
    id: 1,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip",
    price: 899,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },

  {
    id: 1,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },

  {
    id: 1,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021",
    price: 280,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },

  {
    id: 1,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
    price: 499,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  }
];

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
