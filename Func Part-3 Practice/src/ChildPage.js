import { memo } from "react"
function ChildPage()
{
    console.log("Hello Developer")

    return(
    <>
    <h3>Child Page</h3>
    </>)
}

export default memo(ChildPage)