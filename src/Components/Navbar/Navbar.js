import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <img className={classes.Logo} src="logo.svg" alt="Logo"/>
      Elicit Hospital

      <button className={classes.RegisterNewPatientButton}>Register Patient</button>
    </div>
  )
}

export default Navbar