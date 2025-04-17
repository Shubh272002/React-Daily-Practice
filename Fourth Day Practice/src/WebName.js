import React from "react";
class WebName extends React.Component{

    constructor(props)
    {
        super()
    }

    //id = this.props.techid;

    render()
    {
        let name = this.props.abc
        let msg = this.props.techid;
/*
        if(userid==1)
        {
            var msg="Tech-Education"
        }

        else if(userid==2)
        {
            var msg="Tech-Computer"
        }

        else{
            var msg="Techvidya"
        }
        */
        //console.log(userid);
        return(<>
         <h4>{msg==1?(<>Tech-Education</>):msg==2?(<>Tech-Computer</>):(<>TechVidya</>)}</h4>
        </>)
    }
}

export default WebName;