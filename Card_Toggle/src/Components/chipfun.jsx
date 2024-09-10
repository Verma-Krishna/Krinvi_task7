import React,{useState} from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';



const steps = [
  'Restaurant Details',
  'Add Team',
  'Create Shifts',
  'Create Floor Plan'
];

const label = { inputProps: { 'aria-label': 'My venue is not on google' } };

export default function App() {

  const [shift, setshift] = useState(false);
  const [breakfast, setbreakfast] = useState(false);
  const [lunch, setlunch] = useState(false);
  const [dinner, setdinner] = useState(false);
  const [brunch, setbrunch] = useState(false);
    
  const shiftf = () => {
    setshift(!shift);
  };

  const lunchf = () => {
    setlunch(!lunch);
  };

  const dinnerf = () => {
    setdinner(!dinner);
  };

  const brunchf = () => {
    setbrunch(!brunch);
  };

  const breakfastf = () => {
    setbreakfast(!breakfast);
  };

  return (
    <>
             <main className=' h-screen'>
       <div className='py-4  w-3/4 m-auto mb-6'>
         <Stepper activeStep={1} alternativeLabel>
           {steps.map((label) => (
             <Step key={label}>
               <StepLabel>{label}</StepLabel>
             </Step>
           ))}
         </Stepper>
         <h1 className='text-black text-4xl font-semibold ml-[7%] mt-14 mb-6'>Create Shifts</h1>
       <div className="py-2 border-2 border-gray-300 rounded-lg mx-16">
         <h1 className='ml-8 text-2xl font-bold text-gray-700 mt-4'>Service Hour</h1>
         <h3 className=' ml-8 text-center text-gray-500 text-base font-normal mb-6'>Add Shifts or Select no of shifts add service hour</h3>
         <div className="ml-8 services w-1/3  flex flex-col ">
            <h1 className=' text-lg font-semibold mb-2'>Shift Times</h1>
           <div className="mb-2 flex gap-8 ">
              <Chip label={shift ? 'No Shifts Done' : 'No Shifts'} icon={shift ? <DoneIcon sx={{color: '#fff'}}/> : <AddIcon />} onClick={shiftf} sx={{backgroundColor: shift ? '#1976d2' : '#fff',color: shift ? '#fff' : '#333','&:hover': { backgroundColor: shift ? '#1976d2' : '#f5f5f5',},height:40,fontSize:17,border:'2px solid #ccc'}}/>
              <Chip label={breakfast ? 'Breakfast Done' : 'Breakfast'} icon={breakfast ? <DoneIcon sx={{color: '#fff'}}/> : <AddIcon />} onClick={breakfastf} sx={{backgroundColor: breakfast ? '#1976d2' : '#fff',color: breakfast ? '#fff' : '#333','&:hover': { backgroundColor: breakfast ? '#1976d2' : '#f5f5f5',},height:40,fontSize:17,border:'2px solid #ccc'}}/>
              <Chip label={lunch ? 'Lunch Done' : 'Lunch'} icon={lunch ? <DoneIcon sx={{color: '#fff'}}/> : <AddIcon />} onClick={lunchf} sx={{backgroundColor: lunch ? '#1976d2' : '#fff',color: lunch ? '#fff' : '#333','&:hover': { backgroundColor: lunch ? '#1976d2' : '#f5f5f5',},height:40,fontSize:17,border:'2px solid #ccc'}}/>
              <Chip label={dinner ? 'Dinner Done' : 'Dinner'} icon={dinner ? <DoneIcon sx={{color: '#fff'}}/> : <AddIcon />} onClick={dinnerf} sx={{backgroundColor: dinner ? '#1976d2' : '#fff',color: dinner ? '#fff' : '#333','&:hover': { backgroundColor: dinner ? '#1976d2' : '#f5f5f5',},height:40,fontSize:17,border:'2px solid #ccc'}}/>
           </div>
           <div className="flex ">
           <Chip label={brunch ? 'Brunches Done' : 'Brunches'} icon={brunch ? <DoneIcon sx={{color: '#fff'}}/> : <AddIcon />} onClick={brunchf} sx={{backgroundColor: brunch ? '#1976d2' : '#fff',color: brunch ? '#fff' : '#333','&:hover': { backgroundColor: brunch ? '#1976d2' : '#f5f5f5',},height:40,fontSize:17,border:'2px solid #ccc'}}/>
           </div>
         </div>
           <div className="flex gap-4 justify-end items-center mr-6">
              <IconButton  sx={{color:'#AEB6BD',backgroundColor:'#DFE6EC',padding:0.5,borderRadius:"7px"}}>
              <CheckIcon />
            </IconButton>
            <IconButton sx={{color:'#AEB6BD',backgroundColor:'#DFE6EC',padding:0.5,borderRadius:"7px"}}>
              <CloseIcon />
            </IconButton>
           </div>
       </div>
         <div className=" flex justify-between items-center mx-4 mt-20 px-4">
           <div className="">
              <button className='py-2 text-base text-blue-600 bg-white font-medium border-2 border-blue-400 rounded-md px-8 '>Back</button>
           </div>
           <div className="flex gap-6">
               <button className='py-2 text-base text-blue-600 bg-white font-medium border-2 border-blue-400 rounded-md px-8 '>Back</button>
               <button className='  py-2 text-white bg-blue-500 px-14  rounded-md '>Continue</button>
           </div>
         </div> 
       </div>
     </main>
    </>
  )
}

