import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/theme-context";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
