import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

export const Categories = () => {
    var settings = {
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SamplePrevArrow />,
    };
    return (
        <div className="categories">
            <div className="container">
                <Slider {...settings}>
                    <div className="categories__title">
                        <span className="active">Все</span>
                    </div>
                    <div className="categories__title">
                        <span>Футболки</span>
                    </div>
                    <div className="categories__title">
                        <span>Шорты</span>
                    </div>
                    <div className="categories__title">
                        <span>Кроссовки</span>
                    </div>
                    <div className="categories__title">
                        <span>Ветровки</span>
                    </div>
                    <div className="categories__title">
                        <span>Поло</span>
                    </div>
                    <div className="categories__title">
                        <span>Джинсы</span>
                    </div>
                    <div className="categories__title">
                        <span>Худи</span>
                    </div>
                    <div className="categories__title">
                        <span>Бейсболки</span>
                    </div>
                </Slider>
            </div>
        </div>
    );
};
