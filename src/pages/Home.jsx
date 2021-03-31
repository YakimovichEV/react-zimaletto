import React from "react";

import ImageSlider from "../components/Slider/ImageSlider";
import { SliderData } from "../components/Slider/SliderData";
import { Categories } from "../components/Categories/Categories";

export const Home = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
            <Categories />
        </div>
    );
};
