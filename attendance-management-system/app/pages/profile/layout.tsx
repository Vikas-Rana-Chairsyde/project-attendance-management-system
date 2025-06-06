"use client";

import React, { useState } from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import Styles from "../dashboard/style/index.module.scss";
import holidayIcon from "@/public/assets/icons8-holiday-24.png";
import dashboardIcon from "@/public/assets/smart-home.svg";
import leaveIcon from "@/public/assets/icons8-leave-32.png";
import attendanceIcon from '@/public/assets/icons8-application-24.png';

interface Layout3Props {
    children: ReactNode;
}

export default function Layout3({ children }: Layout3Props) {
    const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => setIsOpen(!isOpen);
    return (

        <div className={Styles.mainContainer}>
            <div className={Styles.headerContainer}>
                <div className={Styles.logoContainer}>
                    <Image src="https://smarthr.co.in/demo/html/template/assets/img/logo.svg" alt='logo' width={2000}
                        height={600} className={Styles.logo}></Image>
                </div>

                <div className={Styles.optionprofileContainer}>
                    <div className={Styles.headerOptions}>
                        <ul className={Styles.list}>
                            <li className={Styles.liFlex}>
                                <a href="/pages/dashboard" className={Styles.active}>
                                    <Image src={dashboardIcon} alt="dashboardIcon" width={2000}
                                        height={600} className={Styles.icon}></Image>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className={Styles.liFlex}>
                                <a href="" className={Styles.active}>
                                    <Image src={holidayIcon} alt='holidayIcon' width={2000}
                                        height={600} className={Styles.icon}></Image>
                                    <span>Holidays</span>
                                </a>
                            </li>
                            <li className={Styles.liFlex}>
                                <Image src={leaveIcon} alt='leaveIcon' width={2000}
                                    height={600} className={Styles.icon}></Image>
                                <span>Leave</span>

                            </li>
                            <li className={Styles.liFlex}>
                                <Image src={attendanceIcon} alt='attendanceIcon' width={2000}
                                    height={600} className={Styles.icon}></Image>
                                <span>Attendance</span>

                            </li>
                        </ul>
                    </div>

                    <div className={Styles.profilePhoto}>
                        <Image src="https://smarthr.co.in/demo/html/template/assets/img/profiles/avatar-12.jpg" alt="profilePhoto" width={2000}
                            height={600} className={Styles.image} />
                    </div>
                </div>
            </div>

            {/* mobile sidebar */}

            <div className={Styles.mobileHeaderContainer}>
                <div className={Styles.barIcon} onClick={toggleSidebar}>
                    <span></span>
                    <span className={Styles.span}></span>
                    <span></span>
                </div>
                <div className={Styles.mobileLogo}><Image src="https://smarthr.co.in/demo/html/template/assets/img/logo.svg" alt='logo' width={2000}
                    height={600} className={Styles.logo}></Image>
                </div>
                <div className={Styles.userMenu}>
                    <Image src="https://smarthr.co.in/demo/html/template/assets/img/profiles/avatar-12.jpg" alt="profilePhoto" width={2000}
                        height={600} className={Styles.image} />
                </div>
            </div>

            <div className={`${Styles.sidebarContainer} ${isOpen ? Styles.open : ''}`}>
                <div className={Styles.sidebar}>
                    <div className={Styles.sidebarMenu}>
                        <ul>
                            <li className={Styles.menuTitle}>
                                <span className={Styles.mainMenu}>MAIN MENU</span>
                            </li>
                        </ul>
                        <ul className={Styles.dashoardSection}>
                            <li className={Styles.liFlex}>
                                <a href="" className={Styles.active}>
                                    <Image src={dashboardIcon} alt="dashboardIcon" width={2000}
                                        height={600} className={Styles.icon}></Image>
                                    <span>Dashboard</span>
                                </a>

                            </li>
                            <li className={Styles.liFlex}>
                                <Image src={holidayIcon} alt='holidayIcon' width={2000}
                                    height={600} className={Styles.icon}></Image>
                                <span>Holidays</span>
                            </li>
                            <li className={Styles.liFlex}>
                                <Image src={leaveIcon} alt='leaveIcon' width={2000}
                                    height={600} className={Styles.icon}></Image>
                                <span>Leave</span>
                            </li>
                            <li className={Styles.liFlex}>
                                <Image src={attendanceIcon} alt='attendanceIcon' width={2000}
                                    height={600} className={Styles.icon}></Image>
                                <span>Attendance</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {children}
        </div>


    )


}