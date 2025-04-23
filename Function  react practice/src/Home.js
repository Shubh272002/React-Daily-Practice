import "./Style.css";
import abc from "./holi.gif";
import Aboutpage from "./About";
export default function Homepage()
{

    const student=["Ram","mohan","karan","Suresh"];

    const course=[
        {courseid:120,
            name:"PHP",
            fee:12000,
            duration:"3 Months"
        },

        {courseid:121,
            name:"Java",
            fee:12000,
            duration:"3 Months"
        },

        {courseid:122,
            name:"React",
            fee:12000,
            duration:"3 Months"
        },

        {courseid:123,
            name:"Angular",
            fee:12000,
            duration:"3 Months"
        }


    ]

    return(
    <>
    <h1 align="center">Function Components</h1>
    <h2 style={{color:"red"}}>Home Page</h2>
    <p>
    The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog. The quick brown fox jumps over to the little lazy dog.
    </p>
<img src={abc} width="200"/>
<img src="animated.webp" width="200"/>

<Aboutpage title="Welcome to Techvidya" subtitle="Best Computer Institute in Noida" students={student} userid={3} course={course}/>

    </>)

}