import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas, Feedbacks} from './components';



const App =() => {

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-black">

    <div className="bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
      <StarsCanvas/>
    </div>
    
    <div className="bg-black">
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    
    </div>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
      
    <Feedbacks/>

   </div>
   
   </BrowserRouter>
     
  )
}

export default App
