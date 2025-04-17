import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  password: yup.string().required("required"),
  confirmPassword: yup.string().required("required"),
});

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(data) {
    try {
      const res = await axios.post(
        "http://localhost:5034/api/Account/resetpassword",
        data
      );
      console.log("Password Reset Successful:", res.data);
    } catch (error) {
      console.error("Error Resetting Password:", error);
    }
  }


  return (
    <div>
      <div className="w-full font-Poppins items-center justify-center bg-stone-100">
        <div className="parent flex flex-col justify-around lg:w-[30%] 1024-1120:w-[40%] md:w-[50%] md:mx-auto w-full min-h-screen lg:mx-auto rounded-lg bg-white shadow-md px-6 py-10 items-center sm:w-[50%] sm:mx-auto ">
          <div className="title text-4xl text-center  text-primaryColor mb-14 md:mb-0 ">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>

          <form className="p-5 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <h2 className="lg:text-2xl font-medium text-center mb-10 1024-1120:text-xl sm:text-xl ">
                Reset Your Password
              </h2>
              <div>
                <label className=""    >New Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="border rounded-md p-1.5 w-[100%]"
                />
              </div>
              <div>
                <label className="">Confirm Password</label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  className="border rounded-md p-1.5 w-[100%]"
                />
              </div>

              <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

