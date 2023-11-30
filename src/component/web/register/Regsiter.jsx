import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
function Regsiter() {
    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:'',
            image:'',
        },
        onSubmit:values=>{
            console.log(values);
        },
        validate:values=>{
           const reSchema = yup.object({
            userName:yup.string().required("user name is requied").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
           email:yup.string().required("user name is requied").email(),
           password:yup.string().required("password is requied").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
        })
        }
    });
    const handelFieldChange = (event)=>{
        formik.setFieldValue('image',event.target.files[0]);
    }
    const onSubmit = async users =>{
        const formData = new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
        const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);
        console.log(data);
   if(data.message=='success'){
    formik.resetForm();
    toast.success('plz verify your email',{
        position: "bottom-center",
         autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
           theme: "dark",
    });
   }
   console.log(data);
    }
   
    const inputs = [
        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,
        },
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
            id:'image',
            type:'file',
            name:'image',
            title:'user image',
            onChange:handelFieldChange
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
    <h2>create account</h2>
    <from onSubmit={formik.handleSubmit} encType="multipart/from-data">
        {renderInputs}

<button type='submit' disabled={!formik.isValid}> Register </button>
        
    </from>
   </div>
   </>
  )
}

export default Regsiter