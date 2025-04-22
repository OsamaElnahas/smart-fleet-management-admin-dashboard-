import React from 'react'
import { Link } from 'react-router'
import AllUsersTable from '../AllUsersTable/AllUsersTable'

export default function Vehicles() {
  return <>
    <div className="controls">
      <div className="btns flex gap-5">
      <Link
        to={"/vehicles/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Vehicle
      </Link>
      <Link
        to={"/vehicles/category"}
        className="block mb-12 border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
      >
        Categories
      </Link>
      <Link
        to={"/vehicles/model"}
        className="block mb-12 border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
      >
        Models
      </Link>
      

      </div>
    </div>

     <div>
            <AllUsersTable 
            
            
          titles={["ID", "Model", "Palet Number", "Joind Year","Category"]} rows={[
    ["1", "Skoda Octavia-2015", "4572 طبف", "2023","Car" ],
    ["5", "Hyundai Elantra 2019", "4332 طبف", "2019","Car" ]

    
  ]} columnSizes={["10%", "25%", "20%", "15%", "20%","10%"]}
  

  />
            
          </div>
  
  </>
}
