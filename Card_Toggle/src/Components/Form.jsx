import React from 'react'

export default function Form() {
  return (
    <>
    <h1 className='text-black text-4xl font-semibold ml-[12.3%] mb-6'>Lets set up your Restaurant</h1>
      <div className="flex flex-col w-1/2 ml-[12%] py-2 px-4 ">
      <label for="html" className='mb-1 mx-2'>Name*</label>
      <input type="text" placeholder='Restaurant name' className='border-2 border-gray-300 focus:border-blue-400 focus:outline-none py-1 pl-2 rounded mx-2 placeholder:text-slate-500'/>
      </div>
      <span className='text-gray-500 text-base ml-[12.3%]  py-2 px-2 text-center'><Checkbox  />My venue is not on google</span>
      <h1 className='ml-[13.7%] text-lg font-medium text-gray-700'>Services</h1>
      <div className=" profile relative right-28 bottom-28 w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden ml-auto">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-lg"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16V4a2 2 0 012-2h9l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2z"/>
            </svg>
          </div>  
        </div>
          <div className=" services w-1/3  ml-[9.5%] mt-[-138px]">
            <div className="py-2 flex gap-8 justify-center items-center  mt-1">
               <Chip label="Food" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} variant="outlined"  className=''/>
               <Chip label="Pub" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} variant="outlined"  className=''/>
               <Chip label="Pub" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} variant="outlined"  className=''/>
               <Chip label="Pub" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} variant="outlined"  className=''/>
            </div>
            <div className="ml-16 pb-2 pl-2">
               <Chip label="Pub" onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} variant="outlined" />
            </div>
          </div>
          <div className="flex flex-col px-2 py-2 mx-20 ml-[12.7%]">
            <label htmlFor="About restaurant" className='text-lg font-medium text-gray-700 mx-2 mb-1'>About Restaurant</label>
            <textarea rows="1" name="" id="" placeholder='Write about your Restaurant' className='pl-2 pt-2 h-40 mx-2 text-left pt-0 border-2 border-gray-300 focus:border-blue-400 focus:outline-none rounded  placeholder:text-slate-500'></textarea>
          </div>
          <div className="flex justify-end mr-28 gap-4 mt-2">
            <button className='py-2 text-base text-blue-600 bg-white font-medium border-2 border-blue-400 rounded-md px-8 '>Back</button>
            <button className='  py-2 text-white bg-blue-500 px-8  rounded-md '>Continue</button>
          </div>

    </>
  )
}
