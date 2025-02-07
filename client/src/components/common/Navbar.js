import React, { useEffect, useState } from "react";
import Auth from "../auth/auth";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [accessToken, setAccessToken] = useState('')
  useEffect(() => {
    const token = window.localStorage.getItem('accessToken')
    if(token){
      setAccessToken(token);
    }
  }, [authModal])
  

  return (
    <nav className="bg-white shadow-md">
      {authModal && !accessToken ? (
        <>
          <Auth setAuthModal={setAuthModal} />
        </>
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-2xl font-bold text-gray-800">
                    Rentify
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <div className="w-full max-w-lg">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden  md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {accessToken ? (
                    <>    
                      <Link to="/cart" className="mx-5">
                        <span className="mx-3">
                          <ShoppingCartIcon className="h-5 w-5 text-gray-500 group-hover:text-primeColor" />
                        </span>
                      </Link>
                      <div className="relative">
                        <button
                          className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.profilePicture}
                            alt=""
                          />
                        </button>
                        {dropdownOpen && (
                          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Profile
                            </Link>
                            <Link
                              to="/collections"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              My collections
                            </Link>
                            <Link
                              to="/rented-furniture"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Previous Rentals
                            </Link>
                            <Link
                              to="/add-furniture"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Add Furniture
                            </Link>
                            <a
                              href="/signout"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Sign Out
                            </a>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <p
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
                      onClick={() => setAuthModal(true)}
                    >
                      Login
                    </p>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {mobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Search..."
              />
              {accessToken ? (
                <>
                  <div className="relative">
                    <button
                      className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none mt-2"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.profilePicture}
                        alt=""
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                        <a
                          href="/bookings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          My Bookings
                        </a>
                        <a
                          href="/signout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Out
                        </a>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
