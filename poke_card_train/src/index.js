import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Assuming your main App component is in src/App.js
import "./index.css";  // If you have any global styles

// Make sure you have all your stylesheets, fonts, or other required assets imported here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);