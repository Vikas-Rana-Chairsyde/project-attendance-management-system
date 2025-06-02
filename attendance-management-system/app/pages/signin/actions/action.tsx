
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import { CONSTANT } from "../constants/constant";

//TODO: Put this in the constants
const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
};

//TODO: Add the classes instead of the functions
export const handleSubmit = async (values: typeof initialValues, { setSubmitting, setErrors }: any) => {
    const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
    });

};