"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
  
  const [count,setCount]=useState(0)
  useEffect(()=>{
    
    count>0?document.title=`Count is ${count}`:document.title="Atleast Click once";
  })
  return (
    <>
    <div className="usbhaius">
      <button className="why" onClick={()=>{setCount(count+1)}} >Click me {count>0?count:""}</button>
    </div>
    </>
    
  );
}

export default page
