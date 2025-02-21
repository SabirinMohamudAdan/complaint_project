import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

const image =('https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600');

function Update() {


     const [name, setName] = useState("");
      const [title, setTitle] = useState("");
      const [message, setMessage] = useState("");

      const params=useParams()
      const handlsingledata=()=>{
        axios.get(`http://localhost:7000/read/comp/single/${params.id}`).then((res)=>{
            setName(res.data[0].name)
            setTitle(res.data[0].title)
            setMessage(res.data[0].message)
        }).catch((err)=> console.log(err))
        
      }

      const handlupdate=()=>{
        axios.put(`http://localhost:7000/update/comp/${params.id}`,{
            "name":name,
            "title":title,
            "name":name,
            


        })

      }

      useEffect(()=>{
        handlsingledata()
      },[])
     
  return (
    <div>

<div className='bg-orange-600 w-full h-20 pt-5 px-6'>
      <h1 className='text-white text-2xl'>Complaint</h1>


        </div>
        <div className="h-[561px] bg-cover bg-center bg-no-repeat transition-all
         duration-1000
       " 
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <div className='h-[561px] bg-black bg-opacity-50 pt-20'>
       


<form className=" w-[400px]  h-[350px]  bg-black bg-opacity-50 pt-10 ml-[500px]
 pl-20 rounded-lg  mt-10 ">
          
           
            <input value={name} onChange={(e)=> setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="mt-1 block w-[260px] h-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
           <input value={title} onChange={(e)=> setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Enter Your Title"
              className="mt-4 block w-[260px]  h-10  px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
           <textarea value={message} onChange={(e)=> setMessage(e.target.value)}
              id="complaint"
              placeholder="Enter Your Complaint"
              rows="4"
              className="mt-4 block w-[260px]  h-30 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          
          <button 
            type="submit"
            className="w-40 bg-orange-600 text-white py-2 px-4 mt-6 ml-10 rounded-md
             hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>

        </form>
</div>
      </div>

    </div>
  )
}

export default Update
