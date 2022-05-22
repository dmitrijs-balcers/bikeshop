import * as React from "react";
import cn from "classnames";
import { grid, container } from "./App.module.css";
import * as files from "./assets/bike*.webp";
import StackGrid from "react-stack-grid";

type Bike = { name: string; src: string };

const bikes: Bike[] = Object.values(files).map((v, i) => {
    const image = new Image();
    image.src = v;

    return {
        name: `bike${i + 1}`,
        src: v,
    };
});

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
                        <div key={b.name}>
                            <img width="100%" src={b.src} />
                        </div>
                    );
                })}
            </StackGrid>
        </div>
    );
};
