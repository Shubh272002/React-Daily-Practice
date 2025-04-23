import "./Style2.css";
export default function Aboutpage({title,subtitle,students,userid,course})
{
    var arr=[];

    for(var data in students)
    {
        arr.push(<li key={data}>{students[data]}</li>)
    }

    return(<>
    <h2>{title}</h2>
    <h4>{subtitle}</h4>
    <p>
    The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.The quick brown fox jumps over to the little lazy dog.

    </p>
    <img src="animated.webp" width="200"/>
    <h3>PHP Students List</h3>
    <ul>
        {arr}
    </ul>

    <h2>User Role</h2>
   <h3>{userid==1?"Admin":userid==2?"Author":"Reader"}</h3>

   <table className="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Fee</th>
            <th>Duration </th>

        </tr>

    </thead>
    <tbody>
        {
            course.map(item=>
                <tr key={item.courseid}>
                    <td>{item.courseid}</td>
                    <td>{item.name}</td>
                    <td>{item.fee}</td>
                    <td>{item.duration}</td>
                </tr>

            )
        }
    </tbody>
   </table>
    </>)
}