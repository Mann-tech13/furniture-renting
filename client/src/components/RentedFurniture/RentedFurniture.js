// src/pages/RentedFurniture.js
import React from 'react';
import RentedFurnitureList from './RentedFurnitureList';

const orders = [
  {
    id: 1,
    title: 'Modern Sofa',
    rentalDate: '2023-01-15',
    returnDate: '2023-02-15',
    status: 'Returned',
    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",

  },
  {
    id: 2,
    title: 'Dining Table Set',
    rentalDate: '2023-02-01',
    returnDate: '2023-03-01',
    status: 'Returned',
    image: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",

  },
  // Add more orders as needed
];

function RentedFurniture() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Past Rental Orders</h1>
        <RentedFurnitureList orders={orders} />
      </div>
    </div>
  );
}

export default RentedFurniture;
