import React from "react";
class Login extends React.Component{


    render()
    {

        function abc()
        {
            alert("Hello I am Login Component")
        }
        return(<>
      
      <div align="right">  <button className="btn btn-primary" onClick={abc}>Login</button></div>
        </>)
    }
}

export default Login;