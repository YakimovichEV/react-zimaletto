import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                        <div className="phones">
                            <div className="phone-item">
                                <span>Бесплатный звонок по РФ</span>
                                <a href="tel:+78312826000">
                                    +7 (831) 282-60-00
                                </a>
                            </div>
                            <div className="phone-item">
                                <span>Для приема заказов</span>
                                <a href="tel:+79040664685">
                                    +7 (904) 066-46-685
                                </a>
                            </div>
                        </div>
                        <div className="work-time">
                            График работы по будням с 9:00 до 18:00
                        </div>
                        <div className="work-email">
                            <a href="mailto:info@.ru">Email: info@.ru</a>
                            <a href="" className="site-help">
                                Поддержка
                            </a>
                        </div>
                    </div>
                    <div className="footer__center">
                        <div className="social">
                            <a href="">Мы в вконтакте</a>
                            <a href="">Мы в instagram</a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="person">
                            <a href="">
                                <img src="/img/person2.svg" alt="" />
                                <span>Войти/Регистрация</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span>©2021. «Zimaletto»</span>
                    <Link to="/terms-conditions">
                        <a href="">Условия и соглашения</a>
                    </Link>

                    <Link to="/confidentiality-policy">
                        <a href="">Политика конфиденциальности</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
