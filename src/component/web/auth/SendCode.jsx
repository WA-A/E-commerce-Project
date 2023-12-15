import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../content/User.jsx';

function SendCode(saveCurrentUser) {
   const navigate = useNavigate();
   const formik = useFormik({
    initialValues:{
        email:'',
       // password:'',
    },
    onSubmit:values=>{
        console.log(values);
    },
    validate:values=>{
       const reSchema = yup.object({
       email:yup.string().required("user name is requied").email(),
       password:yup.string().required("password is requied").min(3,"must be at least 3 char").max(30,"must be at least 30 char"),
    })
    const SendCodeSchema = yup.object({
        email:yup.string().required("user name is requied").email(),
        
     })
    }
});
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
    
    
];
    
    const onSubmit = async users =>{
        const formData = new FormData();
      //  formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
      //  formData.append("image",users.image);
        const {data} = await axios.patch('https://ecommerce-node4.vercel.app/auth/sendcode',users);
        //console.log(data);
   if(data.message=='success'){
           
    toast.success('input code',
    {
        position: "bottom-center",
         autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
           theme: "dark",
    });
    navigate('/forgetpassword');
   }

    } 
    const renderInputs = inputs.map( (input,index)=>
    <input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title={input.title}
    value={input.value}
    key={index}
    errors={formik.errors}
    onChange={formik.handleChange } 
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    
     )
  return (
   <>
   <div className='container'>
    <h2>Send Code</h2>
    <from onSubmit={formik.handleSubmit}>
        {renderInputs}

<button type='submit' disabled={!formik.isValid}> Login </button>
        
    </from>
   </div>
   </>
  )
}

export default SendCode