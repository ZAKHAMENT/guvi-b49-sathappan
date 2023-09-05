// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Product from './Product';
import Cart from './Cart';
import './App.css';

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    image: "https://i.dummyjson.com/data/products/1/4.jpg",
    
    },
  {
    id: 2,
    title: "iPhone X",
    description: "Model A19211 6.5-inch Super Retina HD display with OLED technology chip",
    price: 899,
    image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021",
    price: 280,
    image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  },
  {
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unreviled",
    price: 499,
    image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
  }
];

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Franky Mobile`s</h1>
        {products.map(product => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
