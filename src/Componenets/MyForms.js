import React, { useState } from 'react'

const MyForms = () => { 
  
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    generalInfo:"",
    isStudent: false,
    country: "",
    status: "" });

    function handelCheckBoxChanged(event){
      setFormInputs({...formInputs, isStudent: event.target.checked})
    }
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
    }}>
     <label> Name:</label> 
     <input value={formInputs.name} onChange={(event) => setFormInputs({...formInputs, name: event.target.value})}/>
     <hr/>
     <label>Email:</label> 
     <input value={formInputs.email} onChange={(event) => setFormInputs({...formInputs, email: event.target.value})}/>
     <hr/>
     <label>Age:</label>  
     <input value={formInputs.age} onChange={(event) => setFormInputs({...formInputs, age: event.target.value})}/>
     <hr/> 
     <label> gender:</label>  
     <input value={formInputs.gender} onChange={(event) => setFormInputs({...formInputs, gender: event.target.value})}/>
     <hr/> 
     <label> Are you student </label>
     <input type="checkbox" checked={formInputs.isStudent} onChange={handelCheckBoxChanged}/>
     <hr/>
     <div>
     
     <input value={formInputs.status} type="radio" name="status" checked={formInputs.status  == "student"} onChange={(event) => setFormInputs({...formInputs, status: event.target.value})}/>
     student
     <input value = {formInputs.status} type="radio" name="status" checked = {formInputs.status == "teacher"} onChange={(event) => setFormInputs({...formInputs, status: event.target.value})}/>
     teacher
     </div>
    
     <hr/>    
      <select value={formInputs.country} onChange={(event)=> setFormInputs({...formInputs, country: event.target.value})}>
      <option>Cook Islands</option>
      <option>Finland</option>
      <option>South Korea</option>
     </select>
     <hr/>
     <label> generalInfo:</label>  
     <textarea value = {formInputs.generalInfo}  onChange={(event) => setFormInputs({...formInputs, generalInfo: event.target.value})}/>
     <hr/>  
     <button> Submit </button>   
    </form>
  )
}

export default MyForms
