import Navbar from "@/scenes/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/Shared/types"
import Home from "@/scenes/Home"
import Benefits from "./scenes/Benefits"
import OurClasses from '@/scenes/Our_Classes';
import ContactUs from "./scenes/ContactUs"
import Footer from "./scenes/Footer"
function App() {
  const [isTopofPage,setIsTopofPage]=useState<boolean>(true)
 const [selectedPage,setSelectedPage] =useState<SelectedPage>(SelectedPage.Home)
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY === 0){
      setIsTopofPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !==0){
      setIsTopofPage(false)
    }
  }
  window.addEventListener('scroll',handleScroll)
  return ()=>window.removeEventListener('scroll',handleScroll)
},[])
  return (
    <>
      <div className="app bg-red-100">
      <Navbar
      isTopofPage={isTopofPage}
       selectedPage={selectedPage} 
       setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
      </div>
      
     
    </>
  )
}

export default App
