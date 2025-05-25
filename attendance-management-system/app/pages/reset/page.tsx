"use client";
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';
import hideIcon from "@/public/assets/hide.png";
import showIcon from "@/public/assets/show.png";
import logo from "@/public/assets/Logo-Schedura.png";
import { TEXT } from "../reset/constants/constant";
import Style from "../reset/style/index.module.scss";

const resetPassword = () => {
    const initialValues = {
        password: '',
    };
    const signInSchema = Yup.object({
        password: Yup.string()
            .required('Password is required'),

    });
    const handleSubmit = () => {
        console.log('Form submitted');
    };
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);


    return (
        <div className={Style.parentContainer}>
            <div className={Style.logoContainer}>
                <Image src={logo} alt='logo' width={2000}
                    height={600} className={Style.logo}></Image>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={signInSchema}
                onSubmit={handleSubmit}>
                <Form>
                    <div className={Style.formContainer}>
                        <h1>{TEXT.resetPassword}</h1>
                        <p className={Style.newPassword}>{TEXT.yourNewPasswordMust}</p>
                        <div className={Style.password}>
                            <label>{TEXT.password}</label>
                            <div className={Style.passContainer}>
                            <Field data-test="password" name="password" type={showPassword ? 'text' : 'password'} className={Style.passwordInput} />
                            </div>
                            <Image data-test="passwordIcon" src={showPassword ? showIcon : hideIcon} alt="passwordIcon" className={Style.hide} onClick={togglePassword} ></Image>
                            <div className={Style.error2}>
                                <ErrorMessage name="password" component="div" className={Style.passwordError} />
                            </div>
                        </div>
                        <div className={Style.passwordStrength}>
                            <span id="poor"></span>
                            <span id="weak"></span>
                            <span id="strong"></span>
                            <span id="heavy"></span>
                        </div>
                        <p className={Style.use8Characters}>{TEXT.use8Characters}</p>
                        <div className={Style.password2}>
                            <label>{TEXT.confirmPassword}</label>
                            <div className={Style.passContainer2}>
                            <Field data-test="password2" name="password2" type={showPassword ? 'text' : 'password'} className={Style.passwordInput2} />
                            </div>
                            <Image data-test="passwordIcon2" src={showPassword ? showIcon : hideIcon} alt="passwordIcon" className={Style.hide2} onClick={togglePassword} ></Image>
                            <div className={Style.error2}>
                                <ErrorMessage name="password" component="div" className={Style.passwordError} />
                            </div>
                        </div>
                        <button className={Style.button}>{TEXT.submit}</button>
                    </div>
                    
                </Form>
            </Formik>
            <div className={Style.copyrightContainer}>
                <div>{TEXT.copyright}</div>
            </div>
        </div>


    );
}

export default resetPassword;