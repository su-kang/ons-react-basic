import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthProvider from "./components/AuthContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider isAuthProp={false}>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
