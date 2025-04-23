import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";


export default function Profile() {
    const [editMode, setEditMode] = useState(false);

  return <>
  
  <div className='font-bold text-[1.25rem] mb-2'>Details</div>
  <div className="info mb-12 border-b-2 border-gray-300 px-3 py-7 flex items-center font-Poppins capitalize">

    <div className='flex gap-5 items-center'>
        <span className='icon text-4xl border rounded-[50%] p-4  border-gray-400 '> <FaUser/></span>
            <div className='flex flex-col'>
                <span>name</span>
                <span>email</span>
            </div>
    </div>

    <div className="btns ml-auto flex gap-3" >

    {editMode && 
        <button className='py-1 w-[120px] rounded-md text-white bg-primaryColor transition duration-300 ' onClick={()=>setEditMode(false)}>Save</button> }
        
    <button className={`py-1 w-[120px] rounded-md text-white bg-primaryColor transition duration-300 ${editMode && "opacity-30 cursor-not-allowed bg-gray-400 "}`} disabled={editMode} onClick={()=>setEditMode(true)}>Edit</button>
        </div>
  </div>
  <div className="data font-Poppins capitalize">
    {!editMode ? 
    
    <div className='grid grid-cols-12  gap-8'>
    

        <div className='col-span-6 flex flex-col  gap-2   '>
            <div className="label  ">first Name</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> osama</div>
        </div>
        <div className='col-span-6 flex flex-col  gap-2   '>
            <div className="label  ">Second Name</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> kamal elsayed</div>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Role</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> Driver</div>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">National Id</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> 30301190300174</div>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Date of Birth</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> 19-1-2003</div>
        </div>
        <div className=' col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Phone Number</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> 01222406627</div>
        </div>
        <div className=' col-span-4 flex flex-col  gap-2'>
            <div className="label  ">street</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> salah salem st,behind lycee elhorya </div>
        </div>
        <div className='col-span-4 flex flex-col  gap-2'>
            <div className="label  ">governorate</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> Portsaid</div>
        </div>
        <div className=' col-span-4 flex flex-col  gap-2'>
            <div className="label  ">country</div>
            <div className="field text-gray-500 bg-white rounded-md p-2"> Egypt</div>
        </div>
    </div>

    :
    <div className='grid grid-cols-12  gap-8'>

        <div className='col-span-6 flex flex-col  gap-2   '>
            <div className="label  ">first Name</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='osama'/>
        </div>
        <div className='col-span-6 flex flex-col  gap-2   '>
            <div className="label  ">Second Name</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='kamal elsayed'/>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Role</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='Driver'/>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">National Id</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='30301190300174'/>
        </div>
        <div className='col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Date of Birth</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='19-1-2003'/>
        </div>
        <div className=' col-span-6 flex flex-col  gap-2'>
            <div className="label  ">Phone Number</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='01222406627'/>
        </div>
        <div className=' col-span-4 flex flex-col  gap-2'>
            <div className="label  ">street</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='salah salem st,behind lycee elhorya '/>
        </div>
        <div className='col-span-4 flex flex-col  gap-2'>
            <div
                className="label  ">governorate</div>   
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='Portsaid'/>
        </div>
        <div className=' col-span-4 flex flex-col  gap-2'>
            <div className="label  ">country</div>
            <input type="text" className='field text-gray-500 bg-white rounded-md p-2' value='Egypt'/>
        </div>
        </div>

    }
  </div>
  </>
  
}
