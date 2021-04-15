import React from "react";

import productPig from "../../assets/img/pig.svg";
import productTruck from "../../assets/img/delivery-truck.svg";

export const ProductAbout = () => {
    return (
        <div class="product-about">
            <div className="container">
                <div className="product-about__inner">
                    <div class="product-about__info">
                        <ul class="nav-tabs">
                            <li class="nav-item">
                                <a
                                    href="#about_product"
                                    class="nav-link"
                                    data-toggle="tab"
                                >
                                    Описание
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div
                                class="tab-pane active container"
                                id="about_product"
                            >
                                <p>
                                    Полутвердый пластичный однородный сыр,
                                    слегка ломкий на изгибе. Пажитник придает
                                    легкое ореховое послевкусие. В Италии
                                    считается столовым сыром, который подходит к
                                    любому времени суток и к любому блюду и к
                                    вину
                                </p>
                                <p>Вес головки 500 г. +/-10%. Цена за 1 кг.</p>
                                <p>
                                    Продукция компании Alpenville изготовлена
                                    преимущественно из Шарангского молока
                                </p>
                            </div>
                            <div
                                class="tab-pane container"
                                id="product_parametr"
                            >
                                <ul class="product_ul">
                                    <li>
                                        <b>Калории: </b>420
                                    </li>
                                    <li>
                                        <b>Жиры: </b>420
                                    </li>
                                    <li>
                                        <b>Белки: </b>420
                                    </li>
                                    <li>
                                        <b>Углеводы: </b>420
                                    </li>
                                    <li>
                                        <b>Масса: </b>420 грамм
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="product-about__sidebar">
                        <div class="title">Закажите на 3000 RUB и получите</div>
                        <div class="line">
                            <img src={productPig} alt="" />
                            <span>
                                <b>300 RUB</b> на бонусный счет
                            </span>
                        </div>
                        <div class="line">
                            <img src={productTruck} alt="" />
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
                                    class="green-line"
                                    style={{ width: 60 + "%" }}
                                ></div>
                                <div
                                    class="round"
                                    data-min="1000 (минимальный заказ)"
                                ></div>
                            </div>
                            <div class="range-text">
                                Осталось <b>1988 RUB</b> до бесплатной доставки
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
