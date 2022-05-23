import { act, render } from "@testing-library/react";
import { App } from "./App";
import * as React from "react";

describe("App", () => {
    it("should render bikes", async () => {
        const { getAllByTestId } = render(<App />);

        await act(async () => {
            await new Promise((resolve) =>
                window.requestAnimationFrame(resolve),
            );
        });

        expect(getAllByTestId("bike-name").map((el) => el.textContent)).toEqual(
            [
                "Bike 1",
                "Bike 2",
                "Bike 3",
                "Bike 4",
                "Bike 5",
                "Bike 6",
                "Bike 7",
                "Bike 8",
                "Bike 9",
                "Bike 10",
                "Bike 11",
                "Bike 12",
            ],
        );
    });
});
