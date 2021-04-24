import React from "react";
import { Link } from "react-router-dom";

import arrow from "../assets/img/payment-arrow.svg";

export const Delivery = () => {
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery__title">
                    <h1>Доставка</h1>
                </div>
                <div className="delivery__item">
                    <h3>Получение в нашем магазине:</h3>
                    <p>В магазине по вашему выбору, за 3-7 рабочих дней.</p>
                    <p>
                        Не забудьте, что для получения заказа (как покупателем,
                        так и другим лицом) необходимо предъявить QR-код с
                        электронного чека. Если вместо вас придет другой
                        человек, дополнительно потребуется его удостоверение
                        личности.
                    </p>
                </div>
                <div className="delivery__item">
                    <h3>Доставка на дом:</h3>
                    <p>
                        Стандартная доставка - 149,00 UAH / БЕСПЛАТНО (ДЛЯ
                        ЗАКАЗОВ ОТ 1999.00 UAH)
                    </p>
                    <p>
                        Примерный срок доставки составит около 3-7 рабочих дней,
                        в зависимости от адреса доставки.
                    </p>
                    <p>
                        В момент покупки мы покажем вам доступные пункты выдачи.
                    </p>
                    <p>
                        Не забудьте, что при получении заказа вам нужно
                        предъявить документ, удостоверяющий личность. Если
                        получатель заказа не является лицом, сделавшим покупку,
                        он должен предоставить документ, который подтвердждает
                        личность и електронное либо бумажное подтверждение
                        заказа.
                    </p>
                </div>

                <div className="delivery__btn">
                    <Link to="/" className="delivery__link">
                        <span className="btn-left">В каталог</span>
                    </Link>
                    <Link to="/payment" className="delivery__link">
                        <span className="btn-right">
                            Об оплате <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
