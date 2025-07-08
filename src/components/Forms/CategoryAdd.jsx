import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ColorRing } from "react-loader-spinner";
import Popup from "../Popup/Popup";
import { useNavigate } from "react-router-dom";

// Predefined vehicle data (from ModelAdd)
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
    Bajaj: ["Maxima"],
    Foton: ["Tunland"],
  },
};

export default function CategoryAdd() {
  const navigate = useNavigate();

  // Predefined options for dropdowns
  const categoryOptions = Object.keys(vehicleData);
  const descriptionOptions = [
    "Small passenger vehicle",
    "Large off-road vehicle",
    "Public transport",
    "Heavy-duty transport",
    "Light cargo transport",
  ];

  const schema = Yup.object().shape({
    name: Yup.string().required("Category name is required"),
    description: Yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "all",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://veemanage.runasp.net/api/Vehicle/Category",
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
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
      setStatus(false);
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="font-bold mb-7 text-2xl font-Inter">Add Category</div>
      <div>
        <form
          className="shadow-md p-6 rounded-lg flex flex-col gap-3 bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="name" className="font-semibold">
              Category Name
            </label>
            <select
              {...register("name")}
              className="p-3 rounded-md m-1 w-96 border border-stone-300"
              name="name"
            >
              <option value="">Select category</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-1">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <select
              {...register("description")}
              className="p-3 rounded-md m-1 w-96 border border-stone-300"
              name="description"
            >
              <option value="">Select description</option>
              {descriptionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
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
              <a className="p-3 px-7" href="/vehicles/categories">
                Cancel
              </a>
            </button>
          </div>
        </form>
      </div>

      {isPopupOpen && (
        <Popup
          status={status}
          isLoading={isLoading}
          link="/vehicles/categories"
          onClose={() => {
            navigate("/vehicles/categories");
            setIsPopupOpen(false);
          }}
        />
      )}
    </>
  );
}