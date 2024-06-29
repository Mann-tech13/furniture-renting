import React, { useState } from "react";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    pincode: "12345",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = () => {
    // Add logic to save profile data here
    toggleEdit();
  };

  return (
    <div className="mx-20 bg-white p-5 border rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">User Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-1"
            />
          ) : (
            <p className="text-gray-900">{profile.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-1"
            />
          ) : (
            <p className="text-gray-900">{profile.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-1"
            />
          ) : (
            <p className="text-gray-900">{profile.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-1"
            />
          ) : (
            <p className="text-gray-900">{profile.address}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          {isEditing ? (
            <input
              type="text"
              name="pincode"
              value={profile.pincode}
              onChange={handleInputChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 h-10 px-1"
            />
          ) : (
            <p className="text-gray-900">{profile.pincode}</p>
          )}
        </div>

        <div className="flex justify-start space-x-2">
          {isEditing ? (
            <>
              <button
                className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={saveProfile}
              >
                Save
              </button>
              <button
                className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={toggleEdit}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={toggleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
