import { fireEvent, getByTestId, render } from "@testing-library/react";
import { App, Bike } from "./App";
import * as React from "react";
import cardStyles from "./Card/Card.module.css";

const bikes: Bike[] = [
    { name: "Bike 1", src: new URL("./assets/bike1.webp", import.meta.url) },
    { name: "Bike 2", src: new URL("./assets/bike2.webp", import.meta.url) },
    { name: "Bike 3", src: new URL("./assets/bike3.webp", import.meta.url) },
];

describe("App", () => {
    it("should render bikes", () => {
        const { getAllByTestId } = render(<App bikes={bikes} />);

        expect(getAllByTestId("bike-name").map((el) => el.textContent)).toEqual(
            ["Bike 1", "Bike 2", "Bike 3"],
        );
    });

    it("should select bike on click", () => {
        const { getAllByTestId } = render(<App bikes={bikes} />);

        const secondBike = getAllByTestId("bike-card")[1];

        fireEvent.click(secondBike);

        expect(getByTestId(secondBike, "checkbox").classList).toContain(
            cardStyles.visible,
        );
    });

    it("should de-select bike on click", () => {
        const { getAllByTestId } = render(<App bikes={bikes} />);

        const secondBike = getAllByTestId("bike-card")[1];

        fireEvent.click(secondBike);
        fireEvent.click(secondBike);

        expect(getByTestId(secondBike, "checkbox").classList).not.toContain(
            cardStyles.visible,
        );
    });
});
