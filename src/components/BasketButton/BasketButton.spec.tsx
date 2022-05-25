import React from "react";
import { render } from "@testing-library/react";
import { BasketButton } from "./BasketButton";

describe("BasketButton", () => {
    it("should render with items in cart", () => {
        const { getByTestId } = render(<BasketButton itemsInCart={1} />);
        expect(getByTestId("items-in-cart").textContent).toEqual("1");
    });

    it("should not render 0", () => {
        const { getByTestId } = render(<BasketButton itemsInCart={0} />);
        expect(getByTestId("items-in-cart").textContent).toEqual("");
    });
});
