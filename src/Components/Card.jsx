import React from "react";

export default function Card({ name, year, price, photo }) {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>
          {year} | ${price}
        </p>
      </div>
      <div>
        <img src={photo} alt='Img not found' width='250' height='200' />
      </div>
    </>
  );
}
