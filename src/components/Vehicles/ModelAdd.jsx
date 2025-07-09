import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ColorRing } from "react-loader-spinner";
import Popup from "../Popup/Popup";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const vehicleData = {
  Car: {
    Hyundai: ["Elantra", "Accent", "Tucson", "Verna", "Sonata", "Kona"],
    Toyota: ["Corolla", "Yaris", "Camry", "Fortuner", "Land Cruiser", "Hilux"],
    Kia: ["Cerato", "Sportage", "Picanto", "Seltos", "K5", "Carnival"],
    Nissan: ["Sunny", "Sentra", "Juke", "Altima", "X-Trail", "Patrol"],
    Chevrolet: ["Optra", "Aveo", "Captiva", "Malibu", "Equinox", "Traverse"],
    Renault: ["Logan", "Sandero", "Duster", "Kadjar", "Captur", "Megane"],
    BMW: ["318i", "320i", "X1", "X3", "X5", "530i"],
    Mercedes: ["C180", "E200", "GLC", "S-Class", "CLA", "GLA"],
    Skoda: ["Octavia", "Fabia", "Superb", "Kodiaq", "Rapid", "Scala"],
    Geely: ["Emgrand", "Coolray", "Azkarra", "Tugella", "Atlas"],
    Ford: ["Focus", "Fiesta", "Explorer", "Mustang", "Edge", "Ranger"],
    Mazda: ["CX-5", "Mazda3", "Mazda6", "CX-9", "MX-5"],
    Honda: ["Civic", "Accord", "CR-V", "HR-V", "Pilot"],
    Mitsubishi: ["Outlander", "Lancer", "Pajero", "Montero", "Eclipse Cross"],
    Peugeot: ["3008", "5008", "308", "208", "Partner"],
    Volkswagen: ["Golf", "Passat", "Tiguan", "Jetta", "Polo"],
    Audi: ["A3", "A4", "Q5", "A6", "Q7"],
    Chrysler: ["300C", "Voyager", "Pacifica"],
    Opel: ["Astra", "Insignia", "Mokka", "Corsa"],
    Suzuki: ["Swift", "Vitara", "SX4", "Baleno", "Jimny"],
    Fiat: ["Punto", "500", "Doblo", "Panda", "Tipo"],
  },
  SUV: {
    Toyota: ["Fortuner", "Land Cruiser"],
    Hyundai: ["Tucson", "Santa Fe"],
    Kia: ["Sportage", "Seltos"],
    Mazda: ["CX-5", "CX-9"],
    Nissan: ["X-Trail", "Patrol"],
    Mitsubishi: ["Pajero", "Outlander"],
    Peugeot: ["3008", "5008"],
    Ford: ["Explorer", "Edge"],
    Chevrolet: ["Captiva", "Traverse"],
    Haval: ["H6", "Jolion"],
  },
  Bus: {
    Mercedes: ["Sprinter", "Tourismo"],
    Toyota: ["Coaster"],
    KingLong: ["XMQ6127", "XMQ6900"],
    Hyundai: ["County", "Universe"],
    MCV: ["MCV 600", "MCV 500"],
    Fuso: ["Rosa"],
    Iveco: ["Daily Bus"],
  },
  Truck: {
    Isuzu: ["NQR", "FVR", "NMR"],
    Mitsubishi: ["Canter", "Fuso"],
    Toyota: ["Dyna"],
    Ford: ["F-150", "F-250"],
    MAN: ["TGS", "TGX"],
    Volvo: ["FH", "FM"],
    SHACMAN: ["F3000", "X3000"],
  },
  "Mini Truck": {
    Suzuki: ["Carry"],
    DFSK: ["C31", "C35"],
    Changan: ["Star Truck"],
    JMC: ["Board Truck"],
    Bajaj: ["Workhorse"],
    Foton: ["Tunland"],
  },
};


