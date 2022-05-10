import React from 'react'
import styles from "./styles/Footer.module.css";


export default function Footer() {
  return (
    <>
      <div className= {styles.divFooter}>
        <p className= {styles.p}>
            Hecho con &#128147; por Yeison Rodríguez{" "}
            {new Date().getFullYear()}
        </p>      
      </div>      
    </>
  )
}

