import { useState,useEffect } from "react"
import { MENU_API } from "../Components/content"


const useResturentMenu=(resId)=>{
  let [resInfo,setResInfo]=useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  let fetchData= async()=>{

    let data=await fetch("http://51.79.250.6:9999/restaurant/"+resId)
    let res=await data.json()
    setResInfo(res)
    
  }
 
  return resInfo;
}
export default useResturentMenu
