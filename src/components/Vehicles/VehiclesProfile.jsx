import React from 'react'
import Profile from '../Profile/Profile'
import { useParams } from 'react-router'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function VehiclesProfile() {
   const {id}= useParams()
    const {data, isLoading} = useQuery({
     queryKey: ["vehicle"],
     queryFn: getVehicleById,
    });

   async function getVehicleById() {
    try {
      const response = await axios.get(
        `http://veemanage.runasp.net/api/Vehicle/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }   );
        return response?.data;
    }
     catch (error) {
      console.error("Error fetching vehicles:", error);
      return error;
    }  
   }
    data&&console.log("Vehicles data:", data);

  return <>
  <Profile />
  </>
   
}
