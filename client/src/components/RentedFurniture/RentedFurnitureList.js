// src/components/RentedFurnitureList.js
import React from 'react';
import RentedFurnitureCard from './RentedFurnitureCard';

function RentedFurnitureList({ orders }) {
  return (
    <div className="flex flex-wrap">
      {orders.map((order) => (
        <div key={order.id} className="px-1 mb-1">
          <RentedFurnitureCard order={order} />
        </div>
      ))}
    </div>
  );
}

export default RentedFurnitureList;
