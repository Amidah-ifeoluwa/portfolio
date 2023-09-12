import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);


// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}



