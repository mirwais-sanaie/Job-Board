import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";
import { GeneralContextApi } from "./contexts/GeneralContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextApi>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GeneralContextApi>
  </StrictMode>
);
