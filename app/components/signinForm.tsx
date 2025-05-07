import React from 'react';
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';


const SignInForm = () => {
    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const handleSubmit = (values: typeof initialValues) => {
        console.log('Form submitted:', values);
    };

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
            <h2 id="heading">Sign In</h2>
            <p>Please enter your details to sign in</p>
                    <div id="mail">
                        <label>Email Address</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div id="password">
                        <label>Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div>
                        <label id="remember" >
                            <Field type="checkbox" name="rememberMe" />
                            Remember Me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button id="button" type='submit'>Sign In</button>

                    <div>
                        <p>Don't have an account? <a href="#">Create Account</a></p>
                    </div>
                    <div>
                        <button ><FaFacebookF/></button>
                        <button ><FaGoogle/></button>
                        <button ><FaApple/></button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default SignInForm;
