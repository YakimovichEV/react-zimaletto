import React from "react";

import productsImg from "../../assets/img/products.png";

export const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">
                    <div className="products__item">
                        <div className="products__img">
                            <img src={productsImg} alt="product" />
                        </div>
                        <div className="products__title">
                            <a href="">Футболка Ralph Lauren</a>
                        </div>
                        <p class="products__description">
                            Эта хлопковая футболка, выстиранная для создания
                            идеального лаконичного вида, - незаменимая вещь, к
                            которой вы будете тянуться снова и снова.
                        </p>
                        <div className="products__rating">
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span className="active"></span>
                            <span></span>
                        </div>
                        <div className="products__price">
                            <b>3200 ₽</b>
                        </div>
                        <div className="products__to-cart">
                            <a href="">В корзину</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
