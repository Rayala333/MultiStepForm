import React, { createContext } from 'react';
import First from './First';
import Second from './Second';
import Thred from './Thred';
import Fourth from './Fourth';
import Dashbord from './Dashbord';
import { useState } from 'react';


import {Box,Stepper,Step,StepLabel }from '@mui/material';
import { yellow } from '@mui/material/colors';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';


export const store = createContext()

const steps = [
    'UserName',
    'Email',
    'Contact',
    'Password',
  ];

  const stepStyle = {
   
  }

const Multistep = () => {
    const [step,setStep]=useState(0)
    const nextStep = ()=>{
            setStep(step+1)
    }
    const prevStep = ()=>{
        setStep(step-1)
    }
    const [data,setData]=useState({
        name:'',
        email:'',
        contact:'',
        password:''
    })
    const[newdata,setNewdata]=useState([])

    const changeHandler = (e)=>{
            setData({...data,[e.target.name]:e.target.value})
    }
    let mydata = [...newdata,data]
    const SubmitHandler =(e)=>{
        e.preventDefault()
        
        // setNewdata(mydata)
        console.log(mydata)
        setStep(4)
    }
    // console.log(data.name,data.email,data.contact,data.password)
  return (
    <store.Provider value={{data,changeHandler,SubmitHandler}} >
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} alternativeLabel sx={stepStyle}>
                {steps.map((label) => (
                <Step key={label} >
                    <StepLabel sx={{color:'yellow'}}>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
        <Box>
        <form onSubmit={SubmitHandler}>
            {step===0 && <First/>}
            {step===1 && <Second/>}
            {step===2 && <Thred/>}
            {step===3 && <Fourth/>}
            {step===4 && <Dashbord/>}
        </form>
    
        {step > 0 && step<3 && <button className="btn btn-secondary" onClick={prevStep}>Previous</button>}
        {step < 3 && <button className="btn btn-primary" onClick={nextStep}>Next</button>}
        {/* {step === 3 && <input type='submit' value='submit' /> } */}
        
        
        </Box>
    </store.Provider>
  )
}

export default Multistep