import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
import { set } from "lodash";
// import { ColorRing } from "react-loader-spinner";

const schema = yup.object().shape({
  email: yup.string().email("enter a valid email").required("required"),
  password: yup.string().required("required"),
});
export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(data) {
    setIsLoading(true);
    console.log("Form Data:", data);

    try {
      // setIsLoading(true);
      const res = await axios.post(
        "http://veemanage.runasp.net/api/Account/login",
        data
      );
      console.log("Login Successful:", res.data);
      localStorage.setItem("token", res?.data?.token); //saving the token in local storage
      localStorage.setItem("email", res?.data?.email); //saving the email in local storage
      
      if (res?.data?.mustChangePassword == true) {
        navigate("/ResetPassword");
      } else {
        !errorMessage && toast.success("Welcome Back !");
        setTimeout(() => {
          navigate("/Overview");
        }, 1000);
      }
      !errorMessage && setErrorMessage("");
    } catch (error) {
      console.error("Login Error:", error);
    
      const backendMessage = error?.response?.data?.message || "Login failed. Please try again.";
      
      toast.error(backendMessage);
      setErrorMessage(backendMessage);
    }

    setIsLoading(false);
  }
  
  return (
    <>
      <div className="w-full font-Poppins flex items-center justify-center bg-stone-100">
        <div className="parent flex flex-col justify-around lg:w-[30%] 1024-1120:w-[40%] md:w-[50%] md:mx-auto w-full min-h-screen lg:mx-auto rounded-lg bg-white shadow-md px-6 py-10 items-center sm:w-[50%] sm:mx-auto">
          <div className="title text-4xl text-center  text-primaryColor mb-14 md:mb-0 ">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>
          <form
            action=""
            className="flex-3 w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-2">
              <label className="block" htmlFor="email">
                email
              </label>
              <input
                {...register("email")}
                className="border  rounded-md p-2  w-full my-2"
                type="email"
                name="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                {...register("password")}
                className=" border rounded-md p-2  w-full my-2 "
                type="password"
                name="password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              disabled={isLoading}
              className={`w-full flex justify-center bg-blackColor hover:bg-[#333] transition duration-300 text-white rounded-lg p-2 mt-12  text-lg font-Poppins ${
                isLoading && "opacity-50 cursor-not-allowed"
              }`}
              type="submit"
            >
              {isLoading ? (
                <div className="d-flex justify-content-center">
                  <ColorRing
                    visible={true}
                    height="45"
                    width="45"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />
                </div>
              ) : (
                "Login"
              )}
            </button>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
