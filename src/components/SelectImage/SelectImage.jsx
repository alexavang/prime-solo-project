import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function SelectImage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const images = [
    "img/aaaastress.png",
    "img/angy.png",
    "img/canicomeoverandstareatyoulikethis.png",
    "img/delicious.png",
    "img/doggo.png",
    "img/duck.png",
    "img/fist.png",
    "img/flowerforyou.png",
    "img/hehe.png",
    "img/hepme.png",
    "img/kirb.png",
    "img/L.png",
    "img/morty.png",
    "img/nice.png",
    "img/nothoughts.png",
    "img/ohmygaahh.png",
    "img/opertato.png",
    "img/pain.png",
    "img/pan.png",
    "img/racc.png",
    "img/sadoge.png",
    "img/slay.png",
    "img/thonking.png",
    "img/willnt.png",
    "img/workinout.png",
    "img/xcuseme.png",
  ];

  const handleImageSelect = (image) => {
    axios
      .put("/api/user", { profileImage: image })
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: "UPDATE_PROFILE_IMAGE", payload: image });
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
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => handleImageSelect(image)}
        />
      ))}
    </div>
  );
}

export default SelectImage;
