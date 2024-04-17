import { useState } from 'react';

const ShoppingCart = () => {
    const [products, setProducts] = useState([
      { id: 6, name: 'Ball', price: '-/50', image: 'https://i.pinimg.com/736x/3a/ad/d4/3aadd4e7760b812e6789c859978745a8.jpg', description: 'extra chocolaty biscuits and good for health and your immune', inCart: false },
      { id: 1, name: 'Bathing Soap', price: '-/45', image: 'https://i.pinimg.com/736x/65/f9/f2/65f9f2a3c924209c97c6fbe086d6c6a4.jpg', description: 'This soap good for your health', inCart: false },
      { id: 2, name: 'Mango Juice', price: '-/95', image: 'https://i.pinimg.com/736x/01/06/7d/01067dfc4831c369b7f5719071c1a4a8.jpg', description: 'Let try our tasty juice', inCart: false },
      { id: 3, name: 'Tooth Paste', price: '-/30', image: 'https://i.pinimg.com/736x/13/0f/a1/130fa11176c5d790fcf347a3c1db8421.jpg', description: 'Extra comfortable tooth brush and soft brisiles. Highly recommend', inCart: false },
      { id: 4, name: 'Hair Oil', price: '-/280', image: 'https://i.pinimg.com/736x/d3/d8/a2/d3d8a2ce15eb13f60fadb98c39bc2bb1.jpg', description: 'This is good for white hair', inCart: false },
      { id: 5, name: 'Cookies', price: '-/360', image: 'https://i.pinimg.com/736x/3a/ad/d4/3aadd4e7760b812e6789c859978745a8.jpg', description: 'extra chocolaty biscuits and good for health and your immune', inCart: false },

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
            <p>Cart Quantity : <strong className='cartCount'>{cartCount}</strong></p>
          </div>
          <div className='main-content'>
        <h3>Available Products:</h3>
        <ul className="product-grid">
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className='product-details'>
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
  