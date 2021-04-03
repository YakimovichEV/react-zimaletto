import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "../../assets/img/logo.svg";
import headerPhone from "../../assets/img/phone.svg";
import headerPerson from "../../assets/img/person.svg";
import headerCart from "../../assets/img/shopping-cart.svg";

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__item">
                        <Link to="/">
                            <div className="header__logo">
                                <img src={headerLogo} alt="" />
                            </div>
                        </Link>

                        <nav className="header__menu">
                            <ul>
                                <Link to="/" className="header__link">
                                    <li>
                                        <span>Каталог</span>
                                    </li>
                                </Link>
                                <Link to="/delivery" className="header__link">
                                    <li>
                                        <span>Доставка</span>
                                    </li>
                                </Link>
                                <li>
                                    <span>Оплата</span>
                                </li>
                                <li>
                                    <span>Контакты</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__item">
                        <div className="header__phone">
                            <img src={headerPhone} alt="" />
                            <span>+7 (831) 282-60-00</span>
                        </div>
                        <div className="header__user">
                            <img src={headerPerson} alt="" />
                        </div>
                        <div className="header__cart">
                            <img src={headerCart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
