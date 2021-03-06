import * as React from "react";
import cn from "classnames";
import appStyles from "./App.module.css";
import Masonry from "react-masonry-css";
import { Card } from "./Card";
import { BasketButton } from "./BasketButton/BasketButton";

export type Bike = { name: string; src: URL };
type State = { [id in string]: boolean | undefined };

function bikesReducer(
    state: State,
    action: { type: "ADD_BIKE" | "REMOVE_BIKE"; bikeName: string },
): State {
    switch (action.type) {
        case "ADD_BIKE":
            return { ...state, [action.bikeName]: true };
        case "REMOVE_BIKE":
            return { ...state, [action.bikeName]: false };
    }
}

export const App: React.FC<{ bikes: Bike[] }> = ({ bikes }) => {
    const [state, dispatch] = React.useReducer(bikesReducer, {});
    const add = React.useCallback(
        (bikeName: string) => dispatch({ type: "ADD_BIKE", bikeName }),
        [dispatch],
    );
    const remove = React.useCallback(
        (bikeName: string) => dispatch({ type: "REMOVE_BIKE", bikeName }),
        [dispatch],
    );
    return (
        <div className={cn(appStyles.container)}>
            <div className={cn(appStyles.navBar)}>
                <BasketButton
                    itemsInCart={Object.values(state).filter((v) => !!v).length}
                />
            </div>
            <Masonry
                className={appStyles.grid}
                breakpointCols={3}
                columnClassName={appStyles.column}
            >
                {bikes.map((b) => (
                    <Card
                        key={b.name}
                        {...b}
                        isSelected={state[b.name]}
                        onClick={state[b.name] ? remove : add}
                    />
                ))}
            </Masonry>
        </div>
    );
};
