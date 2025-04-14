import React from "react";
import  "./Style.css"
import MyImage from "./p1.jpg";

class HomePage extends React.Component{

    constructor()
    {
        super();
    }

    //always create a property for the any kind of ref. not a var or let or const
     user="Ankit";
//class property alway use in return method with this keyword
render()
{
    //Js Area 
    let designation="Manager"
    let myuser = this.user;

    const emp=["Ram","Mohan","karan"];

    //Array Destructure 
    const[a,b,c]=emp;

    const student={
        name:"Ram",
        Age:20,
        course:"Java",
        Fee:15000,
        Time:"Morning",
        info:function(){
            return `${this.name} ${this.course}`//template string 
        }
    }

    //Object Destructure
    const{name,Age,course,Fee,Time}=student;





    return(
        //html area 
<>
        <h1 style={{color:'red',fontFamily:'calibri'}}> My First Class Component</h1>
        <h2>Hello Developer</h2>
        <input type="text"/>
        {console.log("Hello React")}

        <p>Hello Designer</p>
        <p>Ram is a {designation}</p>
        {myuser}

        {/* <img src={MyImage} width="300"/> */}
        {/* <img src="image.png"/> */}

        <p>{emp[0]}</p>
        <p>{b}</p>

   
        <p>{student.info()}</p>
        <p>{Fee}</p>
        </>
    )
}    

}

export default HomePage;