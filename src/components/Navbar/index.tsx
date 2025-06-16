import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import logo from "../../assets/main_logo.png";
function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.logo1}>
        <Image src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.navbar}>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
        <button className={styles.button}>GET STARTED</button>
      </div>
      
    </div>
  );
}

export default Navbar;
