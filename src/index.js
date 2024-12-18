import "./assets/global-styles/reset.scss";

import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for ReactDOM
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
