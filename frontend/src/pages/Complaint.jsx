import React, { useEffect, useState } from 'react'
import axios from "axios"
import ComplainProps from '../component/ComplainProps';
function Complaint() {

    
    const [data, setData] = useState([]);
    

    const handleGetData = () => {
      axios.get("http://localhost:7000/read/comp")
        .then((res) => {
          setData(res.data);
          navigate("/complain")
        })
        .catch((err) => console.log(err));
    };

     useEffect(() => {
        handleGetData();
      },[]);
  return (
    <div>

<div className='grid grid-cols-3 gap-10'>
     {
        data.map((item)=>{
            return <ComplainProps  name={item.name}  title={item. title}
            message={item.message}/>
        })
     }

        </div>
    </div>
  )
}

export default Complaint