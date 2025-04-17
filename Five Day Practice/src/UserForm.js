import React from "react";
class UserForm extends React.Component{
    
    state={
        Name:"Ravi Kumar",
        age:20,
        dept:"Sales",
        Desig:"Manager"
    }
    render()
    {

        //object destructure 
        const{Name,age,dept,Desig}=this.state;
        return(<>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <h4>User Information</h4>
                <h5>UserName:- {Name}</h5>
                <h5>Age:- {age}</h5>
                <h5>Dept:- {dept}</h5>
                <h5>Designation:- {Desig}</h5>
               
                </div>

                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
    </>)
    }
}

export default UserForm;