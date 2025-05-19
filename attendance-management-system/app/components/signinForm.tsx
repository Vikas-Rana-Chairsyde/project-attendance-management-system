import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import fbIcon from "../../stories/assets/icons8-facebook-logo-50.png";
import googleIcon from "../../stories/assets/icons8-google.svg";
import appleIcon from "../../stories/assets/icons8-apple-logo-30.png";
import emailIcon from "../../stories/assets/icons8-email-48.png";
import hideIcon from "../../stories/assets/icons8-hide-50.png";
import logo from "../../stories/assets/Logo-Schedura.png";
import Image from 'next/image';

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

    const handleSubmit = (values: typeof initialValues) => {
        console.log('Form submitted:', values);
    };

    return (
        <div id="parentContainer">
            <div id="leftSide">
                <Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-01.png" alt="background" width={2000}
                    height={600} id="spiral">
                </Image>

                <div id="paragraph-part">
                    <h1>Empowering people <br />through seamless HR <br />management.</h1>
                    <div><Image src='https://smarthr.co.in/demo/html/template/assets/img/bg/bg-03.png'
                        alt="circle-image" width={2000}
                        height={600} id="circle"></Image>
                    </div>
                    <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/authentication-bg-01.png"
                        alt="background-image" width={2000}
                        height={600} id="people"></Image>
                    </div>
                    <p id='whiteText'>Efficiently manage your workforce, streamline
                        operations effortlessly.</p>
                    <div><Image src="https://smarthr.co.in/demo/html/template/assets/img/bg/bg-02.png"
                        alt="circle-image2" width={2000}
                        height={600} id="circle_2"></Image>
                    </div>

                </div>
            </div>


            <div id="rightSide">

                <Formik
                    initialValues={initialValues}
                    validationSchema={signInSchema}
                    onSubmit={handleSubmit}>
                    <Form>
                        {/* <div id='logo'> */}
                        <Image src={logo} alt='logo' width={2000}
                            height={600} id="logo"></Image>
                        {/* </div> */}
                        <h2 id="heading">Sign In</h2>
                        <p>Please enter your details to sign in</p>
                        <div id="mail">
                            <label>Email Address</label>
                            <Field type="email" name="email"></Field>
                            <Image src={emailIcon} alt="emailIcon" id="emailIcon"></Image>
                            <div id='error'>
                                <ErrorMessage name="email" component="div" />
                            </div>
                        </div>
                        <div id="password">
                            <label>Password</label>
                            <Field type="password" name="password"></Field>
                            <Image src={hideIcon} alt="emailIcon" id="hide"></Image>
                            <div id='error2'>
                                <ErrorMessage name="password" component="div" />
                            </div>
                        </div>
                        <div id="checkbox">
                            <label id="remember" >
                                <Field type="checkbox" name="rememberMe" style={{ accentColor: ' rgb(239 101 55 / 85%)', height: "19px", width: "19px", borderRadius: "5px" }} />
                                Remember Me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button id="button" type='submit'>Sign In</button>

                        <div>
                            <p id="p">Don't have an account? <a href="#" id="underline">Create Account</a></p>
                        </div>
                        {/* <div id="or">
                            <hr style={{ width: "45%", height: "0.01px", color: "rgb(255, 255, 255)" }} />
                            <p>Or</p>
                            <hr style={{ width: "45%", height: "0.1px" }}></hr>
                        </div>

                        <div id="icons">
                            <button id="fb"><Image src={fbIcon} alt="facebookIcon" /></button>
                            <button id="google"><Image src={googleIcon} alt="googleIcon" /></button>
                            <button id="apple"><Image src={appleIcon} alt="googleIcon" /></button>
                        </div> */}
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default SignInForm;
