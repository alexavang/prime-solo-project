import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserPage() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const navigateToImageSelection = () => {
    history.push("/select-image");
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <img src={user.profileImage} alt="profilePictures" />
      <br />
      {!user.profileImage && (
        <button className="btn" onClick={navigateToImageSelection}>
          Select
        </button>
      )}
    </div>
  );
}

export default UserPage;
