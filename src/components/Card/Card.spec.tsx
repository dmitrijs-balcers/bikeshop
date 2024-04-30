import { fireEvent, render } from "@testing-library/react";
import { fn } from "@wdio/browser-runner";
import { Card, type CardProps } from "./Card";
import * as React from "react";

import styles from "./Card.module.css";

const prepareSubject = (props?: Partial<CardProps>) => {
    return render(
        <Card
            src={new URL("test", import.meta.url)}
            name={"Bike 1"}
            onClick={() => undefined}
            {...props}
        />,
    );
};

describe("Card", () => {
    describe("default card", () => {
        it("should render name", () => {
            const subject = prepareSubject();
            const { getByTestId } = subject;
            expect(getByTestId("bike-name").textContent).toEqual("Bike 1");
        });

        it("should render not visible checkbox", () => {
            const subject = prepareSubject();
            const { getByTestId } = subject;
            expect(getByTestId("checkbox").classList).not.toContain(
                styles.visible,
            );
        });
    });

    describe("selected card", () => {
        it("should render visible checkbox", () => {
            const subject = prepareSubject({ isSelected: true });
            const { getByTestId } = subject;
            expect(getByTestId("checkbox").classList).toContain(styles.visible);
        });
    });

    it("should trigger callback on click", () => {
        const onClick = fn();
        const subject = prepareSubject({ onClick: onClick });
        const { getByTestId } = subject;
        fireEvent.click(getByTestId("bike-card"));
        expect(onClick).toHaveBeenCalled();
    });
});
