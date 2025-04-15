import React from 'react'

export default function SignUp() {
  return <>
    <div className=' w-full font-Poppins '>
        <div className="parent flex flex-col justify-center lg:w-[60%]  w-full   lg:mt-6 mx-auto   rounded-lg  bg-white shadow-lg px-6 py-8 " >
            <div className="title md:text-3xl text-2xl text-blackColor font-bold  mb-6   } ">
                Sign up now
            </div>
            <form className=" w-full flex flex-col text-[#666666] p-1 " action=''>
                <div className="names md:flex  gap-5 md:w-3/4  w-full mb-2 ">
                    <div className='w-full'>

                        <label className='block' htmlFor="firstName" >First name</label>
                        <input className='borrder-[#666666] border rounded-md p-2 w-full my-2 '  />
                        </div>
                        <div className='w-full'>
                        <label className='block' htmlFor="lastName ">Last name</label>
                        <input className='borrder-[#666666] border rounded-md p-2 w-full my-2 ' />
                    </div>
                    
                </div>

            <div className="mb-2">
                <label className='block' htmlFor="email">Email</label>
                <input className='borrder-[#666666] border rounded-md p-2 md:w-3/4 w-full my-2 ' type="email" name='email' />
            </div>
            <div className="mb-2">
                <label htmlFor="phone" className='block'>Phone number</label>
                <input className='borrder-[#666666] border rounded-md p-2 md:w-3/4 w-full my-2 ' type="tel" name='phone'/>
            </div>
            <div className="mb-2">
                <label className='block' htmlFor="password">Password</label>
                <input className='borrder-[#666666] border rounded-md p-2 md:w-3/4 w-full my-2 ' type="password" name='password'/>
            </div>

            <div className="div text-black my-4 w-full text-sm">
                <label htmlFor="check1"> <input  type="checkbox" name='check1'/><span className='p-2 md:w-3/4 w-full '>By creating an account, you agree to the Terms of use and Privacy Policy. </span> </label>
               
            </div>
            <div className="div text-black w-full text-sm ">
                <label htmlFor="check2" className=''> <input  type="checkbox" name='check2'/><span className=' p-2 md:w-3/4 w-full  text-justify '>I want to receive emails about the product, feature updates, events, and marketing promotions. </span> </label>
            </div>
            <div className='flex gap-10 mt-9 items-center '>

            <button className='w-52 bg-blackColor text-white rounded-lg p-3  text-lg font-Poppins' >Sign up</button>
            <div>Already have an account ? <span className=' font-bold '>login</span> </div>
            </div>


            
            </form>
        </div>
    </div>
  </>
  
}
