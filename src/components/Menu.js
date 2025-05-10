import React from 'react';

export default function Menu({ addToCart }) {
    const items = [
        { name: "Cheeseburger", price: 8.99, image: process.env.PUBLIC_URL + "/cheeseburger.jpeg" },
        { name: "Fries", price: 3.99, image: process.env.PUBLIC_URL + "/fries.jpeg" },
        { name: "Pizza", price: 10.99, image: process.env.PUBLIC_URL + "/pizza.jpeg" },
        { name: "Hot Dog", price: 5.49, image: process.env.PUBLIC_URL + "/hotdog.jpeg" },
        { name: "Milkshake", price: 4.99, image: process.env.PUBLIC_URL + "/milkshake.jpeg" },
        { name: "Salad", price: 6.99, image: process.env.PUBLIC_URL + "/salad.jpeg" },
      ];
      
  return (
    <div className="container py-5" id="menu">
      <h2 className="text-center">Our Menu</h2>
      <div className="row">
        {items.map((item, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <div className="card h-100 text-center">
            <img
  src={item.image}
  alt={item.name}
  className="card-img-top"
  style={{ height: '180px', width: '100%', objectFit: 'cover' }}
/>

              <div className="card-body">
                <h5>{item.name}</h5>
                <p>${item.price.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
