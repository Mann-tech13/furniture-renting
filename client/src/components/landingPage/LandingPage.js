import React from "react";
import FurnitureList from "../landingPage/FurnitureList";

function LandingPage() {

  const furnitureItems = [
    {
      id: 1,
      FurnitureItemName: "Modern Sofa",
      price: "$300",
      category: "Living Room",
      img: "https://hips.hearstapps.com/hmg-prod/images/index-furniture-65f07553eef2f.jpg",
      color: "Gray",
    },
    {
      id: 2,
      FurnitureItemName: "Sofa sets",
      price: "$200",
      category: "Dining Room",
      img: "https://m.media-amazon.com/images/I/61cefoSfepS._AC_UF1000,1000_QL80_.jpg",
  
      color: "Brown",
    },
    {
      id: 3,
      FurnitureItemName: "Table Set",
      price: "$100",
      category: "Office",
      img: "https://image.made-in-china.com/202f0j00KPyYMJnFtOos/12-mm-Glass-Top-Tea-Table-Design-for-Living-Room-Furniture.jpg",
  
      color: "Black",
    },
    {
      id: 4,
      FurnitureItemName: "Office Chair",
      price: "$100",
      category: "Office",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehNne0m0YCtfTOgzgKcMUe7UJLjXQNsuyKA&s",
  
      color: "Black",
    },
    {
      id: 5,
      FurnitureItemName: "Office Chair",
      price: "$100",
      category: "Office",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcb57O7PznNUdCK_GyncNFuGMsA5xoB4XkA&s",
  
      color: "Black",
    },
    {
      id: 6,
      FurnitureItemName: "Sofa set",
      price: "$199",
      category: "Office",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg",
  
      color: "Black",
    },
    // Add more items as needed
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
