import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <img src={user.profileImage} alt="profilePictures" />
      <br></br>
      <button className="btn">Select</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
