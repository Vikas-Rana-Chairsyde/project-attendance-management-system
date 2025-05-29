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
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const resetPassword = () => {

    const searchParams = useSearchParams();
    const token = useSearchParams().get("token");
    const router = useRouter();
    console.log("token from URL:", token);

    const [message, setMessage] = useState('');

    const initialValues = {
        password: '',
        password2: '',
    };

    const validationSchema = Yup.object({
        password: Yup.string()
            .required('Password is required'),
        password2: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),

    });
    const handleSubmit = async (values: { password: string; password2: string }) => {
        const res = await fetch('/api/auth/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token,
                newPassword: values.password,
                confirmPassword: values.password2,
            }),
        });

        if (res.ok) {
            setMessage('Password reset successful. Redirecting to login...');
            setTimeout(() => {
                router.push('/pages/signin');
            }, 1000);
        } else {
            const data = await res.json();
            setMessage(`Reset failed: ${data.message}`);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);
    const togglePassword2 = () => setShowPassword2(prev => !prev);

    return (
        <div className={Style.parentContainer}>
            <div className={Style.logoContainer}>
                <Image src={logo} alt='logo' width={2000}
                    height={600} className={Style.logo}></Image>
            </div>
            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                <Form>
                    <div className={Style.formContainer}>
                        <h1>{TEXT.resetPassword}</h1>
                        <p className={Style.newPassword}>{TEXT.yourNewPasswordMust}</p>
                        <div className={Style.password}>
                            <label>{TEXT.password}</label>
                            <Field data-test="password" name="password" type={showPassword ? 'text' : 'password'} className={`${Style.passwordInput} ${showPassword ? Style.border_black : ''}`} />

                            <Image data-test="passwordIcon" src={showPassword ? showIcon : hideIcon} alt="passwordIcon" className={Style.hide} onClick={togglePassword} ></Image>
                        </div>
                        <div className={Style.error1}>
                            <ErrorMessage name="password" component="div" className={Style.passwordError} />
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
                                <Field data-test="password2" name="password2" type={showPassword2 ? 'text' : 'password'} className={`${Style.passwordInput2} ${showPassword ? Style.border_black : ''}`} />
                                <Image data-test="passwordIcon2" src={showPassword2 ? showIcon : hideIcon} alt="passwordIcon2" className={Style.hide2} onClick={togglePassword2} ></Image>
                            </div>
                            <div className={Style.error2}>
                                <ErrorMessage name="password2" component="div" className={Style.passwordError2} />
                            </div>
                        </div>
                        <button className={Style.button} type="submit">{TEXT.submit}</button>
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