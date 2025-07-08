import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password Length Must be at Least 8")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
});

export default function ResetPassword() {
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(data) {
    const finalData = {
      ...data,
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token"),
    };
    console.log("Form Data:", finalData);

    try {
      const res = await axios.post(
        "https://veemanage.runasp.net/api/Account/resetpassword",
        finalData
      );
      {
        // !errorMessage && toast.success(res?.data);
      }
      console.log("Password Reset Successful:", res);
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

          <form
            className="p-5 w-full max-w-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-5">
              <h2 className="lg:text-2xl font-medium text-center mb-10 1024-1120:text-xl sm:text-xl ">
                Reset Your Password
              </h2>
              <div>
                <label className="">New Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="border rounded-md p-1.5 w-[100%]"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              <button className="w-full bg-black text-white p-2 rounded-md mt-12 hover:bg-gray-800 transition">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
