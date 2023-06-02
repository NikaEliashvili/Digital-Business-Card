import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img src="./images/profile.jpg" width="100%"/>
      <h1>Nika Eliashvili</h1>
      <h4>Frontend Developer</h4>
      <div className="buttons">
        <button className="email-btn"><img src="./images\Email icon.png" />Email</button>
        <button className="linkedin-btn"><img src="./images\Vector.png"/>LinkedIn</button>
      </div>
    </div>
  );
}
