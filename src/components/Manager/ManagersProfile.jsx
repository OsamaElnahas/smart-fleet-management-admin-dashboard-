import React from "react";
import Profile from "../Profile/Profile";
import Loader from "../Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function ManagersProfile() {
  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: getProfileData,
  });

  const { id } = useParams();

  async function getProfileData() {
    try {
      const res = await axios.get(
        `https://veemanage.runasp.net/api/User/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return res?.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return [];
    }
  }
  return (
    <>
      {isLoading && <Loader />}
      {isFetched && <Profile data={data} />}
    </>
  );
}
