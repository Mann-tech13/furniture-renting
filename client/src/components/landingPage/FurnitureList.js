import { React, useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem"; // Adjust the path as per your project structure

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
  // Add more items as needed
];

const FurnitureList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    console.log("wishlist::>>", wishlist);
  }, [wishlist]);

  // Function to add/remove item from wishlist
  const addToWishlist = (itemId, addToWishlist) => {
    if (addToWishlist) {
      // Add item to wishlist
      setWishlist([...wishlist, itemId]);
    } else {
      // Remove item from wishlist
      setWishlist(wishlist.filter((id) => id !== itemId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-5 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-5">Furniture Rental</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnitureItems.map((item) => (
            <FurnitureItem
              key={item.id}
              {...item}
              addToWishlist={addToWishlist}
              isInWishlist={wishlist.includes(item.id)} // Check if item is in wishlist
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureList;
