import React from "react";

import Img3 from "../../assets/img/img-3.svg";

export const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <h1 className="form-success">We have received your request!</h1>
            <img className="form-img-2" src={Img3} alt="success" />
        </div>
    );
};
