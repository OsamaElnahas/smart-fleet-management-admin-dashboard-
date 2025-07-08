import React from "react";
import DynamicForm from "../DynamicForm/DynamicForm";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  palletNumber: Yup.string().required("Plate Number is required"),
  joinedYear: Yup.number().required("Joined Year is required"),
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

// Form Fields
const fields = [
  {
    name: "palletNumber",
    label: "Plate Number",
    type: "text",
    placeholder: "Enter plate number (e.g. 4572 طبف)",
  },
  {
    name: "joinedYear",
    label: "Joined Year",
    type: "number",
    placeholder: "Enter joined year",
  },
  {
    name: "fuelType",
    label: "Fuel Type",
    type: "number",
    placeholder: "Enter fuel type (e.g. 1)",
  },
  {
    name: "kmDriven",
    label: "KM Driven",
    type: "number",
    placeholder: "Enter current KM",
  },
  {
    name: "status",
    label: "Status",
    type: "number",
    placeholder: "Enter status",
  },
  {
    name: "modelId",
    label: "Model ID",
    type: "text",
    placeholder: "Enter model ID",
  },
  {
    name: "modelYear",
    label: "Model Year",
    type: "number",
    placeholder: "Enter model year",
  },

  {
    name: "transmissionType",
    label: "Transmission Type",
    type: "number",
    placeholder: "Optional",
  },
  {
    name: "engineSize",
    label: "Engine Size",
    type: "text",
    placeholder: "Optional",
  },
  {
    name: "tireCondition",
    label: "Tire Condition",
    type: "number",
    placeholder: "Optional",
  },
  {
    name: "brakeCondition",
    label: "Brake Condition",
    type: "number",
    placeholder: "Optional",
  },
  {
    name: "batteryStatus",
    label: "Battery Status",
    type: "number",
    placeholder: "Optional",
  },
  {
    name: "drivingCondition",
    label: "Driving Condition",
    type: "number",
    placeholder: "Optional",
  },
  {
    name: "lastAssignedDate",
    label: "Last Assigned Date",
    type: "datetime-local",
  },
  {
    name: "lastMaintenanceDate",
    label: "Last Maintenance Date",
    type: "datetime-local",
  },
];

// Default Form Values
const defaultValues = {
  palletNumber: "",
  joinedYear: "",
  fuelType: "",
  kmDriven: "",
  status: "",
  modelId: "",
  modelYear: "",
  transmissionType: null,
  engineSize: null,
  tireCondition: null,
  brakeCondition: null,
  batteryStatus: null,
  drivingCondition: null,
  lastAssignedDate: null,
  lastMaintenanceDate: null,
};

// Component
export default function VehiclesAdd() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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
            Authorization: `Bearer <your_token_here>`, // 🛑 Replace with your actual token
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

  return (
    <DynamicForm
      schema={schema}
      fields={fields}
      onSubmit={onSubmit}
      title="Add Vehicle"
      defaultValues={defaultValues}
      back_link="/vehicles"
      isLoading={isLoading}
      error={error}
    />
  );
}
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const VehiclesAdd = () => {
//   const [brands, setBrands] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [selectedModel, setSelectedModel] = useState("");

//   // Fetch car brands from NHTSA API
//   useEffect(() => {
//     axios
//       .get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json")
//       .then((res) => {
//         const makes = res.data.Results.map((make) => make.Make_Name);
//         setBrands(makes.sort());
//       })
//       .catch((err) => {
//         console.error("Error fetching brands:", err);
//       });
//   }, []);

//   // Fetch models when brand is selected
//   useEffect(() => {
//     if (selectedBrand) {
//       axios
//         .get(
//           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${selectedBrand}?format=json`
//         )
//         .then((res) => {
//           const modelsData = res.data.Results.map((model) => model.Model_Name);
//           setModels(modelsData.sort());
//         })
//         .catch((err) => {
//           console.error("Error fetching models:", err);
//         });
//     } else {
//       setModels([]);
//     }
//   }, [selectedBrand]);

//   return (
//     <form>
//       <label>Brand:</label>
//       <select
//         value={selectedBrand}
//         onChange={(e) => setSelectedBrand(e.target.value)}
//       >
//         <option value="">Select a brand</option>
//         {brands.map((brand, idx) => (
//           <option key={idx} value={brand}>
//             {brand}
//           </option>
//         ))}
//       </select>

//       <br />

//       <label>Model:</label>
//       <select
//         value={selectedModel}
//         onChange={(e) => setSelectedModel(e.target.value)}
//         disabled={!models.length}
//       >
//         <option value="">Select a model</option>
//         {models.map((model, idx) => (
//           <option key={idx} value={model}>
//             {model}
//           </option>
//         ))}
//       </select>
//     </form>
//   );
// };


