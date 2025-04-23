import { RouterProvider } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ForgetPassword from "./components/Forget-reset-password/ForgetPassword";
import ResetPassword from "./components/Forget-reset-password/ResetPassword";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/sidebar";
import SignUp from "./components/SignUp/SignUp";
import Router from "./components/router/Router";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <>
      {/* <Layout /> */}

      <RouterProvider router={Router} />

      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <ForgetPassword/> */}
      {/* <ResetPassword /> */}
    </>
  );
}
