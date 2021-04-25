import React from "react";
import { Link } from "react-router-dom";

import arrow from "../assets/img/payment-arrow.svg";

export const Payment = () => {
    return (
        <section className="payment">
            <div className="container">
                <h1 className="payment__title">Оплата</h1>

                <div className="payment__item">
                    <h2>Как я смогу оплатить?</h2>
                    <p>
                        Если вы платите кредитной картой, с вас не будет
                        взиматься плата до тех пор, пока ваш заказ не будет
                        отправлен. При оплате дебетовой или банковской чековой
                        картой платеж будет немедленно списан с вашего счета.
                    </p>
                </div>
                <div className="payment__item">
                    <h2>Какие способы оплаты вы принимаете?</h2>
                    <ul>
                        <li>Visa</li>
                        <li>MasterCard</li>
                        <li>PayPal</li>
                        <li>Apple Pay</li>
                        <li>Подарочная карта Zimaletto</li>
                    </ul>
                </div>
                <div className="payment__item">
                    <h2>Мы не принимаем следующие формы оплаты:</h2>
                    <ul>
                        <li>CODs</li>
                        <li>Checks</li>
                        <li>
                            Кредитные карты, выпущенные из Афганистана, Анголы,
                            Центральноафриканской Республики, Кот-д'Ивуара,
                            Кубы, Египта, Ганы, Ирана, Ирака, Корейской
                            Народно-Демократической Республики, Либерии, Ливии,
                            Мьянмы, Нигерии, России, Сьерра-Леоне, Сомали,
                            Судана, Сирия и Россия.
                        </li>
                    </ul>
                </div>
                <div className="payment__item">
                    <h2>Почему мой платёж не проходит?</h2>
                    <p>
                        Убедитесь, что ваше имя для выставления счета и адрес
                        соответствуют кредитной карте, которую вы используете
                        для оплаты. Мы оставляем за собой право отменить любой
                        заказ, не соответствующий этим критериям.
                    </p>
                </div>
                <div className="payment__item">
                    <h2>Вы принимаете PayPal?</h2>
                    <p>
                        Да, Zimaletto принимает платежи PayPal. Обратите
                        внимание, что если вы используете PayPal в качестве
                        способа оплаты, вы продолжите стандартный процесс
                        оформления заказа. После того, как вы нажмете кнопку
                        «Отправить заказ», вы будете перенаправлены на
                        PayPal.com для завершения платежа. У вас будет 25 минут,
                        чтобы завершить процесс оформления заказа, и ваш заказ
                        не будет отправлен, пока вы не завершите процесс на
                        PayPal.com. Для получения дополнительной информации
                        посетите{" "}
                        <a
                            href="https://www.paypal.com/us/smarthelp/home"
                            target="blank"
                        >
                            справочный центр PayPal.
                        </a>
                    </p>
                </div>

                <div className="payment__btn">
                    <Link to="/" className="payment__link">
                        <span className="btn-left">В каталог</span>
                    </Link>
                    <Link to="/delivery" className="payment__link">
                        <span className="btn-right">
                            О доставке <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
