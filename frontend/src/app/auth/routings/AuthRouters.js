import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UserDashboard from "../components/UserDashboard";

const AuthRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="userdashboard" element={<UserDashboard />}></Route>
      </Routes>
    </div>
  );
};

export default AuthRouters;
