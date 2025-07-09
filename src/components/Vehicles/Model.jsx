import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import Popup from "../Popup/Popup";

const Model = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisable, setIsvisable] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  console.log(openIndex);

  async function getModels() {
    try {
      const res = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/Model",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res?.data);
      return res?.data;
    } catch (error) {
      console.error("Error fetching models:", error);
      return error;
    }
  }

  const {
    data: ModelsData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  async function delData(id) {
    try {
      const res = await axios.delete(
        `https://veemanage.runasp.net/api/Vehicle/Model/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOpenIndex(null);
      refetch();
      toast.success("Deleted Successfully");
      setIsvisable(false);
      return res?.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Deleting faild");
      return error;
    }
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="font-Nunito">
        <Link
          to={"/model/add"}
          className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
        >
          + New Model
        </Link>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ModelsData.map((item, index) => {
            return (
              <div
                key={index}
                className="item bg-[#FFFFFF]  p-2 rounded-lg shadow-lg m-2 border-l-[5px] min-h-[213px] border-[#4880FF] relative"
              >
                <div className="flex justify-between items-center border-b-2 pb-4 mb-5">
                  <span className="font-semibold text-xl">
                    {item?.brand} {item?.name}
                  </span>
                  <button
                    className="text-[#4880FF] text-[23px]"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <IoEllipsisVertical />
                  </button>
                  {openIndex === index && (
                    <div className="absolute bg-white shadow-md rounded-md p-2 border border-primaryColor right-3 -top-10">
                      <ul className="flex flex-col items-start gap-2">
                        <button
                          onClick={() => {
                            setSelectedId(item.id);
                            setIsvisable(true);
                          }}
                          className="text-red-500 font-semibold hover:text-blue-700 cursor-pointer"
                        >
                          Delete
                        </button>
                      </ul>
                    </div>
                  )}
                </div>
                <span className="block mb-4">
                  Category:{" "}
                  <span className="text-[#6C757D]">{item?.category?.name}</span>
                </span>
                <span className="block">
                  Description:{" "}
                  <span className="text-[#6C757D] text-sm">
                    {item?.category?.description}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {isVisable && (
        <Popup
          message={"Are you sure you want to delete this model ?"}
          onClose={() => setIsvisable(false)}
          onConfirm={() => {
            delData(selectedId);
          }}
        />
      )}
    </>
  );
};

export default Model;
