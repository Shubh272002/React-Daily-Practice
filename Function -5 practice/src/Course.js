import Headerpage from "./Header"
import { Link, Outlet } from "react-router-dom"
export default function CoursePage(){
    return(<>
    
    <Headerpage/>

        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav flex-column">
                    <li><Link to="/course" className="nav-link">Home</Link></li>
                    <li><Link to="/course/front" className="nav-link">Front End</Link></li>

                    <li><Link to="/course/back" className="nav-link">Back End</Link></li>
                   
                    </ul>
                </div>

                <div className="col-md-10">
                    <Outlet/>
                </div>
            </div>
        </div>


    {/* <div className="container">
        <div className="row">
            <div className="col-md-12">
               <Outlet/>
            </div>
        </div>
    </div> */}
    
    </>)
}