import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'   
import { useForm } from 'react-hook-form'
import DynamicForm from '../DynamicForm/DynamicForm'
import axios from 'axios'

const schema=Yup.object().shape({
    firstName:Yup.string().required('Name is required'),
    lastName:Yup.string().required('Name is required'),
    phoneNumber: Yup.string()
    .matches(/^\d+$/, "Please enter a valid phone number")
    .required("Phone number is required"),
        address:Yup.object({
    street:Yup.string().required('Street is required'),
    area:Yup.string().required('Area is required'),
    governorate:Yup.string().required('Governorate is required'),
    country:Yup.string().required('Country is required'),
  }) 
})
const fields=[
  {
    name:'firstName',
    label:'First Name',
    type:'text',
    placeholder:'Enter your first name',
  },
  {
    name:'lastName',
    label:'Last Name',
    type:'text',
    placeholder:'Enter your last name',
  },
  {
    name:'phoneNumber',
    label:'Phone Number',
    type:'text',
    placeholder:'Enter your phone number',
  },
  {
    name:'address.street',
    label:'Street',
    type:'text',
    placeholder:'Enter your street address',
  },
  {
    name:'address.area',
    label:'Area',
    type:'text',
    placeholder:'Enter your area address',
  },
  {
    name:'address.governorate',
    label:'Governorate',
    type:'text',
    placeholder:'Enter your governorate address',
  },
  {
    name:'address.country',
    label:'Country',
    type:'text',
    placeholder:'Enter your country address',
  },
]
const defaultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: {
      street: '',
      area: '',
      governorate: '',
      country: '',
    }
  }
  
  
export default function MecghanicAdd() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState('')

  async function onSubmit(data) {
     setIsLoading(true);
     try {
       const res = await axios.post(
         "http://localhost:5034/api/Account/login",
         data
       );
       console.log("Login Successful:", res.data);
     } catch (error) {
       console.error("Login Error:", error);
       setError("Something went wrong. Please try again.");
     }
 
     setIsLoading(false);
   }
  return <>
  <DynamicForm  schema={schema} fields={fields}  onSubmit={onSubmit}  title ='Add Mechanic' defaultValues={defaultValues} />
  </>
}
