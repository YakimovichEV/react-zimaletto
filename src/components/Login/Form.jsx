import React from "react";
import { useState } from "react";

import { FormSignup } from "./FormSignup";
import { FormSuccess } from "./FormSuccess";

import Img2 from "../../assets/img/img-2.svg";

export const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="form-containerr">
                <span className="close-btn">×</span>
                <div className="form-content-left">
                    <img src={Img2} alt="spaceship" className="form-img" />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};
