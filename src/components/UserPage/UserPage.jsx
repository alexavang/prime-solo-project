import React from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <h1>
        This is where the character page goes. This renders the characters and
        have the create and delete buttons!
      </h1>
      <div className="lepan">
        <img src="img/canicomeoverandlookatyoulikethis.png" alt="pan" />
      </div>
      <button className="btn">Create</button>
      <button className="btn">Delete</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
