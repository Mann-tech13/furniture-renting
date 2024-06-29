import React, { useState } from "react";
import Modal from "../common/modal";

function Rent({ setIsRent }) {
  const [image1, setImage1] = useState();
  // const [image2, setImage2] = useState();
  // const [image3, setImage3] = useState();

  const [furnitureName, setFurnitureName] = useState('')
  const [description, setDescription] = useState('')
  const [rentalAmt, setRentalAmt] = useState('')
  const [category, setCategory] = useState('')



  const categories = [
    "Sofas and Couches",
    "Chairs",
    "Tables",
    "Beds",
    "Storage",
    "Desks",
    "Shelving",
    "Cabinets",
  ];

  const submitRentForm = () => {
    console.log(furnitureName, description, rentalAmt, category);
  }
  return (
    <div>
      <Modal setIsRent={setIsRent}>
        {/* <div className="mb-2">
          <form >
            <label for="file-input" class="sr-only">
              Choose file
            </label>
            <input
              type="file"
              name="file-input"
              id="file-input"
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
            />
          </form>
        </div> */}

        <form>
          <div class="mb-4">
            <label
              for="image1"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Image 1
            </label>
            {/* <img src="" alt="Image 1" class="w-full h-48 object-cover rounded mb-2"/> */}
            <input
              type="file"
              id="image1"
              name="image1"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </div>



          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Furniture Name
          </label>
          <div className="mt-2">
            <input
              id="furnitureName"
              name="furnitureName"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setFurnitureName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <input
              id="desc"
              name="desc"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Rental Amount (per day)
          </label>
        </div>
        <div className="flex flex-row justify-between items-start">
          <div>
            <div>
              <input
                id="rent"
                name="rent"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setRentalAmt(e.target.value)}
              />
            </div>
          </div>

          <details class="dropdown w-[200px]">
            <summary class="btn m-1">{category.length > 0 ? category : "Category"}</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {categories.map((list) => {
                return (
                  <li onClick={() => setCategory(list)}>
                    <p className="cursor-pointer">{list}</p>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <button className="bg-themeRed w-full mt-5 rounded-md p-1 text-white" onClick={() => submitRentForm()}>Submit</button>
      </Modal>
    </div>
  );
}

export default Rent;
