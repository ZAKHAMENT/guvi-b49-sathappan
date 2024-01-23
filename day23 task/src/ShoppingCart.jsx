import { useState } from 'react';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
      { id: 1, name: 'Bathing Soap', price: '-/45', image: '/image/bath-soap-500x500.jpg', description: 'This mild bathing soap bar contains 100% more glycerine soaps making it an excellent choice for achieving visibly glowing skin.', inCart: false },
      { id: 2, name: 'Mango Juice', price: '-/95', image: '/image/mango-juice-slice-isolated-on-260nw-1095021272.webp', description: 'Low sugar mango juice and if you drink you get more energy. It good for health and you can use it for party purposes. Go for it!', inCart: false },
      { id: 3, name: 'Tooth Paste', price: '-/30', image: '/image/vector-isolated-object-illustration-oral-dental-care-toothbrush-toothpaste_311865-9441.jpg', description: 'Recommended Usage: Put a pea size amount of our Colgate toothpaste on the head of the toothbrush. It has solid brisiles to clean', inCart: false },
      { id: 4, name: 'Hair Oil', price: '-/280', image: '/image/composition-natural-organic-coconut-oil-600nw-1421356181.webp', description: 'You can apply it directly to your scalp as it comes with bottle. The ingredients are infused to make an ayurvedic concoction that allow healthy hair growth.', inCart: false },
      { id: 5, name: 'Cookies', price: '-/360', image: '/image/delicious-cookies-arrangement_23-2150707201.jpg', description: 'These biscuits do not contain maida and are made from Aashirvaad atta and they also have No Cholesterol and No Trans-fat and goo to eat', inCart: false },
    ]);
  
    const [cartCount, setCartCount] = useState(0);
  
    const addToCart = (productId) => {
      const updatedProducts = products.map(product => {
        if (product.id === productId) {
          return { ...product, inCart: true };
        }
        return product;
      });
  
      setProducts(updatedProducts);
      setCartCount(cartCount + 1);
    };
  
    const removeFromCart = (productId) => {
      const updatedProducts = products.map(product => {
        if (product.id === productId) {
          return { ...product, inCart: false };
        }
        return product;
      });
  
      setProducts(updatedProducts);
      setCartCount(cartCount - 1);
    };
  
    return (
        <div>
          <div className='head-letters'>
            <h2>Shopping Cart</h2><svg width={42} height={42} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
  <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
</svg>
            <p>Cart Quantity: {cartCount}</p>
          </div>
          <div className='main-content'>
            <h3>Available Products:</h3>
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.name} style={{ maxWidth: '25%', height: 'auto' }} />
                  <div id='rand'>
                    <strong>{product.name}</strong> <br />
                   <h4> Price: {product.price}{' '}</h4>
                    <p className='white'>{product.description}</p>
                    {product.inCart ? (
                      <button onClick={() => removeFromCart(product.id)}>Remove from cart</button>
                    ) : (
                      <button onClick={() => addToCart(product.id)}>Add to cart</button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      );
    };
    
  
  export default ShoppingCart;
  
