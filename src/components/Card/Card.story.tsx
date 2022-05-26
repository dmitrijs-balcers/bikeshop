import React from "react";
import { Card, CardProps } from "./Card";

const bikes: CardProps[] = [
    {
        src: new URL("../../assets/bike1.webp", import.meta.url),
        name: "bike1",
        onClick: () => undefined,
        isSelected: false,
    },
    {
        src: new URL("../../assets/bike2.webp", import.meta.url),
        name: "bike2",
        onClick: () => undefined,
        isSelected: true,
    },
];

const CardStory: React.FC = () => {
    return (
        <>
            {bikes.map((b) => (
                <CardWrapper key={b.name}>
                    <Card {...b} />
                </CardWrapper>
            ))}
        </>
    );
};

const CardWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ width: "200px", display: "inline-block" }}>
            {children}
        </div>
    );
};

export default CardStory;
