import React from "react";
import { BasketButton } from "./BasketButton";

const BasketButtonStory: React.FC = () => {
    return (
        <div style={{ display: "grid", rowGap: "1em" }}>
            <BasketButton />
            <BasketButton itemsInCart={1} />
            <BasketButton itemsInCart={1122} />
            <BasketButton itemsInCart={100} />
        </div>
    );
};

export default BasketButtonStory;
