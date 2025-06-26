import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import get from "lodash.get";
import { Link, NavLink } from "react-router";

export default function DynamicForm({
  schema,
  fields,
  onSubmit,
  title,
  defaultValues,
  back_link,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "all",
  });

  return (
    <>
      <div className="font-bold mb-7  text-2xl font-Inter ">{title}</div>
      <div>
        <form
          action=""
          className="shadow-md p-6 rounded-lg flex flex-col gap-3 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-2 mb-2">
              <label htmlFor="" className="font-semibold">
                {field.label}
              </label>
              <input
                {...register(field.name)}
                className="border border-stone-300 rounded-lg w-[100%] p-1.5 "
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
              {get(errors, field.name) && (
                <p className="text-red-500 text-sm">
                  {get(errors, field.name).message}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-end w-[100%] gap-4 mt-4">
            <button
              className={`py-2 rounded-lg w-[100px] ${
                !isValid
                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-white hover:bg-primaryColor-dark"
              }`}
              disabled={!isValid}
            >
              Create
            </button>
            <button className="border border-stone-300 py-2  rounded-lg w-[100px]">
              <Link className="p-3 px-7" to={back_link}>
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
