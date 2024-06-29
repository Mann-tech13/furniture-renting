import React, { useState } from "react";
import DatePicker, {
  getAllDatesInRange,
} from "react-multi-date-picker";

function Cart() {
  const [value, setValue] = useState(new Date());
  const [amount, setAmount] = useState([1]);
  return (
    <div>
      <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold mb-6 text-center">Your Cart</h1>

        <div class="bg-white shadow-xl rounded-lg p-8 mb-6">
          <div class="flex items-center flex-col lg:flex-row">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg"
              alt="Product"
              class="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded mb-4 lg:mb-0"
            />
            <div class="lg:ml-6 flex-grow">
              <h2 class="text-2xl font-semibold mb-2">Product Title</h2>
              <p class="text-gray-600 mb-4">
                Product description goes here. It's a brief detail about the
                product. This product is amazing and will satisfy your needs
                perfectly.
              </p>
              <div class="mb-4">
                <label
                  for="delivery-date"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Booking Slot
                </label>
                <DatePicker
                  value={value}
                  onChange={(res) => setAmount(getAllDatesInRange(res))}
                  range={true}
                />
              </div>
            </div>
            <div class="lg:ml-auto">
              <p class="text-2xl font-semibold text-gray-700">$100</p>
            </div>
          </div>{" "}
          <div className=" flex justify-end">
            <button className="bg-themeRed text-white w-1/6 p-2 rounded-md ">
              Pay ${amount.length * 100}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
