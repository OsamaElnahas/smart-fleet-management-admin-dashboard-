import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ColorRing } from "react-loader-spinner";
import Popup from "../Popup/Popup";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Predefined vehicle data (for Brand and Model dropdowns)
const vehicleData = {
  Sedan: {
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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const { data: categories = [], isLoading: isFetching, error: fetchError } = useQuery({
    queryKey: ["getCategory"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const res = await axios.get("http://veemanage.runasp.net/api/Vehicle/Category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data; // Assuming [{ name: "Sedan" }, ...]
    },
    onError: (error) => {
      console.error("Failed to fetch categories:", error);
    },
  });

  const brands = selectedCategory ? Object.keys(vehicleData[selectedCategory] || {}) : [];
  const models = selectedBrand ? vehicleData[selectedCategory]?.[selectedBrand] || [] : [];

  const schema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    brand: Yup.string().required("Brand is required"),
    model: Yup.string().required("Model is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: "",
      brand: "",
      model: "",
    },
    mode: "all",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setSelectedBrand("");
    setSelectedModel("");
    setValue("category", value);
    setValue("brand", "");
    setValue("model", "");
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setSelectedBrand(value);
    setSelectedModel("");
    setValue("brand", value);
    setValue("model", "");
  };

  const handleModelChange = (e) => {
    const value = e.target.value;
    setSelectedModel(value);
    setValue("model", value);
  };

  // Form submission handler
  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://veemanage.runasp.net/api/Vehicle/Model",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res?.data);
      setStatus(true);
      setIsPopupOpen(true);
      reset(); // Reset form after successful submission
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
      setStatus(false);
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="font-bold mb-7 text-2xl font-Inter">Add Model</div>
      <div>
        <form
          className="shadow-md p-6 rounded-lg flex flex-col gap-3 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              {...register("category")}
              className="p-3 rounded-md m-1 w-96 border border-stone-300"
              name="category"
              value={selectedCategory}
              onChange={handleCategoryChange}
              disabled={isFetching || fetchError || !categories.length}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
            {fetchError && (
              <p className="text-red-500 text-sm">
                {fetchError.message || "Failed to fetch categories"}
              </p>
            )}
            {isFetching && (
              <p className="text-gray-500 text-sm">Loading categories...</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="brand" className="font-semibold">
              Brand
            </label>
            <select
              {...register("brand")}
              className="p-3 rounded-md m-1 w-96 border border-stone-300"
              name="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
              disabled={!brands.length}
            >
              <option value="">Select a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            {errors.brand && (
              <p className="text-red-500 text-sm">{errors.brand.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="model" className="font-semibold">
              Model
            </label>
            <select
              {...register("model")}
              className="p-3 rounded-md m-1 w-96 border border-stone-300"
              name="model"
              value={selectedModel}
              onChange={handleModelChange}
              disabled={!models.length}
            >
              <option value="">Select a model</option>
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
            {errors.model && (
              <p className="text-red-500 text-sm">{errors.model.message}</p>
            )}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-end w-[100%] gap-4 mt-4">
            <button
              type="submit"
              className={`py-2 rounded-lg w-[100px] text-center flex justify-center ${
                !isValid
                  ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                  : "bg-primaryColor text-white hover:bg-primaryColor-dark"
              }`}
              disabled={!isValid}
            >
              {isLoading ? (
                <div className="d-flex justify-content-center">
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />
                </div>
              ) : (
                "Create"
              )}
            </button>
            <button className="border border-stone-300 py-2 rounded-lg w-[100px]">
              <Link className="p-3 px-7" to="/vehicles/model">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>

      {isPopupOpen && (
        <Popup
          status={status}
          isLoading={isLoading}
          link="/model"
          onClose={() => {
            navigate("/model");
            setIsPopupOpen(false);
          }}
        />
      )}
    </>
  );
}