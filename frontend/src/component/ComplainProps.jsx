import React from 'react'

const ComplainProps=(props)=> {
  return (
    <div>


         <div className=' bg-gray-700  w-[250px] h-[240px]  pt-10 text-white
         rounded-md text-xl mt-20 ml-10 pb-6'>
          <div></div>
            <h1 className='text-center text-2xl'>{props.name}</h1>
            <p className='text-xl mt-6 text-center'>{props.title}</p>
            <p className='text-xl mt-6 ml-2 '>
            {props.message}</p>
            <div className='ml-40 mt-3'>
            <i className="fa-solid fa-pen-to-square  text-green-700 text-2xl"></i>
            <i onClick={props.remove} className="fa-solid fa-trash text-red-700 text-2xl ml-4"></i>
            </div>


         </div>
         </div>
    
  )
}

export default ComplainProps