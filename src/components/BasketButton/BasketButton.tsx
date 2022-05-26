import React from "react";
import * as styles from "./BasketButton.module.css";

export const BasketButton: React.FC<{ itemsInCart?: number }> = ({
    itemsInCart,
}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <span>Basket</span>
                <svg
                    style={{
                        height: "1.3em",
                        lineHeight: "1em",
                        pointerEvents: "none",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 3 3 H 5 L 5.4 5 M 7 13 H 17 L 21 5 H 5.4 M 7 13 L 5.4 5 M 7 13 L 4.7 15.3 C 4.1 15.9 4.5 17 5.4 17 H 17 M 17 17 A 2 2 0 1 0 17 21 A 2 2 0 0 0 17 17 Z M 9 19 A 2 2 0 1 1 5 19 A 2 2 0 0 1 9 19 Z"
                    />
                </svg>
                <div
                    data-testid={"items-in-cart"}
                    className={styles.itemsInCart}
                >
                    {itemsInCart ? itemsInCart : ""}
                </div>
            </button>
        </div>
    );
};
