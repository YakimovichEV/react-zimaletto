import React from "react";

import ImageSlider from "../components/Slider/ImageSlider";
import { SliderData } from "../components/Slider/SliderData";

export const Home = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
        </div>
    );
};
