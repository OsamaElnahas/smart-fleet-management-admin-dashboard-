import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("enter a valid email").required("required"),
  password: yup.string().required("required"),
});
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  async function  1(data) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5034/api/Account/login",
        data
      );
      console.log("Login Successful:", res.data);
    } catch (error) {
      console.error("Login Error:", error);
      setError("Something went wrong. Please try again.");
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
            <button className="w-full bg-blackColor hover:bg-[#333] transition duration-300 text-white rounded-lg p-2 mt-12  text-lg font-Poppins">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
