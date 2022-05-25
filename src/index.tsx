import * as React from "react";
import { createRoot } from "react-dom/client";
import { App, Bike } from "./components/App";
import "modern-normalize/modern-normalize.css";

const root = document.getElementById("root");

const bikes: Bike[] = [
    { name: "Bike 1", src: new URL("./assets/bike1.webp", import.meta.url) },
    { name: "Bike 2", src: new URL("./assets/bike2.webp", import.meta.url) },
    { name: "Bike 3", src: new URL("./assets/bike3.webp", import.meta.url) },
    { name: "Bike 5", src: new URL("./assets/bike5.webp", import.meta.url) },
    { name: "Bike 7", src: new URL("./assets/bike7.webp", import.meta.url) },
    { name: "Bike 6", src: new URL("./assets/bike6.webp", import.meta.url) },
    { name: "Bike 8", src: new URL("./assets/bike8.webp", import.meta.url) },
    { name: "Bike 4", src: new URL("./assets/bike4.webp", import.meta.url) },
    { name: "Bike 9", src: new URL("./assets/bike9.webp", import.meta.url) },
    { name: "Bike 10", src: new URL("./assets/bike10.webp", import.meta.url) },
    { name: "Bike 11", src: new URL("./assets/bike11.webp", import.meta.url) },
    { name: "Bike 12", src: new URL("./assets/bike12.webp", import.meta.url) },
];

if (!root) {
    console.error("Root el not found!");
} else {
    createRoot(root).render(<App bikes={bikes} />);
}
