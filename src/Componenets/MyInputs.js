import React from "react"
import { useState } from "react"
 const MyInputs = () => {
    const [myInputValue, setMyInputValue]= useState("")
    function handleInputChange(event){
       setMyInputValue(event.target.value)
    }
  return (
    <div>
      <label > Your Name </label>
      <input value = {myInputValue} onChange={handleInputChange}/> 
    </div>
  )
}
export default MyInputs

