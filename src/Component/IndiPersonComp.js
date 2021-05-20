import React from "react";

function IndiPersonComp({ name, email, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <div className="textcon">
        <h1>{name}</h1>
        <p style={{ fontWeight: "800" }}>{email}</p>
      </div>
    </div>
  );
}

export default IndiPersonComp;
