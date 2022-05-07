import React from 'react';
import styles from "./styles/Menu.modules.css";

export default function Menu() {
  return (
    <>
      <span>Menú</span>
      <div>
        <div className= {styles.linea1}></div>
        <div className= {styles.linea2}></div>
        <div className= {styles.linea3}></div>
      </div>       
    </>
  )
}


