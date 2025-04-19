import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Drivers() {
  return <>

  <div className={"bg-primaryColor p-2 rounded-md  mb-10"} >
  <NavLink to={"/users/drivers/add"} > + add new driver</NavLink   >
    
    Drivers</div>
  

  </>
  
}
