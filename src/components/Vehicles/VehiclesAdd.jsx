import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Popup from "../Popup/Popup";
import ExcelTemplateDownloader from "./ExcelTemplateDownloader";

// Validation Schema
const schema = Yup.object().shape({
  palletNumber: Yup.string().required("Plate Number is required"),
  joinedYear: Yup.string().required("Joined Year is required"),
  fuelType: Yup.string().required("Fuel Type is required"),
  kmDriven: Yup.number().required("KM Driven is required"),
  status: Yup.string().required("Status is required"),
  modelId: Yup.string().required("Model Name is required"),
  modelYear: Yup.number().required("Model Year is required"),
  file: Yup.mixed().required("File is required"),
  transmissionType: Yup.string().nullable(),
  engineSize: Yup.string().nullable(),
  tireCondition: Yup.string().nullable(),
  brakeCondition: Yup.string().nullable(),
  batteryStatus: Yup.string().nullable(),
  drivingCondition: Yup.string().nullable(),
  lastAssignedDate: Yup.string().nullable(),
  lastMaintenanceDate: Yup.string().nullable(),
});

export default function VehiclesAdd() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [popup, setPopUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  // Fetch Categories
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/Category",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res.data;
    },
  });

  // Fetch Models by Category
  const { data: modelsData } = useQuery({
    queryKey: ["models", categoryId],
    queryFn: async () => {
      const res = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/Model",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            categroyId: categoryId,
          },
        }
      );
      return res.data;
    },
    enabled: !!categoryId,
  });

  // Submit handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("palletNumber", data.palletNumber);
      formData.append("joinedYear", data.joinedYear);
      formData.append("fuelType", data.fuelType);
      formData.append("kmDriven", data.kmDriven);
      formData.append("status", data.status);
      formData.append("modelId", data.modelId);
      formData.append("modelYear", data.modelYear);
      formData.append("transmissionType", data.transmissionType || "");
      formData.append("engineSize", data.engineSize || "");
      formData.append("tireCondition", data.tireCondition || "");
      formData.append("brakeCondition", data.brakeCondition || "");
      formData.append("batteryStatus", data.batteryStatus || "");
      formData.append("drivingCondition", data.drivingCondition || "");
      formData.append("lastAssignedDate", data.lastAssignedDate || "");
      formData.append("lastMaintenanceDate", data.lastMaintenanceDate || "");
      formData.append("file", data.file[0]); // Upload file

      const res = await axios.post(
        "https://veemanage.runasp.net/api/Vehicle/with-excel-history",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // Don't set Content-Type manually
          },
        }
      );

      console.log("✅ Vehicle added:", res.data);
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Something went wrong. Please try again.");
    }

    setIsLoading(false);
  };

  const selectFields = [
    {
      label: "Fuel Type",
      name: "fuelType",
      options: [
        { value: "Petrol", label: "Petrol" },
        { value: "Diesel", label: "Diesel" },
        { value: "Electric", label: "Electric" },
      ],
    },
    {
      label: "Status",
      name: "status",
      options: [
        { value: "Available", label: "Available" },
        { value: "OnTrip", label: "On Trip" },
        { value: "UnderMaintenance", label: "Under Maintenance" },
        { value: "OutOfService", label: "Out Of Service" },
        { value: "Retired", label: "Retired" },
      ],
    },
    {
      label: "Transmission Type",
      name: "transmissionType",
      options: [
        { value: "Manual", label: "Manual" },
        { value: "Automatic", label: "Automatic" },
      ],
    },
    {
      label: "Tire Condition",
      name: "tireCondition",
      options: [
        { value: "New", label: "New" },
        { value: "Good", label: "Good" },
        { value: "Weak", label: "Weak" },
      ],
    },
    {
      label: "Brake Condition",
      name: "brakeCondition",
      options: [
        { value: "New", label: "New" },
        { value: "Good", label: "Good" },
        { value: "Weak", label: "Weak" },
      ],
    },
    {
      label: "Battery Status",
      name: "batteryStatus",
      options: [
        { value: "New", label: "New" },
        { value: "Good", label: "Good" },
        { value: "Weak", label: "Weak" },
      ],
    },
    {
      label: "Driving Condition",
      name: "drivingCondition",
      options: [
        { value: "Urban", label: "Urban" },
        { value: "Highway", label: "Highway" },
        { value: "Mixed", label: "Mixed" },
      ],
    },
  ];

  const { mutate } = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => {
      console.log("💥 POPUP SHOULD SHOW");

      setPopUp(true);
    },
  });

  return (
    <div className="w-[90%] mx-auto mt-6">
      <ExcelTemplateDownloader />
      <h2 className="text-2xl font-bold mb-6">Add Vehicle</h2>
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-5"
        encType="multipart/form-data"
      >
        {/* Category Select */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Category</label>
          <select
            className="border border-gray-300 rounded-md p-2"
            disabled={isCategoryLoading}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categoryData?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Text Inputs */}
        {[
          ["Plate Number", "palletNumber", "text"],
          ["Joined Year", "joinedYear", "text"],
          ["Model Year", "modelYear", "number"],
          ["KM Driven", "kmDriven", "number"],
          ["Engine Size", "engineSize", "text"],
          ["Last Assigned Date", "lastAssignedDate", "date"],
          ["Last Maintenance Date", "lastMaintenanceDate", "date"],
        ].map(([label, name, type]) => (
          <div className="flex flex-col" key={name}>
            <label className="font-semibold mb-1">{label}</label>
            <input
              type={type}
              {...register(name)}
              className="border border-gray-300 rounded-md p-2"
              placeholder={label}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name].message}
              </p>
            )}
          </div>
        ))}

        {/* File Upload */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Upload Maintenance History Template File After Fill it</label>
          <input
          placeholder="Upload history Maintenance Template File"
            type="file"
            {...register("file")}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
          )}
        </div>

        {/* Model Select */}
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
            <p className="text-red-500 text-sm mt-1">
              {errors.modelId.message}
            </p>
          )}
        </div>

        {/* Dynamic Select Fields */}
        {selectFields.map(({ label, name, options, numeric }) => (
          <div className="flex flex-col" key={name}>
            <label className="font-semibold mb-1">{label}</label>
            <select
              {...register(name)}
              className="border border-gray-300 rounded-md p-2"
              onChange={(e) => {
                const value = e.target.value;
                setValue(name, numeric ? Number(value) : value);
              }}
            >
              <option value="">Select {label}</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name].message}
              </p>
            )}
          </div>
        ))}

        {/* Error & Submit */}
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
      {popup && (
        <Popup
          onClose={() => setPopUp(false)}
          status={true}
          link={"/vehicles"}
        />
      )}
    </div>
  );
}
