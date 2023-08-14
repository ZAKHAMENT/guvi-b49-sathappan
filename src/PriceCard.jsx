import React from 'react';

class PriceCard extends React.Component {
  render() {
    const priceCardData = [
      {
        title: 'Basic Plan',
        price: '$19.99/month',
        features: ['Single User', '50GB Storage', 'Unlimited Public Projects','No Cutomer Care','Cost Subdomain'],
      },
      {
        title: 'Pro Plan',
        price: '$39.99/month',
        features: ['5 Users', '200GB Storage', 'Unlimited Public Projects','Customer Care','Free Subdomain'],
      },
      {
        title: 'Enterprise Plan',
        price: '$99.99/month',
        features: ['Unlimited Users', '2TB Storage', 'Unlimited Public Projects','Customer Care','Free Subdomain'],
      },
    ];

    return (
      <div className="price-card-container">
        {priceCardData.map((card, index) => (
          <div key={index} className="price-card">
            <h2 className="price-title">{card.title}</h2>
            <div className="price">{card.price}</div>
            <ul className="features">
              {card.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    );
  }
}

export default PriceCard;
