import React from 'react'

import { Link } from 'react-router-dom';
const image =('https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600');
function Home() {
  return (
    <div >
        <div className='bg-orange-600 w-full h-20 pt-5 px-6'>
      <h1 className='text-white text-2xl'>Complaint</h1>


        </div>



      
        <div 
      className="h-[561px] bg-cover bg-center bg-no-repeat transition-all duration-1000
       " 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="  h-[561px] bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold ml-80 pt-40 ">Dhiibo Cabashadaada  </h1>
     <Link to="/addcomp">
      <button  className="mt-10 px-6 py-3 bg-orange-600 text-white text-2xl
         rounded-lg ml-96 ">
        Addcomplaint
        </button></Link>
      </div>
    </div>
      


    </div>
  )
}

export default Home
