import React, { useState } from "react";
import axios from "axios";  

export default function AddStudent(){

//declear variables for form
  const[name, setName] = useState("");
  const [age, setAge] = useState("");
  const[gender, setGender] = useState("");




function sendData(e){

    //newstuden OBJECT for test in console
const newStudent = {
  name,
  age,
  gender

}
console.log(newStudent); //print form data IN CONSOLE


  e.preventDefault(); //submit eke default behavior ek change krnn
  setName("");
  setAge("");
  setGender("");


  //pass form data to backend
  axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
    alert("Student Added Successfully")
  }).catch((err)=>{
    alert(err) 
  });

}






  
    return(

<div className="container">
<form className="AddStudent-form" onSubmit={sendData}>
  <div className="mb-3">
    <label for="name" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Student Name"

    //this function will update realtime values for variables
    onChange={(e) => {
      setName(e.target.value);
  }
} />
    
  </div>
  <div className="mb-3">
  <label for="age" className="form-label">Student Age</label>
  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Student Age"

      //this function will update realtime values for variables
     onChange={(e) => {
      setAge(e.target.value);
  }
} 
  />
  </div>

  <div class="mb-3">
   <label for="gender" className="form-label">Student Gender</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Student Gender"

      //this function will update realtime values for variables
       onChange={(e) => {
        setGender(e.target.value);
    }
  } 
    />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

       

    )
}