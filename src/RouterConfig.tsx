import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Help from "./Help";
import About from "./About";

export const RouterConfig: React.VFC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="#help" element={<Help />} />
          <Route path="#about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
