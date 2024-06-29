import { React, useState, useEffect } from "react";
import FurnitureItem from "./FurnitureItem"; 


const FurnitureList = ({furnitureItems, listType}) => {
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
      <h1 className="text-2xl font-semibold mb-5">{listType}</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnitureItems.map((item) => (
            <FurnitureItem
              key={item.id}
              {...item}
              addToWishlist={addToWishlist}
              isInWishlist={wishlist.includes(item.id)}
              listType={listType} // Check if item is in wishlist
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnitureList;
