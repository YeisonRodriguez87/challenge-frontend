import React from "react";
import styles from "./styles/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, year, price, photo }) {
  return (
    <>
      <div>
        <h2 className={styles.h2}>{name}</h2>
        <p className={styles.p}>
          {year} | ${price}
        </p>
      </div>
      <div>
        <img className={styles.image} src={photo} alt='Img not found' />
      </div>
      <Link to='/:id'>
        <button>Ver Modelo</button>
      </Link>
    </>
  );
}
