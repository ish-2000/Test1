import React, { useState, useEffect } from "react";
import axios from "axios"; 

export default function AllStudents() {
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
      function getStudents() {
        axios.get("http://localhost:8070/student/")
          .then((res) => {
            setStudents(res.data); // Update state with the fetched data
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      getStudents();
    }, []);
    
    
    return(
    <div>
        <h1>All Student Details</h1>
    </div>
    )
}