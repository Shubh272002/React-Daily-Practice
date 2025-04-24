import { useState } from "react"
export default function UserPage(){

    //Single useState
    const[user,setUser]=useState("Ankit Kumar")


    //Object useState
    const[course,setCourse]=useState({
        name:"PHP",
        fee:12000,
        duration:"3 Months"
    })

    //Array UseState
    const[emp,setEmp]=useState(['Ram','Mohan','Karan','Suresh']);
let users="Sharad Jain";

//Events
const updateUser=()=>{
    setUser("Pramod Singh")
}


const updateCourse=()=>{
    setCourse({...course,fee:15000})
}

const updateEmp=()=>{
    setEmp({...emp,0:"Aniket Kumar"})
}

    return(<>
    <h2>UserName</h2>
    <p>UserName:-{user}</p>

    <h2>Coruse Details</h2>
    <p>courseName:- {course.name}</p>
    <p>Course Fee:- {course.fee}</p>

    <h2>Employee Details</h2>
    <p>Manager:-{emp[0]}</p>
    <p>Supervisor:-{emp[1]}</p>

    <button onClick={updateUser}>Update User</button>
    <button onClick={updateCourse}>Update Course</button>
    <button onClick={updateEmp}>Employee</button>
   
    </>)
}