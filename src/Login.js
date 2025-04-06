import {useState} from 'react'

function Login ()
{
   const [user, setUser] = useState("");
   const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState("false");
    const [passErr, setPassErr] = useState("false");

  function loginHandle(e)
    {
        if(user.length <3 || password.length <3 ){
            alert("Type Correct value")
        }
        else{
            alert ("All Good !!")
        }
        //alert("Hello")
    e.preventDefault()
    }

    function userHandler (e){
        let item = e.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else{
           setUserErr(false)
        }
       // console.log(e.target.value.length)
       setUser(item)
    }


    function passwordHandler (e){
        let item = e.target.value;
        if(item.length<5){
            setPassErr(true)
        }
        else{
           setPassErr(false)
        }
       // console.log(e.target.value.length)
       setPassword(item)
    }

    return (
        <div>
            <h1>Basic Form Validation</h1>
            <form onSubmit = {loginHandle}>
            <input type = "text" placedholder = "Enter User ID" onChange = {userHandler}/>
            {userErr ? <span>user not Valid</span> :""}
            <br/><br/>
            <input type = "password" placedholder = "Enter User Password" onChange = {passwordHandler}/>
            {passErr ? <span>password not Valid</span> :""}
            <br/><br/>
            <button type = "submit">Login</button>
            </form>
            
        </div>
    );
}

export default Login;