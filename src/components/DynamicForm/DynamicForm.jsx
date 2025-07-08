import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Validation Schema
const schema = Yup.object().shape({
  palletNumber: Yup.string().required("Plate Number is required"),
  joinedYear: Yup.string().required("Joined Year is required"),
  fuelType: Yup.number().required("Fuel Type is required"),
  kmDriven: Yup.number().required("KM Driven is required"),
  status: Yup.number().required("Status is required"),
  modelId: Yup.string().required("Model ID is required"),
  modelYear: Yup.number().required("Model Year is required"),
  transmissionType: Yup.number().nullable(),
  engineSize: Yup.string().nullable(),
  tireCondition: Yup.number().nullable(),
  brakeCondition: Yup.number().nullable(),
  batteryStatus: Yup.number().nullable(),
  drivingCondition: Yup.number().nullable(),
  lastAssignedDate: Yup.string().nullable(),
  lastMaintenanceDate: Yup.string().nullable(),
});

export default function VehiclesAdd() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      palletNumber: "",
      joinedYear: "",
      fuelType: "",
      kmDriven: "",
      status: "",
      modelId: "",
      modelYear: "",
      transmissionType: null,
      engineSize: "",
      tireCondition: null,
      brakeCondition: null,
      batteryStatus: null,
      drivingCondition: null,
      lastAssignedDate: null,
      lastMaintenanceDate: null,
    },
    mode: "all",
  });

  // Get Model Names
  async function getModels() {
    try {
      const response = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/Model",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data: modelsData } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  async function onSubmit(data) {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://veemanage.runasp.net/api/Vehicle",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer <your_token_here>`,
          },
        }
      );
      console.log("Vehicle added successfully:", response.data);
    } catch (err) {
      console.error("Error adding vehicle:", err);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  }

  // Options for each select
  const selectFields = [
    {
      label: "Fuel Type",
      name: "fuelType",
      options: [
        { value: 1, label: "Petrol" },
        { value: 2, label: "Diesel" },
        { value: 3, label: "Electric" },
      ],
    },
    {
      label: "Status",
      name: "status",
      options: [
        { value: 1, label: "Active" },
        { value: 2, label: "Inactive" },
        { value: 3, label: "In Repair" },
      ],
    },
    {
      label: "Transmission Type",
      name: "transmissionType",
      options: [
        { value: 1, label: "Manual" },
        { value: 2, label: "Automatic" },
      ],
    },
    {
      label: "Tire Condition",
      name: "tireCondition",
      options: [
        { value: 1, label: "New" },
        { value: 2, label: "Used" },
        { value: 3, label: "Worn Out" },
      ],
    },
    {
      label: "Brake Condition",
      name: "brakeCondition",
      options: [
        { value: 1, label: "Good" },
        { value: 2, label: "Needs Replacement" },
      ],
    },
    {
      label: "Battery Status",
      name: "batteryStatus",
      options: [
        { value: 1, label: "Working" },
        { value: 2, label: "Low" },
        { value: 3, label: "Dead" },
      ],
    },
    {
      label: "Driving Condition",
      name: "drivingCondition",
      options: [
        { value: 1, label: "Excellent" },
        { value: 2, label: "Average" },
        { value: 3, label: "Poor" },
      ],
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-6">Add Vehicle</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-5"
      >
        {/* Input Fields */}
        {[
          ["Plate Number", "palletNumber", "text"],
          ["Joined Year", "joinedYear", "text"],
          ["Model Year", "modelYear", "number"],
          ["KM Driven", "kmDriven", "number"],
          ["Engine Size", "engineSize", "text"],
          ["Last Assigned Date", "lastAssignedDate", "datetime-local"],
          ["Last Maintenance Date", "lastMaintenanceDate", "datetime-local"],
        ].map(([label, name, type]) => (
          <div className="flex flex-col" key={name}>
            <label className="font-semibold mb-1">{label}</label>
            <input
              type={type}
              {...register(name)}
              className="border border-gray-300 rounded-md p-2"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
          </div>
        ))}

        {/* Model ID as dynamic select from API */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Model</label>
          <select
            {...register("modelId")}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Model</option>
            {modelsData?.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
          {errors.modelId && (
            <p className="text-red-500 text-sm">{errors.modelId.message}</p>
          )}
        </div>

        {/* Select Fields with different options */}
        {selectFields.map(({ label, name, options }) => (
          <div className="flex flex-col" key={name}>
            <label className="font-semibold mb-1">{label}</label>
            <select
              {...register(name)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select {label}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
          </div>
        ))}

        {/* Submit & Error */}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={!isValid || isLoading}
          className={`px-5 py-2 rounded-lg text-white font-semibold ${
            !isValid || isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Saving..." : "Create"}
        </button>
      </form>
    </div>
  );
}
