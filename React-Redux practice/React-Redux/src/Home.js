import { useSelector,useDispatch } from "react-redux";
import Increment from "./Redux-work/Action";
export default function Homepage()
{

    const data = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    return(<div align="center">
    <h1>React Redux</h1>
    <h2>Counter:{data}</h2>
    <button onClick={()=>dispatch(Increment)}>Increment</button>
    <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
    </div>)
}