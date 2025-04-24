import PageA from "./pages/PageA";
import { createContext,useCallback,useState } from "react";
import UserPage from "./User";
import useCounter from "./useCounter";
import GalleryPage from "./Gallery";
import ChildPage from "./ChildPage";
const userdata = createContext();
export default function Homepage()
{
 const[counter,Increment,Decrement]=useCounter();   

 const[multiply,setMultiply]=useState(2);

const multi =()=>{
setMultiply(multiply*2);
}
    let username="Manish@123";
    let dept=["Sales Dept","Production"];

    const MyUser=useCallback(()=>{
        console.log("hello Designer")

    },[multiply])
    
    return(
    <>
    <h1 align="center">Props Drilling</h1>
    <div align="center">
{/* <userdata.Provider value={dept}>
<PageA user={username}/>
</userdata.Provider> */}
{/* <UserPage/> */}

<h2>Counter:{counter}</h2>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
<br/><br/><br/>
{/* <GalleryPage/> */}

<h3>multiply:{multiply}</h3>
<button onClick={multi}>multiply</button>
<ChildPage abc={MyUser}/>

</div>



    </>)

}

export {userdata}