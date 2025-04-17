import React from "react";
import WebName from "./WebName";
import Search from "./Search";
import Login from "./Login";
import AboutUs from "./About";
class HomePage extends React.Component{


render()
{
    let course=["PHP","Java","React","Angular","Node Js"];
    let faculty={Name:"Rajeev",Branch:"IT",Address:"Noida"}

    let emp=[
        {id:120,Name:"Amit",Subject:"Java",Time:"Morning"},
        {id:121,Name:"Chetan",Subject:"React",Time:"Morning"},
        {id:122,Name:"Ankit",Subject:"Node",Time:"Morning"},
        {id:123,Name:"Ankur",Subject:"Angular",Time:"Morning"},
        {id:124,Name:"Rajeev",Subject:"PHP",Time:"Morning"}
    ]

    return(
       
<>
{/* Header */}
    <div className="container-fluid px-5 py-2 bg-light shadow">
        <div className="row">
            <div className="col-md-3">
               <WebName abc="TechVidya-Education" techid={10}/>
            </div>

            <div className="col-md-5">
               <Search/>
            
            </div>
      
      
            <div className="col-md-3">
                <Login/>
            </div>
        </div>
    </div>

    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-8">
                <AboutUs coursemodule ={course} faculty={faculty} emp={emp}/>
            </div>
        </div>
    </div>   
        
    </>
    )
}    

}

export default HomePage;