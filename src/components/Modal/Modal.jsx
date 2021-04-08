import React from "react";

import modalPerson from "../../assets/img/person2.svg";

export const Modal = ({ showModal, setshowModal }) => {
    return (
        <>
            {showModal ? (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-body">
                                <div class="top-modal">
                                    <img src={modalPerson} alt="" />
                                    <div class="modal-name">
                                        Войти в личный кабинет
                                    </div>
                                </div>
                                <div class="form">
                                    <form action="" method="POST">
                                        <div class="inpb">
                                            <input
                                                class="phone"
                                                name=""
                                                type="text"
                                                placeholder="Телефон"
                                            />
                                        </div>
                                        <div class="inpb">
                                            <input
                                                class="pass"
                                                name=""
                                                type="text"
                                                placeholder="Пароль"
                                            />
                                        </div>
                                        <div class="error-txt">
                                            Не правильный логин или пароль
                                        </div>
                                        <div class="forgot_pass">
                                            Забыли пароль?
                                        </div>
                                        <button>Войти</button>
                                    </form>
                                    <div class="modal-txt">
                                        Впервые у нас?{" "}
                                        <span>Зарегистрироваться</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};
