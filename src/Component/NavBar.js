import {NavLink} from 'react-router-dom' 
//import './App.css';

//<li><Link to = "/Para/rajat">Rajat </Link></li>
       
       //<li><Link to = "/Para/nakul">Nakul </Link></li> 

       // we can't give class to the link :)------
       // we can use the navlink to add the class 

function NavBar (){
    return(
        <div>
        <ul className = "navbar">
        <li><NavLink className = "nav-bar-link" to = "/About">About</NavLink></li>  
        <li><NavLink className = "nav-bar-link"to = "/">Home</NavLink></li> 
        <li><NavLink className = "nav-bar-link" to = "/contact">Contact</NavLink></li> 
        <li><NavLink className = "nav-bar-link" to = "/search">Search</NavLink></li> 
        </ul>

        </div>
    )
}

export default NavBar;