
import { useForm } from "src/hooks/useForm";
import React, { useRef, useState } from 'react';

// const onepublicKey = import.meta.env.PUBLIC_KEY_EMAIL.toString()
// const publicKey= onepublicKey


const initialForm={
    name: "",
    company: "",
    email:"",
    description:""
};

const validationsForm = (form:any) => {
    let errors:any = {};
    let nameRegex = /^[a-zA-Z\s]{2,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let descriptionRegex = /^.{5,}$/;


    if(!form.name.trim()){
        errors.name ="The 'Name' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.name = "Field accepts only letters and blanks, minimum two characters"
    }
    if(!form.company.trim()){
        errors.company ="The 'Company' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.company = "Field accepts only letters and blanks, minimum two characters"        
    }
    if(!form.email.trim()){
        errors.email ="The 'Email' field is required";
    }else if(!nameRegex.test(form.name.trim())){
        errors.email = "No incorrect email format"        
    }

    return errors;
}
 export const FormContact : React.FC<any> = (funct:any) => {

    const [description,setDescription]= useState('')
    const [msj,setMsj]= useState(false)
    const [result, setResult] = useState("");

    const onSubmit = async (event:any) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fba530b2-ff29-4cd9-9d9c-a5283bd3f246")
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setMsj(true)
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
    const descriptionChange = (event:any) => {
        setDescription(event.target.value);
      };

    const {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useForm(initialForm,validationsForm);

    const formRef: any = useRef();

  return (
      <div 
        className="text-center p-8 bg-[rgba(0,55,95,0.5)] 
                   absolute top-[5%] min-[350px]:top-[5%] min-[350px]:h-[90%] max-[350px]:w-[80%] min-[1550px]:top-[10%] min-[1550px]:right-[10%] min-[1550px]:h-[80%] min-[600px]:right-[20%]
                   z-50 rounded-md flex items-center justify-center ">
        {
        msj?<div className=" flex ">
            <p className="flex-row text-white text-xl">{'Form submitted'}</p>
            </div>:
        <div>
        <div className="p-2"></div>
        <h1 className="flex flex-col gap-1 text-xl text-white">Would you like to schedule a call?</h1>
        <div className="p-2"></div>
        <form
        className="w-full flex flex-col items-center justify-center min-h-scree "
        ref={formRef}
        onSubmit={onSubmit}
        onBlur={handleBlur}>
        <input 
            type="formName" 
            id="nameForm" 
            className={`m-2 w-full h-10 rounded-lg bg-gray-400 p-5 max-[684px]:text-[12px] max-[380px]:text-[10px] ${(errors.name=== undefined||errors.name===null||errors.name==='')?('border-2 border-white placeholder-white '):('border-2 border-red-500 placeholder-red-500 bg-gray-200  ')}`} 
            name="name" 
            onChange={handleChange} 
            value={form.name}required
            placeholder={errors.name==''?'Full Name': errors.name}
        />
        <input 
            type="formCompany"
            id="companyForm"  
            className={`m-2 w-full h-10 rounded-lg bg-gray-400 p-5 max-[684px]:text-[12px] max-[380px]:text-[10px]  ${(errors.company=== undefined||errors.company===null||errors.company==='')?('border-2 border-white placeholder-white'):('border-2 border-red-500 placeholder-red-500 bg-gray-200')}`} 
            name="company" 
            onChange={handleChange} 
            value={form.company}required
            placeholder={errors.company==''?'Company': errors.company}
            />
        <input 
            type="forEmail"
            id="emailForm"  
            className={`m-2 w-full h-10 rounded-lg bg-gray-400 p-5 max-[684px]:text-[12px] max-[380px]:text-[10px] ${(errors.email=== undefined||errors.email===null||errors.email==='')?('border-2 border-white placeholder-white'):('border-2 border-red-500 placeholder-red-500 bg-gray-200')}`} 
            name="email" 
            onChange={handleChange} 
            value={form.email}required
            placeholder={errors.email==''?'Email': errors.email}
        />
            <textarea 
            name="message" 
            id="message" 
            className="m-2 w-full h-3/4 rounded-lg bg-gray-400 p-5 border-2 border-white placeholder-white max-[684px]:text-[12px] max-[380px]:text-[10px]" 
            onChange={descriptionChange}
            value={description}
            placeholder={"Description"}
            >
        </textarea>
        <button className=" text-center bg-[#009CA3] rounded-[20px] text-white py-2 px-6 max-[380px]:px-4 max-[684px]:text-[12px] max-[380px]:text-[10px]" type="submit" onClick={handleSubmit}>SEND</button>
    </form> 
        </div>

        }   
      </div>
  )
}