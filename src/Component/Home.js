import {Link, useNavigate} from 'react-router-dom'
// useNavigate hook router use to navigate from one button to other :))))))-----

// <outlet/>   we can use to insert link in the page if we want to insert 3 links under the contact page then at last we can use this tab..
function Home (){

    const navigate = useNavigate();
    const navToPage = (url) => {
        navigate(url)

    }
    return(
        <div className = "Home">
            <h1> Home Page !!</h1>
            <p> This is Home Page </p>
            <p>We are learning React Router Here: </p>

            <Link to ="/about"> Go to About Page</Link>
             <br/>
            <button onClick = {()=> navToPage ('/About')}>Go to About Page </button>
            <br/>
            <button onClick = {()=> navToPage ('/Search')}>Go to Search Page </button>
        </div>
    )
}

export default Home;