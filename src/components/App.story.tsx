import React from "react";
import { App, Bike } from "./App";

const bikes: Bike[] = [
    { name: "Bike 1", src: new URL("../assets/bike1.webp", import.meta.url) },
    { name: "Bike 2", src: new URL("../assets/bike2.webp", import.meta.url) },
    { name: "Bike 3", src: new URL("../assets/bike3.webp", import.meta.url) },
    { name: "Bike 5", src: new URL("../assets/bike5.webp", import.meta.url) },
    { name: "Bike 7", src: new URL("../assets/bike7.webp", import.meta.url) },
    { name: "Bike 6", src: new URL("../assets/bike6.webp", import.meta.url) },
    { name: "Bike 8", src: new URL("../assets/bike8.webp", import.meta.url) },
    { name: "Bike 4", src: new URL("../assets/bike4.webp", import.meta.url) },
    { name: "Bike 9", src: new URL("../assets/bike9.webp", import.meta.url) },
    { name: "Bike 10", src: new URL("../assets/bike10.webp", import.meta.url) },
    { name: "Bike 11", src: new URL("../assets/bike11.webp", import.meta.url) },
    { name: "Bike 12", src: new URL("../assets/bike12.webp", import.meta.url) },
];

const AppStory = () => {
    return <App bikes={bikes} />;
};

export default AppStory;
