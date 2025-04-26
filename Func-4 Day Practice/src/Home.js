import { useState } from "react"
import UserForm from "./UserForm"
export default function Homepage()
{

  const[emp,setEmp]=useState([
    {id:121,name:"Ravi",dept:"Sales",desig:"Manager"},
    {id:122,name:"Ravi",dept:"Sales",desig:"Manager"},
    {id:123,name:"Ravi",dept:"Sales",desig:"Manager"},
    {id:124,name:"Ravi",dept:"Sales",desig:"Manager"}
  ])


  /*
  var arr=[]
  for(var data of emp){
arr.push(<tr><td>{data.id}</td> <td>{data}</td></tr>)
  }
*/
  console.log(emp)
    
    return(
    <>
		<h2> Home Page</h2>
<div className="container">
  <div className="row">
    <div className="col-md-6">
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Dept</th>
          <th>Designation</th>
        </tr>
        </thead>
<tbody>
{
emp.map(data=>
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.dept}</td>
    <td>{data.desig}</td>
  </tr>

)

}
</tbody>

    </table>


    </div>
  </div>
 
</div>
   
   <UserForm/>

    </>)

}
