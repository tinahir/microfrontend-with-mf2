import React from "react";
import ReactDOM from "react-dom/client";
import Component  from "./App";
import { Route, Routes } from "react-router-dom";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Routes>
        <Route path="/" Component={Component} />
      </Routes>
    </React.StrictMode>
  );
}
