import React from "react";
import FurnitureList from "../landingPage/FurnitureList";

function Collections() {
  const furnitureItems = [
    {
      id: 1,
      FurnitureItemName: "Modern Sofa",
      price: "$300",
      category: "Living Room",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",
      color: "Gray",
    },
    {
      id: 2,
      FurnitureItemName: "Dining Table",
      price: "$200",
      category: "Dining Room",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",

      color: "Brown",
    },
    {
      id: 3,
      FurnitureItemName: "Office Chair",
      price: "$100",
      category: "Office",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",

      color: "Black",
    },
    {
      id: 4,
      FurnitureItemName: "Office Chair",
      price: "$100",
      category: "Office",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",

      color: "Black",
    },
  ];
  return (
    <div className="bg-gray-100">
      <FurnitureList furnitureItems={furnitureItems} listType="My collections" />
    </div>
  );
}

export default Collections;
