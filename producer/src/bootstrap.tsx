import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/watch" Component={Component} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}