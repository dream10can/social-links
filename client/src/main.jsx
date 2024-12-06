import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          toastOptions={{
            // Default options for specific types
            success: {
              duration: 5000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <App />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
