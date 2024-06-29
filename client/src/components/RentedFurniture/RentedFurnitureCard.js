// src/components/RentedFurnitureCard.js
import React from 'react';

function RentedFurnitureCard({ order }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-full p-4 transition-transform transform hover:scale-105 duration-300">
      <img src={order.image} alt={order.title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{order.title}</h3>
        <p className="text-gray-600 mb-2"><strong>Rental Date:</strong> {order.rentalDate}</p>
        <p className="text-gray-600 mb-2"><strong>Return Date:</strong> {order.returnDate}</p>
        <p className="text-gray-600"><strong>Status:</strong> <span className={order.status === 'Returned' ? 'text-green-500' : 'text-red-500'}>{order.status}</span></p>
      </div>
    </div>
  );
}

export default RentedFurnitureCard;
