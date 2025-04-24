import useCounter from "./useCounter"

export default function GalleryPage(){
    const[counter,Increment,Decrement]=useCounter()
    return(
    <>
    <h2>Counter Value</h2>
    <h3>Counter:{counter}</h3>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    
    </>)
}


