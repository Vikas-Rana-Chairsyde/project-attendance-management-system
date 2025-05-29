import React from 'react';
import * as Yup from 'yup';

export const CONSTANT = {
    INITIAL_VALUES: {
      email: '',
      password: '',
      rememberMe: false,
    },

    VALIDATION_SCHEMA: Yup.object({
       email: Yup.string()
                   .required('Email is required')
                   .email('Please enter a valid email address.'),
       
               password: Yup.string()
                   .required('Password is required')
                   .min(8, 'Password must be at least 8 characters.')
       
    }),
};

export const TEXT = {
  bigHeading :'Empowering people through seamless HR management.',
  imagetext : 'Efficiently manage your workforce, streamline operations effortlessly.',
  signIn : 'Sign In',
  signInDetails : 'Please enter your details to sign in',
  labelEmail : 'Email Address',
  labelPassword : 'Password',
  rememberMe : 'Remember Me',
  forgotPassword : 'Forgot Password?',
  copyright: 'Copyright © 2025',

};


