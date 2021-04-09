import React from "react";
import { Link } from "react-router-dom";

import cartRemove from "../assets/img/cart-remove.svg";
import cartImg from "../assets/img/cart-img.svg";
import cartMinus from "../assets/img/cart-minus.svg";
import cartPlus from "../assets/img/cart-plus.svg";
import cartEmpty from "../assets/img/empty-cart.png";

export const Cart = () => {
    return (
        <section className="cart">
            <div class="cart__product cart-product-order ">
                <div class="cart-wrapper">
                    <div class="container">
                        <h2 class="sub-title">Корзина</h2>
                        <div class="cart-top">
                            <div class="order-items">
                                <div class="cart-product-item">
                                    <div class="cart-product-left d-flex">
                                        <img
                                            src="/img/cart-remove.svg"
                                            alt=""
                                        />

                                        <div class="cart-product-img"></div>
                                        <div class="cart-product-name">
                                            Хачапури
                                        </div>
                                    </div>
                                    <div class="cart-product-right d-flex">
                                        <div class="quantity">2шт.</div>
                                        <div class="cart-product-price">
                                            350 ₽
                                        </div>
                                    </div>
                                </div>
                                <div class="cart-product-item">
                                    <div class="cart-product-left d-flex">
                                        <img
                                            src="/img/cart-remove.svg"
                                            alt=""
                                        />

                                        <div class="cart-product-img"></div>
                                        <div class="cart-product-name">
                                            Хачапури
                                        </div>
                                    </div>
                                    <div class="cart-product-right d-flex">
                                        <div class="quantity">2шт.</div>
                                        <div class="cart-product-price">
                                            350 ₽
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-right-side">
                                <div class="center">
                                    <div class="title">Заказ №47593</div>

                                    <div class="mb">
                                        <span>
                                            Товаров в корзине -
                                            <span>700 ₽</span>
                                        </span>
                                    </div>

                                    <p>
                                        Промокод <span>- 100 ₽</span>
                                    </p>

                                    <span>Итого к оплате</span>
                                    <p>600 ₽</p>

                                    <button>Оформить заказ</button>
                                </div>
                            </div>
                        </div>

                        <div class="card-sidebar">
                            <div class="purchase-info">
                                <div class="title">
                                    Закажите на 3000 RUB и получите
                                </div>
                                <div class="line">
                                    <img src="/img/pig.svg" alt="" />
                                    <span>
                                        <b>300 RUB</b> на бонусный счет
                                    </span>
                                </div>
                                <div class="line">
                                    <img src="/img/delivery-truck.svg" alt="" />
                                    <span>
                                        <b>Бесплатная доставка</b>
                                    </span>
                                </div>
                                <div class="range-slide">
                                    <div
                                        class="range-line"
                                        data-mins="0"
                                        data-maxs="3000"
                                    >
                                        <div
                                            style={{ width: 60 + "%" }}
                                            class="green-line"
                                        ></div>
                                        <div
                                            class="round"
                                            data-min="1000 (минимальный заказ)"
                                        ></div>
                                    </div>
                                    <div class="range-text">
                                        Осталось <b>1988 RUB</b> до бесплатной
                                        доставки
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

{
    /* <div class="content">
    <div class="container container--cart">
        <div class="cart cart--empty">
            <h2>
                Корзина пустая <icon>😕</icon>
            </h2>
            <p>
                Вероятней всего, вы ничего еще не заказали.
                <br />
                Для того, чтобы сделать заказ, перейдите на главную страницу.
            </p>
            <img src={cartEmpty} alt="Empty cart" />
            <Link to="/" className="cart__link">
                <a href="/" class="button">
                    <span>Вернуться назад</span>
                </a>
            </Link>
        </div>
    </div>
</div>; */
}
