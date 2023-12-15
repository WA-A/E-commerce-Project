import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function ForgetPassword() {
    const navigate = useNavigate();
    const formik = useFormik({ // Same Register
        initialValues:{
            email:'',
            password:'',
            code:'',
        },
        onSubmit:values=>{
            console.log(values);
        },
        validate:values=>{
           const reSchema = yup.object({
           email:yup.string().required("user name is requied").email(),
           password:yup.string().required("password is requied").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
        })
        const ForgetSchema = yup.object({
            code:yup.string().required("user name is requied").length("must 4 char"),
            email:yup.string().required("user name is requied").email(),
            password:yup.string().required("password is requied").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
         })
        }
    });
    
    const onSubmit = async users =>{
        
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/forgetpassword`,users);
        console.log(data);
   if(data.message=='success'){
    
    toast.success('password updated',{
        position: "bottom-center",
         autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
           theme: "dark",
    });
    navigate('/login');
   }
   console.log(data);
    }
   
    const inputs = [
        
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },
        {
            id:'code',
            type:'text',
            name:'code',
            title:'code',
            value:formik.values.code,
        },
       
        
    ];
    const renderInputs = inputs.map( (input,index)=>
    <input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title={input.title}
    value={input.value}
    key={index}
    errors={formik.errors}
    onChange={ input.onChange || formik.handleChange } //input from image becuase file no vlaue
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    
     )
  return (
   <>
   <div className='container'>
    <h2>Update user</h2>
    <from onSubmit={formik.handleSubmit} encType="multipart/from-data">
        {renderInputs}

<button type='submit' disabled={!formik.isValid}> Register </button>
        
    </from>
   </div>
   </>
  )
}

export default ForgetPassword