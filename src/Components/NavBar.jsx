import React from 'react'
import logo from "../images/logo.png";
import styles from "./styles/NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className= {styles.divContainer}>
        <div className= {styles.divLogo}>
          <img src={logo} alt="logo" draggable="false" width='40px' heigth='40px'/>
          <Link to='/'>
            <p className= {styles.p}>Modelos</p>          
          </Link>
          <p className= {styles.p}>Ficha de modelo</p>
        </div>
            
      </div>
      <hr className= {styles.hr}/>      
    </>
  )
}