export default function ModelAdd() {
  const navigate = useNavigate();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const { data: categories = [], isLoading: isFetching } = useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://veemanage.runasp.net/api/Vehicle/Category", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  const getNormalizedKey = (categoryName) => {
    return Object.keys(vehicleData).find(
      (key) => key.toLowerCase().trim() === categoryName.toLowerCase().trim()
    );
  };

  const normalizedKey = getNormalizedKey(selectedCategoryName);
  const brands = normalizedKey ? Object.keys(vehicleData[normalizedKey]) : [];
  const models = normalizedKey && selectedBrand
    ? vehicleData[normalizedKey][selectedBrand] || []
    : [];

  const schema = Yup.object().shape({
    CategoryId: Yup.string().required("Category is required"),
    brand: Yup.string().required("Brand is required"),
    name: Yup.string().required("Model is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { category: "", brand: "", model: "" },
    mode: "all",
  });

  const handleCategoryChange = (e) => {
    const id = e.target.value;
    const selectedCat = categories.find((c) => c.id === id);
    const name = selectedCat?.name || "";

    setSelectedCategoryId(id);
    setSelectedCategoryName(name);
    setSelectedBrand("");
    setSelectedModel("");

    setValue("category", id);
    setValue("brand", "");
    setValue("name", "");
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setSelectedBrand(value);
    setSelectedModel("");
    setValue("brand", value);
    setValue("name", "");
  };

  const handleModelChange = (e) => {
    const value = e.target.value;
    setSelectedModel(value);
    setValue("name", value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://veemanage.runasp.net/api/Vehicle/Model",
        data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setStatus(true);
      setIsPopupOpen(true);
      console.log(res?.data);
      
      reset();
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
      setStatus(false);
      console.log(err);
      
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="font-bold mb-7 text-2xl font-Inter">Add Model</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md p-6 rounded-lg flex flex-col gap-3 bg-white"
      >
        {/* Category */}
        <div className="flex flex-col gap-2 mb-1">
          <label className="font-semibold">Category</label>
          <select
            {...register("CategoryId")}
            className="p-3 rounded-md m-1 w-96 border border-stone-300"
            value={selectedCategoryId}
            onChange={handleCategoryChange}
            disabled={isFetching || !categories.length}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.CategoryId && <p className="text-red-500 text-sm">{errors.CategoryId.message}</p>}
        </div>

        {/* Brand */}
        <div className="flex flex-col gap-2 mb-1">
          <label className="font-semibold">Brand</label>
          <select
            {...register("brand")}
            className="p-3 rounded-md m-1 w-96 border border-stone-300"
            value={selectedBrand}
            onChange={handleBrandChange}
            disabled={!brands.length}
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
        </div>

        {/* Model */}
        <div className="flex flex-col gap-2 mb-1">
          <label className="font-semibold">Model</label>
          <select
            {...register("name")}
            className="p-3 rounded-md m-1 w-96 border border-stone-300"
            value={selectedModel}
            onChange={handleModelChange}
            disabled={!models.length}
          >
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {/* Submit */}
        <div className="flex justify-end w-full gap-4 mt-4">
          <button
            type="submit"
            className={`py-2 rounded-lg w-[100px] text-center flex justify-center ${
              !isValid ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-primaryColor text-white hover:bg-primaryColor-dark"
            }`}
            disabled={!isValid}
          >
            {isLoading ? (
              <ColorRing visible height="30" width="30" ariaLabel="loading" colors={["#fff"]} />
            ) : (
              "Create"
            )}
          </button>
          <Link to="/vehicles/model" className="border border-stone-300 py-2 rounded-lg w-[100px] text-center">
            Cancel
          </Link>
        </div>
      </form>

      {isPopupOpen && (
        <Popup
          status={status}
          isLoading={isLoading}
          link="/vehicles/model"
          onClose={() => {
            navigate("/vehicles/model");
            setIsPopupOpen(false);
          }}
        />
      )}
    </>
  );
}
