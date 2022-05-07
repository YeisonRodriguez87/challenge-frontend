import React from 'react'
import logo from "../images/logo.png";
import styles from "./styles/NavBar.module.css";
import Menu from "./Menu";

export default function NavBar() {
  return (
    <>
      <div className= {styles.divContainer}>
        <div className= {styles.divLogo}>
          <img src={logo} alt="logo" draggable="false" width='40px' heigth='40px'/>
          <p className= {styles.p}>Modelos</p>
          <p className= {styles.p}>Ficha de modelo</p> 
        </div>
        <span className= {styles.span}><Menu /></span>     
      </div>
      <hr className= {styles.hr}/>      
    </>
  )
}

