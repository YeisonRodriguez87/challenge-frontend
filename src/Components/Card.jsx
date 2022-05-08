import React from "react";
import styles from "./styles/Card.module.css";


export default function Card({ name, year, price, photo }) {
  return (
    <>
      <div>
        <div className={styles.divName}>{name}</div>
        <div className={styles.divPrice}>
          {year} | ${price}
        </div>
        <div>
          <img className={styles.image} src={photo} alt='Img not found' />
        </div>
      </div>
    </>
  );
}
