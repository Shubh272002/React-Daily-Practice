import React from "react";
class AboutUs extends React.Component{
    render()
    {
        let course = this.props.coursemodule;
        let faculty = this.props.faculty;
        let emp = this.props.emp;


        var arr=[];
        for(var data in course)
        {
           arr.push(<li>{data+" "+course[data]}</li>)
        }

        var arr1=[];
        for(var abc in faculty)
        {
            arr1.push(<p>{abc+" "+faculty[abc]}</p>)
        }
   
        return(<>
        <h2>About Us</h2>
        <p>
        The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.
        </p>

        <h2>Our Courses</h2>
        <ul>
            {arr}
        </ul>
        <h2>Faculty Details</h2>
        {arr1}

        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Timing</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map(data=>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.Name}</td>
                            <td>{data.Subject}</td>
                            <td>{data.Time}</td>
                        </tr>

                    )
                }
            </tbody>
        </table>
        </>)
    }
}

export default AboutUs;