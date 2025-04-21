import React from "react";
class UserForm extends React.Component{
    constructor(props)
    {
        super();
        this.Testing = this.Testing.bind(this);
    }
    state={
        Name:"Ravi Kumar",
        age:20,
        dept:"Sales",
        Desig:"Manager",
        email:"admin@gmail.com"
    }

    //without arrow function
    Testing()
    {
       this.setState({Name:"Manish"})
    }

    //arrow functions
    updateAge = ()=>{
        this.setState({age:35})
    }

    //input Handler
    inputHandler =(event)=>{
        this.setState({email:event.target.value})
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
               <button onClick={this.Testing}>Testing</button>
               <button onClick={this.updateAge}>Update Age</button>
               <input type="text" placeholder="Enter Name" className="form-control" value={this.state.email} onChange={this.inputHandler}/>                </div>

                <div className="col-md-6">
                    
                </div>
            </div>
        </div>
    </>)
    }
}

export default UserForm;