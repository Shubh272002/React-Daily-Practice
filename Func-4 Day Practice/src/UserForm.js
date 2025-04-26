import { useState } from "react"
export default function UserForm()
{
    const[user,setUser]=useState("Ram")
    const[getname,setGetname]=useState("")

    //inputHandler
    const inputHandler=(e)=>{
        setUser(e.target.value)

    }

    const[swap,setSwap]=useState({
        fname:"",
        lname:""
    })

    const abc=(e)=>{
        setSwap({[e.target.name]:e.target.value})
    }

    const swapData=()=>{

     
       setSwap({...swap,fname:swap.lname,lname:swap.fname})
    }
   
    const getValue =()=>{
       setGetname(user)
    }
    return(<>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h3>Single Input Work</h3>
                <input type="text" placeholder="Enter Name" className="form-control" 
                value={user} onChange={inputHandler}/>
                <button onClick={getValue}>Get User</button>

                <h2>UserName:-{getname}</h2>
                </div>

                <div className="col-md-4">
                    <div className="mb-3">
                    <input type="text" placeholder="First Name" className="form-control" name="fname" value={swap?.fname} onChange={abc}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" placeholder="Last Name" className="form-control" name="lname" value={swap?.lname} onChange={abc}/>
                    </div>
                    <div className="mb-3">
                        <button onClick={swapData}>Swap</button>
                    </div>
                </div>
        </div>
    </div>
    </>)
}