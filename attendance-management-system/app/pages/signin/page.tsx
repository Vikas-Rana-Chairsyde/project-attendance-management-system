"use client";
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailIcon from "@/public/assets/icons8-email-48.png";
import hideIcon from "@/public/assets/hide.png";
import showIcon from "@/public/assets/show.png";
import logo from "@/public/assets/show.png";
import Image from 'next/image';
import  Styles  from './style/index.module.scss';

const SignInForm = () => {
    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const signInSchema = Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email('Please enter a valid email address.'),

        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters.')

    });
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);
    const handleSubmit = (values: typeof initialValues) => {
        console.log('Form submitted:', values);
    };

    return (
        <div className={Styles.parentContainer}>
            <div className={Styles.leftSide}>
                <Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-01.png" alt="background" width={2000}
                    height={600} className={Styles.spiral}>
                </Image>

                <div className={Styles.paragraphPart}>
                    <h1>Empowering people <br />through seamless HR <br />management.</h1>
                    <div><Image src='https://smarthr.co.in/demo/html/template/assets/img/bg/bg-03.png'
                        alt="circle-image" width={2000}
                        height={600} className={Styles.circle}></Image>
                    </div>
                    <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/authentication-bg-01.png"
                        alt="background-image" width={2000}
                        height={600} className={Styles.people}></Image>
                    </div>
                    <p className='whiteText'>Efficiently manage your workforce, streamline
                        operations effortlessly.</p>
                    <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-02.png"
                        alt="circle-image2" width={2000}
                        height={600} className={Styles.circle_2}></Image>
                    </div>

                </div>
            </div>


            <div className={Styles.rightSide}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={signInSchema}
                    onSubmit={handleSubmit}>
                    <Form>
                        {/* <div id='logo'> */}
                        <Image src={logo} alt='logo' width={2000}
                            height={600} className={Styles.logo}></Image>
                        {/* </div> */}
                        <h2 className={Styles.heading}>Sign In</h2>
                        <p>Please enter your details to sign in</p>
                      <div className={Styles.mailPass}>  
                        <div className={Styles.mail}>
                            <label>Email Address</label>
                            <Field type="email" name="email"></Field>
                            <Image src={emailIcon} alt="emailIcon" className={Styles.emailIcon}></Image>
                            <div className='error'>
                                <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px', marginTop:'3px' }}/>
                            </div>
                        </div>
                        <div className={Styles.password}>
                            <label>Password</label>
                            <Field name="password" type={showPassword ? 'text' : 'password'} className={Styles.passwordInput}/>
                            <Image src= {showPassword ? showIcon : hideIcon } alt="passwordIcon" className={Styles.hide} onClick={togglePassword} ></Image>
                            <div className='error2'>
                                <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px', marginTop:'3px' }}/>
                            </div>
                        </div>
                        </div>
                        <div className={Styles.checkbox}>
                            <label className={Styles.remember}>
                                <Field type="checkbox" name="rememberMe"  className={Styles.accent}/>
                                Remember Me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button className={Styles.button} type='submit'>Sign In</button>

                        <div className={Styles.account}>
                            <p className={Styles.p}>Don't have an account? <a href="#" className={Styles.underline}>Create Account</a></p>
                        </div>

            
                        {/* <div id={Styles.or}>
                            <hr style={{ width: "45%", height: "0.01px", color: "rgb(255, 255, 255)" }} />
                            <p>Or</p>
                            <hr style={{ width: "45%", height: "0.1px" }}></hr>
                        </div>

                        <div id={Styles.icons}>
                            <button id={Styles.fb}><Image src={fbIcon} alt="facebookIcon" /></button>
                            <button id={Styles.google}><Image src={googleIcon} alt="googleIcon" /></button>
                            <button id={Styles.apple}><Image src={appleIcon} alt="googleIcon" /></button>
                        </div> */}
                        
                    </Form>
                </Formik>
            </div>
        </div>
    );
}


export default SignInForm;
