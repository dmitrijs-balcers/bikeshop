import * as React from "react";
import cn from "classnames";
import { withBorder, background } from "./App.module.css";

export const App: React.FC = () => {
    const [number, increase] = React.useState<number>(0);

    return (
        <>
            <div className={cn(withBorder, background)}>It Works! {number}</div>
            <button type="button" onClick={() => increase(number + 1)}>
                Click!
            </button>
        </>
    );
};
