import * as React from "react";
import cn from "classnames";

import * as styles from "./Card.module.css";

export type CardProps = {
    src: URL;
    name: string;
    isSelected?: boolean;
    onClick: (bikeName: string) => void;
};

export const Card: React.FC<CardProps> = ({
    name,
    src,
    isSelected,
    onClick,
}) => {
    return (
        <div
            data-testid={"bike-card"}
            className={cn(styles.card, { [styles.selected]: isSelected })}
            onClick={() => onClick(name)}
        >
            <div data-testid={"bike-name"}>{name}</div>
            <div>
                <img width="100%" src={src.toString()} alt={name} />
                <div
                    data-testid="checkbox"
                    className={cn(styles.checkBox, {
                        [styles.visible]: isSelected,
                    })}
                >
                    <span>✓</span>
                </div>
            </div>
        </div>
    );
};
