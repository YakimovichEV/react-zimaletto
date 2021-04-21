import React from "react";

import Img3 from "../../assets/img/img-3.svg";

export const FormSuccess = () => {
    return (
        <div>
            <div className="form-content-right">
                <div className="form-success">
                    We have recevied your request
                </div>
                <img src={Img3} alt="" className="form-img-2" />
            </div>
        </div>
    );
};
