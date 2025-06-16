"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import SlideShow from "../Slidshow";
import AboutUs from "../AboutUs";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";
import Stats from "../Stats";
import Benifits from "../Benifits";
import Address from "../Address";

function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <SlideShow />
      </div>
      <AboutUs />
      <OurServices />
      <WhyUs />
      <Stats />
      <Benifits />
      <Address />
    </>
  );
}

export default Home;
