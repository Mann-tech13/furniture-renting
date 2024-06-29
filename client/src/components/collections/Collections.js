import React from "react";
import FurnitureList from "../landingPage/FurnitureList";

function Collections() {
  const furnitureItems = [
    {
      id: 1,
      FurnitureItemName: "Modern Sofa",
      price: "$199",
      category: "Living Room",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",
      color: "Green",
    }
  ];
  return (
    <div className="bg-gray-100">
      <FurnitureList furnitureItems={furnitureItems} listType="My collections" />
    </div>
  );
}

export default Collections;
