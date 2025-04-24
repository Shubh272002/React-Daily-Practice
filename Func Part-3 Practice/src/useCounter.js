import { useState } from "react";
export default function useCounter(){

    const[counter,setCounter]=useState(10)

    const Increment=()=>{
        setCounter(counter+1)
    }

    const Decrement=()=>{
        setCounter(counter-1)
    }

    return([counter,Increment,Decrement])

}