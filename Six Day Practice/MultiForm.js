import React from "react";

class Multiform extends React.Component{

    state={
        name:"",
        email:"",
        mobile:"",
        address:"",
        hindi:90,
        english:100
    }

    inputHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    submitData =(e)=>{
        e.preventDefault();
        console.log(this.state);
        localStorage.setItem("abc",JSON.stringify(this.state))
    }

    totalValue=()=>{
        let sub1 = this.state.hindi;
        let sub2 = this.state.english;
        let total = sub1+sub2
        alert(total);
    }
    
    render()
    {
        const{name,email,mobile,address} = this.state;
        let data = JSON.parse(localStorage.getItem("abc"))
        return(
        <>
        <div className="container">
            <form onSubmit={this.submitData}>
            <div className="row">
                <div className="col-md-4">
                    <h3>Register Form </h3>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Name" className="form-control" name="name" value={name} onChange={this.inputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Enter Email" className="form-control" name="email" value={email}  onChange={this.inputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Enter Mobile" className="form-control" name="mobile" value={mobile} onChange={this.inputHandler}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="Enter Address" className="form-control" name="address" value={address} onChange={this.inputHandler}/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Submit</button>

                    </div>
                </div>

                <h3>Name: {data.name}</h3>
                <h3>Email: {data.email}</h3>
                <h3>Mobile: {data.mobile}</h3>
                <h3>Address: {data.address}</h3>
               
            </div>
            </form>

            <div className="row">
                <div className="col-md-3">
                <button className="btn btn-warning" onClick={this.totalValue}>Add Value</button>
                </div>
            </div>
        </div>
        </>)
    }
}

export default Multiform