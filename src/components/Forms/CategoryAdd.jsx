import React from "react";
import * as Yup from "yup";
import axios from "axios";
import DynamicForm from "../DynamicForm/DynamicForm";
import Popup from "../Popup/Popup";
import { Link, useNavigate } from "react-router";

export default function CategoryAdd() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("description is required"),
  });

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter name of category",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Enter your Description",
    },
  ];
  const defaultValues = {
    name: "",
    description: "",
  };

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [error, setError] = React.useState("");
  async function onSubmit(data) {
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://veemanage.runasp.net/api/Vehicle/Category",
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
      // console.error("Login Error:", error);
      setError("Something went wrong. Please try again.");
      setStatus(false);
    }

    setIsLoading(false);
  }
  return (
    <>
      <DynamicForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        title="Add Category"
        defaultValues={defaultValues}
        back_link="/vehicles/categories"
      />
      {isPopupOpen && (
        <Popup
          status={status}
          isLoading={isLoading}
          link={"/vehicles/categories"}
          onClose={() => {
            navigate("/vehicles/categories");
            setIsPopupOpen(false);
          }}
        />
      )}
    </>
  );
}
