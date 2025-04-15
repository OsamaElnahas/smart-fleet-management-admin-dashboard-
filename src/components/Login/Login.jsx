import React from 'react'

export default function Login() {
    return <>
    
    <div className='w-full font-Poppins   flex items-center justify-center'>

        <div className="parent flex flex-col justify-around  lg:w-[30%]  w-full  min-h-screen  lg: mx-auto   rounded-lg  bg-white shadow-md px-6 py-10  items-center ">
            <div className="title text-4xl text-center  text-primaryColor mb-14 md:mb-0 ">
                <span className=' font-extrabold'>VEE </span>MANAGE
            </div>
            <form action="" className='flex-3 w-full justify-between'>

            <div className="mb-2">
                <label className='block' htmlFor="username">User name</label>
                <input className='borrder-[#666666] border rounded-md p-2  w-full my-2 ' type="text" name='username' />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className='block'>Password</label>
                <input className='borrder-[#666666] border rounded-md p-2  w-full my-2 ' type="password" name='password'/>
            </div>
            <button className='w-full bg-blackColor text-white rounded-lg p-2    mt-12  text-lg font-Poppins' >Login</button>

            </form>
        </div>
    </div>

    </>

}
