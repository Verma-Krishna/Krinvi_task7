import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Dropdown from './Components/Dropdown';

const steps = [
  'Restaurant Details',
  'Add Team',
  'Create Shifts',
  'Create Floor Plan'
];


export default function App() {
  return (
      <>
       {/* <div className="mt-4">
      <Stepper activeStep={1} alternativeLabel>
           {steps.map((label) => (
             <Step key={label}>
               <StepLabel>{label}</StepLabel>
             </Step>
           ))}
         </Stepper>
         <div className="flex flex-col gap-4 justify-center items-center mt-16 mb-6">
          <img src="/v" className=''/>
          <h1 className='text-4xl font-bold '>Welcome Barrafina!</h1>
          <h3 className='text-xl font-bold text-gray-700'>We will help you set up your Restaurant.</h3>
         </div>
         <div className="flex justify-center itmes-center border-2 border-gray-300 w-3/4 m-auto rounded-md">
            <div className="w-1/2"> 
            <img src="/vd" alt="" />
            </div>
            <div className="w-1/2 border-2 border-red-500">
            <h1 className='text-xl font-bold mb-6'>Create a floor plan</h1>
            <h4 className='border-2 border-red-500 inline'>Create Your floor Plan or use our demo floor</h4>
            </div>
         </div>
      </div>  */}
    <Dropdown/>
      </>
  )
}
