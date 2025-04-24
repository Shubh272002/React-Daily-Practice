import { useState } from "react"
export default function UserPage(){

    const[user,setUser]=useState("Ankit Kumar")


    const[course,setCourse]=useState({
        name:"PHP",
        fee:12000,
        duration:"3 Months"
    })


    const[emp,setEmp]=useState(['Ram','Mohan','Karan','Suresh'])


    return(<>
    <h2>UserName</h2>
    <p>UserName:-{user}</p>

    <h2>Coruse Details</h2>
    <p>courseName:- {course.name}</p>
    <p>Course Fee:- {course.fee}</p>

    <h2>Employee Details</h2>
    <p>Manager:-{emp[0]}</p>
    <p>Supervisor:-{emp[1]}</p>
    </>)
}