import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store/store"; // Import your Redux store
import "./index.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ...
