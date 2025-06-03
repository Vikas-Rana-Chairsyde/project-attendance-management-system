'use client';
import React, { useState } from 'react';
import Styles from "./style/index.module.scss";
import Image from 'next/image';
// import logo from "@/public/assets/Logo-Schedura.png";

export default function Dashboard() {

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.headerContainer}>
        <div className={Styles.logoContainer}>
          <Image src="https://smarthr.co.in/demo/html/template/assets/img/logo.svg" alt='logo' width={2000}
            height={600} className={Styles.logo}></Image>
        </div>

        <div className={Styles.optionprofileContainer}>
          <div className={Styles.headerOptions}>
            <ol className={Styles.list}>
              <li>Dashboard</li>
              <li>Holidays</li>
              <li>Leave</li>
              <li>Attendance</li>
            </ol>
          </div>

          <div className={Styles.profilePhoto}>
            <Image src="https://smarthr.co.in/demo/html/template/assets/img/profiles/avatar-12.jpg" alt="profilePhoto" width={2000}
              height={600} className={Styles.image} />
          </div>
        </div>
      </div>

      <div className={Styles.mobileHeaderContainer}>
        <div className={Styles.barIcon}>
          <span></span>
          <span></span>
          <span></span>

        </div>
        <div className={Styles.mobileLogo}><Image src="https://smarthr.co.in/demo/html/template/assets/img/logo.svg" alt='logo' width={2000}
          height={600} className={Styles.logo}></Image>
        </div>
        <div className={Styles.userMenu}>

        </div>

      </div>

    </div>


  );
}


