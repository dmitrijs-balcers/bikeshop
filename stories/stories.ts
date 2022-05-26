export const stories = {
    Card: () => import("../src/components/Card/Card.story"),
    BasketButton: () =>
        import("../src/components/BasketButton/BasketButton.story"),
    "Whole App": () => import("../src/components/App.story"),
};

export const storiesNames = Object.keys(stories) as Array<keyof typeof stories>;
