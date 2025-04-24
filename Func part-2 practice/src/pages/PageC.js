import PageD from "./PageD";
export default function PageC({user})
{
    return(<>
    <h2> Page C</h2>
    <PageD user={user}/>
    </>)
}