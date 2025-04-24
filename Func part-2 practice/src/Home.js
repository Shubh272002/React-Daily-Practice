import PageA from "./pages/PageA";
import { createContext } from "react";
import UserPage from "./User";

const userdata = createContext();
export default function Homepage()
{

    let username="Manish@123";
    let dept=["Sales Dept","Production"]
    
    return(
    <>
    <h1 align="center">Props Drilling</h1>
    <div align="center">
{/* <userdata.Provider value={dept}>
<PageA user={username}/>
</userdata.Provider> */}
<UserPage/>
</div>


    </>)

}

export {userdata}