import * as React from "react";
import cn from "classnames";
import { grid, container } from "./App.module.css";
import StackGrid from "react-stack-grid";

type Bike = { name: string; src: URL };

const bikes: Bike[] = [
    { name: "Bike 1", src: new URL("./assets/bike1.webp", import.meta.url) },
    { name: "Bike 2", src: new URL("./assets/bike2.webp", import.meta.url) },
    { name: "Bike 3", src: new URL("./assets/bike3.webp", import.meta.url) },
    { name: "Bike 4", src: new URL("./assets/bike4.webp", import.meta.url) },
    { name: "Bike 5", src: new URL("./assets/bike5.webp", import.meta.url) },
    { name: "Bike 6", src: new URL("./assets/bike6.webp", import.meta.url) },
    { name: "Bike 7", src: new URL("./assets/bike7.webp", import.meta.url) },
    { name: "Bike 8", src: new URL("./assets/bike8.webp", import.meta.url) },
    { name: "Bike 9", src: new URL("./assets/bike9.webp", import.meta.url) },
    { name: "Bike 10", src: new URL("./assets/bike10.webp", import.meta.url) },
    { name: "Bike 11", src: new URL("./assets/bike11.webp", import.meta.url) },
    { name: "Bike 12", src: new URL("./assets/bike12.webp", import.meta.url) },
];

export const App: React.FC = () => {
    return (
        <div className={cn(container)}>
            <StackGrid
                className={cn(grid)}
                columnWidth={"33%"}
                monitorImagesLoaded={true}
            >
                {bikes.map((b) => {
                    return (
                        <div key={b.name} data-testid={"bike-card"}>
                            <div>
                                <div data-testid={"bike-name"}>{b.name}</div>
                                <img
                                    width="100%"
                                    src={b.src.toString()}
                                    alt={b.name}
                                />
                            </div>
                        </div>
                    );
                })}
            </StackGrid>
        </div>
    );
};
