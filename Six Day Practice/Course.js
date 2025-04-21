import React from "react";

class CoursePage  extends React.Component{

    render()
    {
        let course = this.props.courses;
        console.log(course);
        return(<>
        <div className="container">
            <h3>Our Courses</h3>
            <div className="row">
{
    course.map(data=>
        <div className="col-md-3">
            <img src={data.image} width="100%" height="150"/>
            <h3>{data.course}</h3>
            <p>
                {data.description.substr(0,150)}
            </p>
        </div>
    )
}
            </div>
        </div>
        </>)
    }
}

export default CoursePage;