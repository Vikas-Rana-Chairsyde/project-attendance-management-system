'use client';
import React from 'react';
import * as Yup from 'yup';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Styles from "./style/index.module.scss";
import photoIcon from "@/public/assets/photo.svg";


export default function profile() {

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: '',
        dateofBirth: ''

    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phone: Yup.string().required('only 10 digits')
    });

    const onSubmit = (values: any) => {
        console.log('Form data:', values);
    };

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.background}></div>

            <div className={Styles.card}>
                <div className={Styles.cardBody}>
                    <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit} >
                        <Form>
                            <div className={Styles.formcontainer}>
                                <h1>Profile</h1>
                                <h2>Basic Information</h2>
                                <div className={Styles.grayBackground}>

                                    <div className={Styles.profilePhoto}>
                                        <Image src={photoIcon} alt="photoicon" width={2000} height={600} className={Styles.photoIcon}></Image>
                                    </div>
                                    <div className={Styles.profileInfo}>
                                        <div className={Styles.profiletext}>Profile Photo</div>
                                        <div className={Styles.imageSize}>Recommended image size is 40px x 40px</div>
                                        <div className={Styles.buttons}>
                                            <button className={Styles.upload} type="button">Upload</button>
                                            <button className={Styles.cancel} type="button">Cancel</button>

                                        </div>

                                    </div>
                                </div>

                                <div className={Styles.nameDetails}>
                                    <div className={Styles.firstName}>
                                        <label>First Name</label>
                                        <Field data-test="firstName" type="firstName" name="firstName" className={Styles.firstName}></Field>
                                    </div>
                                    <div className={Styles.lastName}>
                                        <label>Last Name</label>
                                        <Field data-test="lastName" type="lastName" name="lastName" className={Styles.lastName}></Field>
                                    </div>
                                </div>

                                <div className={Styles.otherDetails}>
                                    <div className={Styles.dateofBirth}>
                                        <label>Date of birth</label>
                                        <Field data-test="dateofBirth" type="date" name="dateofBirth" className={Styles.dateofBirth}></Field>
                                    </div>
                                    <div className={Styles.phone}>
                                        <label>Phone</label>
                                        <Field data-test="phone" type="tel" name="phone" className={Styles.phone}></Field>
                                    </div>
                                </div>

                               <div className={Styles.submitButton}>
                                <button type = "button" className={Styles.cancelButton}>Cancel</button>
                                <button type = "button" className={Styles.saveButton}>Save</button>
                               </div>


                            </div>


                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    )

}