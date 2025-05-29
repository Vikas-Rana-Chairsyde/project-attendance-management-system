import React from "react";
import * as Yup from 'yup';

export const initialValues = {
  password: '',
  password2: '',
};

export const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  password2: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});



export const TEXT = {
    resetPassword: 'Reset Password',
    copyright : "Copyright © 2025",
    yourNewPasswordMust :'Your new password must be different from previous used passwords.',
    password : 'Password',
    use8Characters :'Use 8 or more characters with a mix of letters, numbers & symbols.',
    confirmPassword: 'Confirm Password',
    submit: 'Submit',
}