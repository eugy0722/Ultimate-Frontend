import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// third-party
import { Provider as ReduxProvider } from "react-redux";

// Import stylesheet
import "./index.css";
// project import
import App from "./App.jsx";
import { store } from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
