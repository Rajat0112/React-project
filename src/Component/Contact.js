import {Link, Outlet} from "react-router-dom";

function Contact (){

    return(
        <div className = "Contact">
            <h1> Contact Page !!</h1>
            <p> This is our Contact Page </p>
            <p>We are learning React Router Here: </p>
            <Link to ="company">Company</Link> <br/> <br/>
            <Link to = "other" >Other</Link>
            <Outlet />
            
        </div>
    )
}

export default Contact;