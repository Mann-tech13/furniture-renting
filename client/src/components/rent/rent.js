import React, { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Rent() {
  const [images, setImages] = useState([]);
  const [furnitureName, setFurnitureName] = useState("");
  const [description, setDescription] = useState("");
  const [rentalAmt, setRentalAmt] = useState("");
  const [category, setCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "Sofas and Couches",
    "Chairs",
    "Tables",
    "Beds",
    "Storage",
    "Desks",
    "Shelving",
    "Cabinets",
    "Others",
  ];

  const submitRentForm = () => {
    const formData = {
      furnitureName,
      description,
      rentalAmt,
      category,
      images,
    };
    console.log(formData);
  };

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const addImage = () => {
    setImages([...images, null]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCategory = (cat) => {
    setCategory(cat);
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-gray-800">
        Got some unused furniture? Rentify it.
      </h1>
      <div className="p-5 border mx-20 mt-5 bg-white shadow-md rounded-md items-center">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Images
            </label>
            {images.map((image, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500"
                  onChange={(e) => handleImageChange(e, index)}
                />
                <button type="button" onClick={() => removeImage(index)}>
                  <XMarkIcon className="h-6 w-6 text-red-500 ml-2" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addImage}
              className="flex items-center text-blue-500 mt-2 border p-1"
            >
              <PlusIcon className="h-6 w-6" />
              <span className="ml-2">Add Image</span>
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Furniture Name
            </label>
            <input
              type="text"
              className="block w-full px-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10"
              onChange={(e) => setFurnitureName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="block w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                aria-labelledby="listbox-label"
              >
                <span className="block truncate">
                  {category || "Select a category"}
                </span>
              </button>
              {isDropdownOpen && (
                <ul
                  className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-0"
                  tabIndex={1}
                >
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                      id="listbox-option-0"
                      role="option"
                      aria-selected={true}
                      onClick={() => selectCategory(cat)}
                    >
                      <span className="font-normal block truncate">{cat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              className="h-10 px-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rental Amount (per day)
            </label>
            <input
              type="number"
              className="h-10 px-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e) => setRentalAmt(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={submitRentForm}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Rent;
