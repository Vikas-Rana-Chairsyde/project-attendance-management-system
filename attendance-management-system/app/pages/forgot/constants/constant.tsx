import React from 'react';
import * as Yup from 'yup';

export const CONSTANT = {
    INITIAL_VALUES: {
        email: '',
    },

    VALIDATION_SCHEMA: Yup.object({
        email: Yup.string()
            .required('Email is required')
            .email('Please enter a valid email address.'),
    }),
};

export const TEXT = {
    forgotPassword: "Forgot Password?",
    ifYouForgotYourPassword: "If you forgot your password, well, then we'll email you instructions to reset your password.",
    emailAddress: "Email Address",
    submit: "Submit",
    returnTo: "Return to",
    SignIn: "Sign In",
    copyright: "Copyright © 2025",
};