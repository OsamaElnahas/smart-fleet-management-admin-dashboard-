import React from "react";

const ForgetPassword = () => {
  return (
    <div>
      <div className="w-full font-Poppins items-center justify-center bg-stone-100">
        <div className="parent flex flex-col justify-around lg:w-[30%] 1024-1120:w-[40%] md:w-[50%] md:mx-auto w-full min-h-screen lg:mx-auto rounded-lg bg-white shadow-md px-6 py-10 items-center sm:w-[50%] sm:mx-auto ">
          <div className="title text-4xl text-center  text-primaryColor mb-14 md:mb-0 ">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>

          <form action="" className="mt-[-50%] p-5 ">
            <div className="title text-base text-center font-medium text-blackColor mb-14 md:mb-7">
              Just one step away from recovering your account.
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="block">
                Email
              </label>
              <div className="flex flex-col gap-6 justify-center items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-[#666666] border rounded-md p-1.5 w-[100%]"
                />
                <button className="bg-blackColor hover:bg-[#333] transition duration-300 text-white p-2 rounded-lg w-[70%] text-center">
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
