import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context";
import "./index.css";
import { ThemeProvider } from "./context/theme-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./sections/portfolio/ProjectDetails";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </ModalProvider>
    </ThemeProvider>
  </BrowserRouter>
);
