import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom.scss";
import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <App />
);
