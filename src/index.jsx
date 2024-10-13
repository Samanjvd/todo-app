import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app-section/App";
import main from "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const script = ReactDOM.createRoot(document.querySelector(".script"));
script.render(<main />);
