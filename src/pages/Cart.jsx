import React from "react";

import cartRemove from "../assets/img/cart-remove.svg";
import cartImg from "../assets/img/cart-img.svg";
import cartMinus from "../assets/img/cart-minus.svg";
import cartPlus from "../assets/img/cart-plus.svg";

export const Cart = () => {
    return (
        <section className="cart">
            <div className="container">
                <h1 className="cart__title">Корзина</h1>

                <div className="cart__inner">
                    <div className="cart__item">
                        <div className="cart__remove">
                            <img src={cartRemove} alt="" />
                        </div>
                        <div className="cart__img">
                            <img src={cartImg} alt="" />
                        </div>
                        <div className="cart__name">Футболка Ralph Lauren</div>
                        <div className="cart__count">
                            <img src={cartMinus} alt="" />
                            <span>5</span>
                            <img src={cartPlus} alt="" />
                        </div>
                        <div className="cart__price">350 $</div>
                    </div>
                    <div className="cart__item">
                        <div className="1">adasd</div>
                        <div className="1">adasd</div>
                        <div className="1">adasd</div>
                        <div className="1">adasd</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
