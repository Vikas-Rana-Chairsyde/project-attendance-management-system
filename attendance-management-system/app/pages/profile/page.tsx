'use client';
import React from 'react';
import * as Yup from 'yup';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Styles from "./style/index.module.scss";
import photoIcon from "@/public/assets/photo.svg";


export default function profile() {

    const initialValues = {
        fullName: '',
        phone: '',
        dateofBirth: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string()
            .required('Full Name is required')
            .matches(/^[a-zA-Z\s]+$/, 'Full Name must contain only letters and spaces')
            .min(2, 'Full Name must be at least 2 characters'),
        dateofBirth: Yup.date()
            .required('Date of Birth is required')
            .max(new Date(), 'Date of Birth cannot be in the future'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
    });

    const onSubmit = (values: any) => {
        console.log('Form data:', values);
    };

    return (
        <div className={Styles.mainContainer}>

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
                                    <div className={Styles.fullName}>
                                        <label>Full Name</label>
                                        <div className={Styles.errorMessage}>
                                            <Field data-test="fullName" type="fullName" name="fullName" className={Styles.fullName}></Field>
                                            <div className={Styles.nameError}>
                                                <ErrorMessage name="fullName" component="div" className={Styles.error} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.dateofBirth}>
                                        <label>Date of birth</label>
                                        <div className={Styles.errorMessage}>
                                            <Field data-test="dateofBirth" type="date" name="dateofBirth" className={Styles.dateInput}></Field>
                                            <div className={Styles.dateError}>
                                                <ErrorMessage name="dateofBirth" component="div" className={Styles.error} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={Styles.otherDetails}>
                                    <div className={Styles.phoneInput}>
                                       <label className={Styles.phoneLabel}>Phone</label>
                                            <div className={Styles.errorMessage}>
                                            <Field data-test="phone" type="tel" name="phone" className={Styles.phone}></Field>
                                            <div className={Styles.phoneError}>
                                                <ErrorMessage name="phone" component="div" className={Styles.error} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={Styles.phone}>
                                        <label>Phone</label>
                                        <Field data-test="phone" type="tel" name="phone" className={Styles.phone}></Field>
                                    </div> */}
                                </div>

                                <div className={Styles.submitButton}>
                                    <button type="button" className={Styles.cancelButton}>Cancel</button>
                                    <button type="button" className={Styles.saveButton}>Save</button>
                                </div>


                            </div>


                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    )

}