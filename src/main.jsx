import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import Store from "./RTK/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
