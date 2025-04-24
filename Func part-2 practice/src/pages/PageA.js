import PageB from "./PageB"
export default function PageA({user})
{
    return(<>
    <h2> Page A</h2>
    
    <PageB user={user}/>
    </>)
}