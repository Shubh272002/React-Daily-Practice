import React  from "react";
import Header from "./Header";
import CarouselPage from "./Carousel";
import CoursePage from "./Course";
import UserForm from "./UserForm";
class Homepage extends React.Component{

    render()
    {

        const course=[
            {
                id:120,
                course:"PHP",
                description:"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.",
                fee:15000,
                duration:"3 MOnths",
                image:"course/php.png"
            },
            {
                id:121,
                course:"Java",
                description:"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.",
                fee:25000,
                duration:"3 MOnths",
                 image:"course/java.png"
            },
            {
                id:122,
                course:"React",
                description:"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.",
                fee:22000,
                duration:"3 MOnths",
                 image:"course/react.png"
            },

            {
                id:123,
                course:"Python",
                description:"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.",
                fee:20000,
                duration:"3 MOnths",
                 image:"course/python.png"
            }
        ]
        return(
        <>
        <Header/>
        <div className="container-fluid">
<CarouselPage/>
        </div>

    
    <div className="container-fluid p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h2>About Us</h2>
                    <p>
                    Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.


                    </p>
<button className="btn btn-primary">Read More </button>
                </div>
                <div className="col-md-5">
                    <img src="pic/about.png" className="d-block w-100"/>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-light p-5">
        <CoursePage courses ={course}/>
    </div>

    <div className="container-fluid p-5">
        <UserForm/>
    </div>
        </>)
    }
}

export default Homepage;