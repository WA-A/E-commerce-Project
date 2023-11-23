import React from 'react'

function Input({type='text',id,name,title,value,onChange,errors,onBlur,touched}) {
  return (
   <>
   <div className='input-group mb-3'>
<label htmlFor={id}>{title}</label>
<input type={type} name={name} className="form-control" id={id} value={value} onChange={onChange}/>
{touched[name]&&errors[name]&&<p className='text'>{errors[name]} </p>}
   </div>
   </>
  )
}

export default Input