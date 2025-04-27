import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile({ data }) {
  const { id } = useParams();

  const schema = yup.object().shape({
    userName: yup.string().required("User Name is required"),
    role: yup.string().required("Role is required"),
    nationalId: yup.string().required("National ID is required"),
    dateOfBirth: yup.string().required("Date of Birth is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    address: yup.object().shape({
      street: yup.string().required("Street is required"),
      area: yup.string().required("Area is required"),
      governorate: yup.string().required("Governorate is required"),
      country: yup.string().required("Country is required"),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (data) {
      reset({
        userName: data?.userName || "-",
        role: data?.role || "-",
        nationalId: data?.nationalId || "-",
        dateOfBirth: data?.dateOfBirth || "-",
        phoneNumber: data?.phoneNumber || "-",
        address: {
          street: data?.address?.street || "-",
          governorate: data?.address?.governorate || "-",
          country: data?.address?.country || "-",
          area: data?.address?.area || "-",
        },
      });
    }
  }, [data, reset]);

  const [editMode, setEditMode] = useState(false);

  async function onSubmit(data) {
    console.log("Form Data:", data);
    try {
      const res = await axios.put(
        `http://veemanage.runasp.net/api/User/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Data updated successfully:", res.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }

  return (
    <>
      <div className="font-bold text-[1.25rem] mb-2">Details</div>
      <div className="info mb-12 border-b-2 border-gray-300 px-3 py-7 flex items-center font-Poppins capitalize">
        <div className="flex gap-5 items-center">
          <span className="icon text-4xl border rounded-[50%] p-4 border-gray-400 ">
            {" "}
            <FaUser />
          </span>
          <div className="flex gap-2">
            <span>name:</span>
            <span>{data && data?.userName}</span>
          </div>
        </div>

        <div className="btns ml-auto flex gap-3">
          <button
            className={`py-1 w-[120px] rounded-md text-white bg-primaryColor transition duration-300 ${
              editMode && "opacity-30 cursor-not-allowed bg-gray-400 "
            }`}
            disabled={editMode}
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="data font-Poppins capitalize mb-8">
        {!editMode ? (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">User Name</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.userName || "null"}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Role</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.role || "null"}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">National Id</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.nationalId || "null"}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Date of Birth</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.dateOfBirth || "null"}
              </div>
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Phone Number</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.phoneNumber || "null"}
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Street</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.address.street || "null"}
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Governorate</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.address.governorate || "null"}
              </div>
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Country</div>
              <div className="field text-gray-500 bg-white rounded-md p-2">
                {data.address.country || "null"}
              </div>
            </div>
          </div>
        ) : (
          <form
            className="grid grid-cols-12 gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">User Name</div>
              <input
                {...register("userName")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.userName && (
                <p className="text-red-500 text-sm">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Role</div>
              <input
                {...register("role")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">National Id</div>
              <input
                {...register("nationalId")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.nationalId && (
                <p className="text-red-500 text-sm">
                  {errors.nationalId.message}
                </p>
              )}
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Date of Birth</div>
              <input
                {...register("dateOfBirth")}
                type="date"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <div className="col-span-6 flex flex-col gap-2">
              <div className="label">Phone Number</div>
              <input
                {...register("phoneNumber")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Street</div>
              <input
                {...register("address.street")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.address?.street && (
                <p className="text-red-500 text-sm">
                  {errors.address?.street.message}
                </p>
              )}
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Governorate</div>
              <input
                {...register("address.governorate")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.address?.governorate && (
                <p className="text-red-500 text-sm">
                  {errors.address?.governorate.message}
                </p>
              )}
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Country</div>
              <input
                {...register("address.country")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.address?.country && (
                <p className="text-red-500 text-sm">
                  {errors.address?.country.message}
                </p>
              )}
            </div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="label">Area</div>
              <input
                {...register("address.area")}
                type="text"
                className="field text-gray-500 bg-white rounded-md p-2"
              />
              {errors.address?.area && (
                <p className="text-red-500 text-sm">
                  {errors.address?.area.message}
                </p>
              )}
            </div>
            <div className="col-span-12 flex gap-3">
              <button
                type="submit"
                className="py-2 px-4 bg-primaryColor rounded-md text-white"
              >
                Save
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 rounded-md text-white"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
