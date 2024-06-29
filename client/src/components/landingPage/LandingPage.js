import React from "react";
import Navbar from "../common/Navbar";

function LandingPage() {
  const user = {
    profilePicture: "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg",
    // Other user properties
  };
  return (
    <div>
      <div>
        <Navbar  />
      </div>
    </div>
  );
}

export default LandingPage;
