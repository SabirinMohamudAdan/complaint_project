
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DisplayDashboard from "./component/DisplayDashboard"
import Addcompliant from "./pages/Addcomplaint"

import Update from "./pages/Update"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addcomp" element={<Addcompliant/>}/>
        <Route path="/dash" element={<DisplayDashboard/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
     
    
    
    </>
  )
}

export default App
