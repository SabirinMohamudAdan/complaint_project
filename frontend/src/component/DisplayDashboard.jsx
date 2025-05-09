import React, { useEffect, useState } from 'react'
import axios from "axios"
import ComplainProps from './ComplainProps';
import { Link, useNavigate } from 'react-router-dom';

const  DisplayDashboard =()=> {


    const [data, setData] = useState([]);
    
    //    const navigate=useNavigate()
    const handleGetData = () => {
      axios.get("http://localhost:7000/read/comp")
        .then((res) => {
          setData(res.data);
        //   navigate("/complain")
        })
        .catch((err) => console.log(err));
    };


    // delete data
    const handleremoveData=(id)=>{
      axios.delete(`http://localhost:7000/delete/comp/${id}`).then(()=>{
        alert("success delete data")
        handleGetData()
      }).catch((err)=> console.log(err))
    }

    useEffect(() => {
        handleGetData();
      },[]);
  return (
    <div className='flex  gap-10 '>
          <div className='bg-orange-600  w-[300px]  h-[640px]  text-white text-2xl pt-60 px-8'>

          <ul>
            <li>Dashboard</li>
          <Link to="/complain"> <li>Complaint</li></Link> 
          </ul>
         </div>
        
        <div className='grid grid-cols-3 gap-10'>
            {/* <Complaint/> */}
     {
        data.map((item)=>{
            return <ComplainProps  updatedata={(item._id)} 
              remove={()=> handleremoveData(item._id)}
             name={item.name}  title={item. title}
            message={item.message}/>

        })
     }

        </div>
    </div>
  )
}

export default DisplayDashboard