import PageC from "./PageC"
import { userdata } from "../Home"
import { useContext } from "react"
export default function PageB({user})
{
    let data = useContext(userdata);
    return(<>
    <h2> Page B</h2> 
    <h4>Ankit Working in {data[0]}</h4>
    
    <PageC user={user}/>
    </>)
}