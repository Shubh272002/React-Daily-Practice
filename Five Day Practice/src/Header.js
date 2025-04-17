import React from "react";
class Header extends React.Component{

    render()
    {
        return(<>
        <div className="container-fluid px-5 py-2 bg-light shadow">
            <div className="row">
                <div className="col-md-3">
                    <h3>Techvidya Computer</h3>
                </div>
            </div>
        </div>
        </>)
    }
}

export default Header;