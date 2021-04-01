import React from "react";

import productsImg from "../../assets/img/products.png";

export const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">
                    <div className="products__item">
                        <div className="products__img">
                            <img src={productsImg} alt="" />
                        </div>
                        <div className="products__title">
                            <a href="">Футболка Ralph Lauren</a>
                        </div>
                        <div className="products__description">
                            Описание мраморной говядины, состоящее из нескольких
                            преложений. Можно наполнить.
                        </div>
                        <div className="products__rating">★★★★★</div>
                        <div className="products__price">1050 ₽</div>

                        <div className="products__btn">В корзину</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
