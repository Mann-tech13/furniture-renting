import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import FurnitureDetails from './components/furnitureDetails/FurnitureDetails';
import Navbar from './components/common/Navbar';
import Collections from "./components/collections/Collections";
import RentedFurniture from './components/RentedFurniture/RentedFurniture';
import Cart from './components/cart/cart';
import Rent from './components/rent/rent';
import UserProfile from './components/profile/profile';

const user = {
  profilePicture:
    "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg",
  // Other user properties
};

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar user={user} />

        <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/view-details/id' element={<FurnitureDetails/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/rented-furniture' element={<RentedFurniture/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/add-furniture' element={<Rent/>} />
        <Route path='/profile' element={<UserProfile/>} />








        </Routes>
      </div>
    </Router>
  );
}

export default App;
