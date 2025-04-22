import React from 'react'
import DynamicForm from '../DynamicForm/DynamicForm'

import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
    palletNumber: Yup.string().required("Palet Number is required"),
    joindYear: Yup.string().required("Joind Year is required"),
    fuelType: Yup.string().required("Fuel Type is required"),
    kmDriven: Yup.string().required("Km Driven is required"),
    modelId: Yup.string().required("Model Id is required"),
    categoryId: Yup.string().required("Category Id is required"),

})
const fields = [
    {
        name: "palletNumber",
        label: "Plate Number",
        type: "text",
        placeholder: "Enter Plate number (ex: 4572 طبف)",
    },
    {
        name: "joindYear",
        label: "Joind Year",
        type: "text",
        placeholder: "Enter joind year",
    },
    {
        name: "fuelType",
        label: "Fuel Type",
        type: "text",
        placeholder: "Enter fuel type",
    },
    {
        name: "kmDriven",
        label: "Km Driven",
        type: "text",
        placeholder: "Enter Current km ",
    },
    {
        name: "modelId",
        label: "Model Id",
        type: "text",
        placeholder: "Enter  model id",
    },
    {
        name: "categoryId",
        label: "Category Id",
        type: "text",
        placeholder: "Enter category id",
    },
    ];
const defaultValues = {
    palletNumber: "",
    joindYear: "",
    fuelType: "",
    kmDriven: "",
    modelId: "",
    categoryId: "",
  };
  

export default function VehiclesAdd() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    
    async function onSubmit(data) {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:5034/api/Account/login",
          data
        );
        console.log("Login Successful:", res.data);
      } catch (error) {
        console.error("Login Error:", error);
        setError("Something went wrong. Please try again.");
      }
    
      setIsLoading(false);
    }
    
  return <>
  <DynamicForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        title="Add Vehicles"
        defaultValues={defaultValues}
        back_link="/vehicles"
    />  
</>
}
