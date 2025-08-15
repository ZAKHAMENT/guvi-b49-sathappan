import { useState } from 'react';
import './App.css';

function App() {
  const [petCard, setPetCard] = useState(0);

  const data = [
    {
      name: 'Jerman Shepard',
      price: '$200',
      gender: 'male',
      type: 'adult',
      skinType: 'nature color, full coat',
      size: '2,7',
      attitude: 'friendly',
      images: [
        '/german_shepard.jpg'
      ],
    },
    {
      name: 'Rottweiler',
      price: '$250',
      gender: 'male',
      type: 'black, cub / 3 weeks old',
      skinType: 'Low skin',
      size: '2,4',
      attitude: 'aggressive',
      images: [
        '/Rottweiler.webp',
      ],
    },
    {
      name: 'Golden Retriever',
      price: '$110',
      gender: 'female',
      type: 'mid-cub',
      skinType: 'nature colour, smooth hairy',
      size: '1,3',
      attitude: 'friendly and calm',
      images: [
        '/golden_retriever.jpg'
      ],
    },
    {
      name: 'Doberman',
      price: '$190',
      gender: 'male',
      type: 'cub',
      skinType: 'grey brown, low skin',
      size: '1,7',
      attitude: 'friendly, guardian',
      images: [
        '/doberman.jpg'
      ],
    },
  ];


  const handleBuyClick = (petName) => {
    // Replace this with your logic to handle the "Buy" action
  };

  const handleAddToCartClick = (petName) => {
    // Replace this with your logic to handle the "Add to Cart" action
    alert(`Added ${petName} to your cart`);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-content">
          <h2> Pet Shop</h2>
          <button className="cart-btn">
  <svg
    className="cart-icon"
    width={38}
    height={38}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.586 17.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828Z" />
    <path d="M8.414 20.414a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828Z" />
    <path d="m7 13-2.293 2.293c-.63.63-.184 1.707.707 1.707H17" />
    <path d="M5.4 5H21l-4 8H7L5.4 5Z" />
    <path d="M3 3h2l.4 2" />
  </svg>
</button>

        </div>
      </div>
      <div className="pet-cards">
        {data.map((pet, index) => (
          <div key={index} className="pet-card">
            {pet.images.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={`/img/${image}`}
                alt={pet.name}
                className="pet-image"
              />
            ))}
            <div className="pet-info">
              <h2>{pet.name}</h2>
              <p>Price: {pet.price}</p>
              <p>Type: {pet.type}</p>
              <p>Skin Type: {pet.skinType}</p>
              <p>Size: {pet.size}</p>
              <p>Attitude: {pet.attitude}</p>
            </div>
            <button
              onClick={() => handleBuyClick(pet.name)}
              className="btn-donate"
            >
              Buy
            </button>
            <button
              onClick={() => handleAddToCartClick(pet.name)}
              className="btn-buy"
            >
              Add to Cage
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;