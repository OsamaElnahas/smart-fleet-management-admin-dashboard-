import React from "react";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  return (
    <>
      {localStorage.getItem("token") ? <Outlet /> : <Navigate to={"/Login"} />}{" "}
    </>
  );
}
