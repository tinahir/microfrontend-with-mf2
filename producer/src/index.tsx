import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={App}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
