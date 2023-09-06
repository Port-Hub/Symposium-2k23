import { Routes, Route } from "react-router-dom";

import React from "react";

import Events from "./pages/Events";
import Landing from "./pages/Landing";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};

export default AllRoutes;
