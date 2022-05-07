import React from 'react'
import styles from "./styles/Footer.module.css";


export default function Footer() {
  return (
    <>
      <div className= {styles.divFooter}>
        <p className= {styles.p}>
            Hecho con <span>&#128147;</span> por Yeison Rodríguez{" "}
            {new Date().getFullYear()}
        </p>      
      </div>      
    </>
  )
}

