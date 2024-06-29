import React from "react";
import FurnitureList from "../landingPage/FurnitureList";

function LandingPage() {
  const user = {
    profilePicture:
      "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg",
    // Other user properties
  };

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
    <div>
      <div>
        <FurnitureList furnitureItems={furnitureItems} listType="Home Makeovers, Made Affordable." />
      </div>
    </div>
  );
}

export default LandingPage;
