import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import SignUp from "../component/Signup";
import Landing from "../component/Landing";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
