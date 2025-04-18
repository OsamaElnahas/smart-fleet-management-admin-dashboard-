import React from 'react'
// import { Router } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Drivers from '../Drivers/Drivers'
import Mechans from '../mechans/Mechans'
import Dashboard from '../dashboard/Dashboard'
import Login from '../Login/Login'
import ResetPassword from '../Forget-reset-password/ResetPassword'
import ForgetPassword from '../Forget-reset-password/ForgetPassword'


const Router=createBrowserRouter([
    {
        path: '/',element:<Layout/>,children:[
            {index:true,element:<Dashboard/>},
            {path:'/Overview',element:<Dashboard/>},
            {path:'/users/drivers',element:<Drivers/>},
            {path:'/users/drivers/add',element:<Dashboard/>},
            {path:'/users/mechanics',element:<Mechans/>},
            {path:'/users/mechanics/add',element:<Dashboard/>},
            

        ]},
        { path: "login", element: <Login/> },
        { path: "ResetPassword", element: <ResetPassword/> },
        { path: "ForgetPassword", element: <ForgetPassword/> },

    ])

        

export default Router