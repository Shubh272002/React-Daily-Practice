import { Link } from "react-router-dom"
export default function Headerpage()
{
    return(<>
      
        <div className="container-fluid px-5 py-3 bg-light shadow">
        <div className="row">
            <div className="col-md-3">
                <h4>TechVidya</h4>
            </div>

            <div className="col-md-9">
                <ul className="nav">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/event" className="nav-link">Events</Link></li>

                <li><Link to="/course" className="nav-link">Course</Link></li>
                {/* <li><Link to="/course" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</Link> */}
                {/* <div className="dropdown-menu">
                <Link to="/course/front" className="dropdown-item">Front End</Link>
                <Link to="/course/back" className="dropdown-item">Back End</Link>
                </div> 
                </li>
                */}
                </ul>
            </div>
        </div>
    </div>
    </>)
}