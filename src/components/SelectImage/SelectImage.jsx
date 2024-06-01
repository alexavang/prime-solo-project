import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import './SelectImage.css';  // Make sure to import the CSS file correctly

function SelectImage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const images = [
    { src: "img/aaaastress.png", name: "Aaaastress" },
    { src: "img/angy.png", name: "Angy" },
    { src: "img/canicomeoverandstareatyoulikethis.png", name: "Can I Come Over" },
    { src: "img/delicious.png", name: "Delicious" },
    { src: "img/doggo.png", name: "Doggo" },
    { src: "img/duck.png", name: "Duck" },
    { src: "img/fist.png", name: "Fist" },
    { src: "img/flowerforyou.png", name: "Flower for You" },
    { src: "img/hehe.png", name: "Hehe" },
    { src: "img/hepme.png", name: "Hepme" },
    { src: "img/kirb.png", name: "Kirb" },
    { src: "img/L.png", name: "L" },
    { src: "img/morty.png", name: "Morty" },
    { src: "img/nice.png", name: "Nice" },
    { src: "img/nothoughts.png", name: "No Thoughts" },
    { src: "img/ohmygaahh.png", name: "Oh My Gaahh" },
    { src: "img/opertato.png", name: "Opertato" },
    { src: "img/pain.png", name: "Pain" },
    { src: "img/pan.png", name: "Pan" },
    { src: "img/racc.png", name: "Racc" },
    { src: "img/sadoge.png", name: "Sadoge" },
    { src: "img/slay.png", name: "Slay" },
    { src: "img/thonking.png", name: "Thonking" },
    { src: "img/willnt.png", name: "Willnt" },
    { src: "img/workinout.png", name: "Workinout" },
    { src: "img/xcuseme.png", name: "Excuse Me" },
  ];

  const handleImageSelect = (image) => {
    axios
      .put("/api/user", { profileImage: image.src })
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: "UPDATE_PROFILE_IMAGE", payload: image.src });
          history.push("/user");
        } else {
          console.error("Failed to update profile image", response);
        }
      })
      .catch((err) => {
        console.error("Failed to update profile image", err);
      });
  };

  return (
    <div className="container">
      <h2>Select an Image</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => handleImageSelect(image)} style={{ cursor: "pointer", margin: "10px" }}>
            <p>{image.name}</p>
            <img src={image.src} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectImage;
