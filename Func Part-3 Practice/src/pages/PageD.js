import { userdata } from "../Home"
export default function PageD({user})
{
    return(<>
    <h2> Page D</h2>
<p>User Name is {user}</p>
<userdata.Consumer>

{
    (item)=>{
        return(<>
        <p>Your Dept is {item}</p>
        </>)
    }
}

</userdata.Consumer>
    </>)
}