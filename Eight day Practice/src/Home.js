import React from "react";
import axios from "axios";
class HomePage extends React.Component{

    state={
        fname:"",
        email:"",
        mobile:"",
        address:""
    }


    //InputHandler
    inputHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitData=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/user",this.state)
        .then(()=>{
            alert("Data Submitted")
            e.target.reset();
        }).catch(err=>console.log(err))

    }

    render()
    {
        const{fname,email,mobile,address}= this.state;
        return(
        <>
        <div className="container">
            <form onSubmit={this.submitData}>
            <div className="row">
                <div className="col-md-4 p-5 bg-light shadow">
                    <h4>Add Records</h4>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Your Name" className="form-control" name="fname" value={fname} onChange={this.inputHandler}  />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Your Email" className="form-control" name="email" value={email} onChange={this.inputHandler}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Your Mobile" className="form-control" name="mobile" value={mobile} onChange={this.inputHandler}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Enter Your Address" className="form-control" name="address" value={address} onChange={this.inputHandler}/>
                    </div>
                    <div className="mb-3">
                       <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </>
        )
    }
}

export default HomePage;