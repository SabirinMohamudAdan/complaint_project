
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DisplayDashboard from "./component/DisplayDashboard"
import Addcompliant from "./pages/Addcomplaint"
import Complaint from "./pages/Complaint"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addcomp" element={<Addcompliant/>}/>
        <Route path="/dash" element={<DisplayDashboard/>}/>
        {/* <Route path="/complain" element={<Complaint/>}/> */}
      </Routes>
     
    
    
    </>
  )
}

export default App
