import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const root = document.getElementById("root");

if (!root) {
    console.error("Root el not found!");
} else {
    createRoot(root).render(<App />);
}
