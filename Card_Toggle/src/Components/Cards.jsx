import React,{useState} from 'react'

const Cards = ({ id, name,time,person,Contact,email,Notes,chaircount,color}) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
         <div className=" border-2 border-blue-300 rounded-lg w-[320px] m-auto bg-white mb-2 py-2" onClick={handleExpand}>
      <div className={`flex items-center justify-between mx-2 pb-1 card-sm w-[300px]  rounded-lg mb-2 px-2 py-2 ${expanded ? 'h-full' : 'h-[20%]'}`}>
            <button className='flex flex-col-reverse items-center bg-gray-200 border-2 border-gray-300 px-4  rounded-lg '><img src="stool.svg" className='w-6' alt="" />{chaircount}</button>
            <div className="flex flex-col  justify-left items-center">
               <h1 className='mb-1 font-medium text-gray-600'>{name}</h1>
               <span className='flex gap-1 '><img src="user.png" alt="" className='w-5'/>{person}</span>
            </div>
            <div className="flex flex-col justify-center items-center pt-1">
               <span className={`bg-${color}-300 w-[40%] rounded-2xl px-1 py-1 `}><img src="man-walking.png" className='w-6 ' /></span>
               <h1 className={`mt-2 text-sm font-medium  text-slate-600`}>{time}</h1>
            </div>
      </div>
      { expanded && (
              <body className='bg-white'>
                <div className="border-b-[1px] border-gray-300 mx-2 py-1">
                  <h1 className='text-base text-gray-600 font-medium mb-1'>Allergies</h1>
                  <div className="flex gap-2">
                    <h3 className='inline border-red-500 text-sm bg-blue-300 text-blue-600 rounded-md px-2'>Calory</h3>
                    <h3 className='inline border-red-500 text-sm bg-orange-300 text-orange-600 rounded-md px-2 '>Lupin</h3>
                    <h3 className='inline border-red-500 text-sm bg-indigo-300 text-indigo-600 rounded-md px-2'>Eggs</h3>
                  </div>
                  <h1 className='text-base text-gray-600 font-medium mt-1'>Notes</h1>
                  <h3 className='text-sm'>{Notes}</h3>
                </div>
                <div className="border-b-[1px] border-gray-300 py-2 mx-2 mb-2 ">
                 <h1 className='text-base text-gray-600 font-medium'>Contact</h1>
                 <span className='flex'><img src="call.svg" alt="" className='w-6 mr-2'/>{Contact}</span>
                 <span className='flex'><img src="mail.png" className='w-5 mr-4' alt="" />{email}</span>
                </div>
                <div className="flex justify-end mx-2 py-2">
                  <div className="flex items-center gap-2">
                   <img src="reload.svg" alt="" className='w-5'/>
                   <img src="pencil.svg" alt="" className='w-5'/>
                   <img src="delete.png" alt="" className='w-5'/>
                  </div>
                </div>
              </body>
      )
      }
      </div>
    </>
  )
}

export default Cards;



// import React from 'react';
// import Card from './Components/Cards';

// const App = () => {
//   const cards = [
//     {  id:1,name: 'Sam Alter', time: '10:45 AM',person: 4,Contact:'+91 6395782457',email:'samalter@gmail.com',Notes:" No notes available",chaircount:3,color:"blue"},
//     {  id:2,name: 'Victor Will', time: '4:45 AM',person: 3,Contact:'+91 9578245741',email:'victor@gmail.com',Notes:" No notes available",chaircount:6,color:"indigo"},
//     {  id:3,name: 'Michael Dawson', time: '9:45 AM',person: 5,Contact:'+91 1145788752',email:'michael@gmail.com',Notes:" No notes available",chaircount:5,color:"orange"},
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center">
//       {cards.map((card) => 
//         (<Card key={card.id} {...card} />))}
//     </div>
//   );
// };

// export default App;
