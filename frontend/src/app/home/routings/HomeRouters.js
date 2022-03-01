import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../core/routers/PrivateRoute";
import Home from "../components/Home";

const HomeRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Home} />}></Route>
      </Routes>
    </div>
  );
};

export default HomeRouters;
