import React from "react";

import { ProductInfo } from "../components/Product/ProductInfo";
import { ProductAbout } from "../components/Product/ProductAbout";

export const Product = () => {
    return (
        <div>
            <ProductInfo />
            <ProductAbout />
        </div>
    );
};
