import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search({onChange}) {
  return (
      <div className="flex gap-2 items-center border px-3 py-1 w-[35%] rounded-lg">
              <FaSearch className='text-primaryColor'/>
              <input type="search" className=" w-full rounded-lg bg-stone-100 p-1 outline-none" onChange={onChange} />
    
            </div>
  )
}
