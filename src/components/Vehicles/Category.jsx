import React from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import { Link } from 'react-router'

export default function Category() {
  return <>
   <Link
        to={"/users/drivers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add New Category
      </Link>
      <div className='grid  grid-cols-2 sm:grid-cols-3 gap-3'>
        <div className='bg-white py-4 px-6    rounded-md border-l-4 border-primaryColor shadow-md'>
            <div className='flex gap-3'>
                <span>icon</span>
            <span>Name of Category</span>
            <button className="text-[#4880FF] text-[23px] ml-auto">
                          <IoEllipsisVertical />
                        </button>
            
            </div>
            <div className='text-gray-600 mt-3'>Descreption</div>
            </div>
        <div className='bg-white py-4 px-6    rounded-md border-l-4 border-primaryColor shadow-md'>
            <div className='flex gap-3'>
                <span>icon</span>
            <span>Name of Category</span>
            <button className="text-[#4880FF] text-[23px] ml-auto">
                          <IoEllipsisVertical />
                        </button>
            
            </div>
            <div className='text-gray-600 mt-3'>Descreption</div>
            </div>
        <div className='bg-white py-4 px-6    rounded-md border-l-4 border-primaryColor shadow-md'>
            <div className='flex gap-3'>
                <span>icon</span>
            <span>Name of Category</span>
            <button className="text-[#4880FF] text-[23px] ml-auto">
                          <IoEllipsisVertical />
                        </button>
            
            </div>
            <div className='text-gray-600 mt-3'>Descreption</div>
            </div>
      </div>
  
  </>
  
}
