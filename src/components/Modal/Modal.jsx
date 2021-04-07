import React from "react";

export const Modal = ({ showModal, setshowModal }) => {
    return (
        <>
            {showModal ? (
                <div className="modal">
                    <div className="modal__inner">
                        <div className="modal__item">1</div>
                        <div className="modal__item">2</div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
