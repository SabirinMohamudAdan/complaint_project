import React from 'react'

const ComplainProps=(props)=> {
  return (
    <div>


         <div className=' bg-gray-700  w-[250px] h-[220px]  pt-10 text-white
         rounded-md text-xl mt-20 ml-10'>
            <h1 className='text-center text-2xl'>{props.name}</h1>
            <p className='text-xl mt-6 text-center'>{props.title}</p>
            <p className='text-xl mt-6 ml-2 '>
            {props.message}</p>

         </div>
         </div>
    
  )
}

export default ComplainProps