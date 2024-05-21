import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./Context/ModalProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "./Context/ThemeContext.jsx";
import ChatIndex from "./pages/ChatPages/ChatIndex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastContainer />
      <ModalProvider>
        <Background />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

function Background() {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? "bg-white" : "bg-darkcolor"}>
      <App />
      <ChatIndex />
    </div>
  );
}
