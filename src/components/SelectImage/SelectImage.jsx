import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import './SelectImage.css';

function SelectImage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const images = [
    { src: "img/aaaastress.png", name: "aaaastress" },
    { src: "img/angy.png", name: "angy" },
    { src: "img/canicomeoverandstareatyoulikethis.png", name: "canicomeoverandstareatyoulikethis" },
    { src: "img/delicious.png", name: "delicious" },
    { src: "img/doggo.png", name: "doggo" },
    { src: "img/duck.png", name: "duck" },
    { src: "img/fist.png", name: "fist" },
    { src: "img/flowerforyou.png", name: "flowerforyou" },
    { src: "img/hehe.png", name: "hehe" },
    { src: "img/hepme.png", name: "hepme" },
    { src: "img/kirb.png", name: "kirb" },
    { src: "img/L.png", name: "L" },
    { src: "img/morty.png", name: "morty" },
    { src: "img/nice.png", name: "nice" },
    { src: "img/nothoughts.png", name: "nothoughts" },
    { src: "img/ohmygaahh.png", name: "ohmygaahh" },
    { src: "img/opertato.png", name: "opertato" },
    { src: "img/pain.png", name: "pain" },
    { src: "img/pan.png", name: "pan" },
    { src: "img/racc.png", name: "racc" },
    { src: "img/sadoge.png", name: "sadoge" },
    { src: "img/slay.png", name: "slay" },
    { src: "img/thonking.png", name: "thonking" },
    { src: "img/willnt.png", name: "willnt" },
    { src: "img/workinout.png", name: "workinout" },
    { src: "img/xcuseme.png", name: "xcuseme" },
    { src: "img/biscuitsbiscuits.png", name: "biscuitsbiscuits" },
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
