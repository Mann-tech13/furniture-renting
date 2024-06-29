import { React, useState } from "react";
import {
  ArrowRightIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const FurnitureItem = (props) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist); // Toggle isInWishlist state

    // Call addToWishlist function from props to update the wishlist array
    props.addToWishlist(props.id, !isInWishlist);
  };

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <div>
          <img
            className="w-[400px] h-[200px]"
            src={props.img}
            alt={props.FurnitureItemName}
          />
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <Link
              to="/cart"
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Rent Now
              <span className="ml-2">
                <ShoppingCartIcon className="h-5 w-5 text-gray-500 group-hover:text-primeColor" />
              </span>
            </Link>

            <Link
              to="/view-details/id"
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="ml-2">
                <ArrowRightIcon className="h-5 w-5 text-gray-500 group-hover:text-primeColor" />
              </span>
            </Link>
            {props.listType !== "My collections" && (
              <li
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                onClick={handleAddToWishlist} // Handle wishlist addition on click
              >
                {isInWishlist ? (
                  <>
                    Added to Collections
                    <span className="ml-2">
                      <HeartIcon
                        color="red"
                        className="h-5 w-5 text-red-500 group-hover:text-primeColor"
                      />
                    </span>
                  </>
                ) : (
                  <>
                    Add to Collections
                    <span className="ml-2">
                      <HeartIcon className="h-5 w-5 text-gray-500 group-hover:text-primeColor" />
                    </span>
                  </>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.FurnitureItemName}
          </h2>
          <p className="text-[#767676] text-[14px]">{props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureItem;
