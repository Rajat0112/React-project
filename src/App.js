
//import {useState} from "react"
// For class based Component to import   --------------------------------
//import React, {Component} from 'react';
//import User from './User';
//class App extends Component {
//render()
//{
 //return (
   // <div>
     // <h1> Using Functional Component</h1>
      //<User/>
      //<User/>
     
    //</div>
  
  //);
//}
//}

//export default App;



//function call or onclick event perform arrow function  ---------------------------

//function App () {
 //      let data = "Choudhary Saab"
//function apple(){
//alert("Function called");
//}
  //return(
    //<div className = "App">
      //<h1>Hello I am learning React</h1>
      //<button onClick ={()=>alert("Hey Rajat Choudhary")}>Click on Me</button>
    //</div>
  //);
//}

//export default App;



// STATE IN REACT WITH EXAMPLE ------------

//import {useState} from "react"
//function App (){
  //const [data, setData] = useState(0)
  //function updateData()
  //{
    //setData(data+1)
   // alert(data)
  //}
  //return(
    //<div className = "App">
     //<h1>{data} </h1>
      //<button onClick = {updateData}>Update Data</button>
    //</div>
  //);
//}

// PROPS IN FUNCTIONAL COMPONENTS --------

//import Student from './Student';
//function App (){
  //return (
    //<div className = "App">
      //<h1>Props in React :) </h1>
      //<Student name ={"Rajat"} email= "rajat@gmail.com"/>
      //<Student name ={"Nakul"} email= "nakul@gmail.com"/>
      //<Student name ={"Ujjwal"} email= "ujjwal@gmail.com"/>
      //<Student name ={"Simran"} email= "simran@gmail.com"/>
    //</div>
  //);
//}
//export default App;


// GET INPUT BOX VALUE ---------------------
/*import {useState} from 'react'

function App ()
{
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)

  function getData (val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
  }
  return (
    <div className = "App">
      {
        print ?
        <h1>{data}</h1> 
        :null
      }
      <input type = "text" onChnage = {getData}/>
      <button onClick = {()=>setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
*/

// HANDLE FORM IN REACT -----------------------------------------
/*import './App.css';
import {useState} from 'react'

function App (){
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interst,setInterst] = useState();
  function getFormData (e)
  {
    console.log(name)
    console.log(tnc)
    console.log(interst)
    e.preventDefault()
  }
  return (
    <div className = "App">
      <h1>Handle form in React</h1>
      <form onSubmit = {getFormData}>
        <input type = "text" placeholder = "enter name" onChange={(e)=>setName(e.target.value)}/>   <br/><br />
        <select onChange ={e=>setInterst(e.target.value)}>
          <option>Select Options</option>
          <option>Animal</option>
          <option>Language</option>
          <option>Nationality</option>
        </select>
        <input type ="checkbox" onChange ={e=>setTnc(e.target.checked)}/><span>Accept Terms and Conditoons</span>

        <br/><br/>
        <button type= "submit">Submit</button>
      </form>
    </div>
  );
}


*/
import './App.css';
/*import Login from './Login';
function App (){
  return(
    <div>
<Login/>
    </div>
  );
}
  */

// COMPONENT DID UPDATE IN CLASS COMPONENTS------------------
//Conditional call under componentdidUpdate apply only :)
// Mounting, updating and unmounting .....

/* import './App.css';
import React, {Component} from 'react'
class App extends Component
{
  constructor(){
    super();
    console.log("constructor")
    this.state = {   
         count : 0
    }
      
    

  }
  componentDidUpdate (preProps, preState, snapShot){
    console.log("componentDidUpdate", preState.count, this.state.count)
  }
  render()
  {
    return(
      <div className = "App">
        <h1>Component Did Update {this.state.count}</h1>
        <button onClick = {()=>this.setState({count:1})}>Update Me</button>
      </div>
    );
  }
}
export default App;




// HOOKS IN REACT USEFROM THE CLASS TO FUNCTIONAL COMPONENTS LIKE STATES, LIFECYCLE METHODS.---------

import {useEffect, useState} from 'react'
function App () {
  
  const[count, setCount] = useState(10);
  const[data, setData] = useState(100);


  // USE EFFECT USE WAY TO USE -----
  useEffect(()=>{
    console.log("Called with the data State")
}, [data]
  )

// for special use of useEffect hook in React with CONDITIONS ------
  useEffect(()=>{
    alert("count is "+ count)
}, [count]
  )

return (
  <div className = "App">
    <h1>Count : {count}</h1>
    <h1>Data : {data}</h1>

    <button onClick = {()=>setCount(count+1)}>Update Counter</button>
    <button onClick = {()=>setData(data+1)}>Update Data</button>
  </div>
);
}

export default App;



import './style.css'
// Module CSS ----
import style from'./custom.module.css'

function App (){
  return(
    <div className = "App">
      <h1 className = "primary">Styling part 1</h1>
      <br/>
      <h1 style = {{backgroundColor : "yellow", color:"violet"}}>Styling part 2</h1>
      <br/>
    
      <h1 className = {style.success}>Styling part 3</h1> 
      
    </div>
  )
}

export default App;




// MAP FUNCTION OR LOOP IN LIST -------

import React from 'react'
function App (){

 // const students = ['Rajat', 'Amit', 'Nakul'];

 const students = [
  {Name : "Rajat", Email : "rajat@gmail", Number : 8888},
  {Name : "Nakul", Email : "nakul@gmail", Number : 1234},
  {Name : "Amit", Email : "amit@gmail", Number : 8954},
  {Name : "Rohit", Email : "rohit@gmail", Number : 9832},

 ]
  //MAP looping --------

 // students.map ((item)=>{
   // console.log("My name is :", item)
  //});


  // for loop ----------

 // for (let i =0; i<students.length; i++){
   // console.log("In for Loop My Name is :", students[i])
  //}



  return (
    <div className = "App">
      <h1> Array with list</h1>
      <table border = "1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Number</td>
        </tr>
      {
        students.map((data)=>
          <tr>
            <td>{data.Name}</td>
            <td>{data.Email}</td>
            <td>{data.Number}</td>
          </tr>
          
      )
}
      </table>
      
    </div>
  );
}

export default App;






// nested list =====

import React from 'react'
function App(){

 
  const students = [
   {Name : "Rajat", Email : "rajat@gmail", Address :
    [
      {Hn: "88", City :"Delhi", Country :"India"},
      {Hn: "45", City :"Chandigarh", Country :"India"},
      {Hn: "98", City :"Karnal", Country :"India"}
    ]
   },
   {Name : "Nakul", Email : "nakul@gmail", Address :
    [
      {Hn: "12", City :"Meerut", Country :"India"},
      {Hn: "34", City :"Shamli", Country :"India"},
      {Hn: "90", City :"Saharanpur", Country :"India"}
    ]
  },
   {Name : "Amit", Email : "amit@gmail", Address :
    [
      {Hn: "99", City :"Faridabad", Country :"India"},
      {Hn: "11", City :"Noida", Country :"India"},
      {Hn: "21", City :"Panipat", Country :"India"}
    ]
  },
   {Name : "Rohit", Email : "rohit@gmail", Address :
    [
      {Hn: "76", City :"Delhi", Country :"India"},
      {Hn: "67", City :"Gangoh", Country :"India"},
      {Hn: "55", City :"Haridwar", Country :"India"}
    ]
  },
  ]
  
    return (
      <div ClassName = "App">
        <h1> NESTED LIST IN ARRAY</h1>
        <table border = "1">
          <tbody>
          <tr>
            <td>S No.</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          </tr>
          </tbody>
          {
          students.map((item, i)=>
          <tr key ={i}>
          <td>{i + 1}</td>
          <td>{item.Name}</td>
          <td>{item.Email}</td>
          <td>{
            item.Address.map((data)=>

           <tr>
            <td>{data.Hn}</td>
            <td>{data.City}</td>
            <td>{data.Country}</td>
           </tr>
            )
          }
            </td>
  
          </tr>
          )
        }

        </table>

      </div>
    );
  }

  export default App;



import React from 'react'
import Student from './Student'

function App ()
{

  function parentAlert (data){
   // console.log (data)
    alert(data);
  }
  
  return (
    <div className = "App">
      <h1>Lifting state up </h1>
    <Student  alert = {parentAlert} />
  
  </div>
  )
}


export default App ;





//class based component in pure component -----------

import React, {PureComponent} from 'react'
import Student from './Student'
// use PureComponent to stop re rendering once check and increase performance 
class App extends PureComponent
{
  constructor(){
    super();
    this.state = {
      count :1
    }
  }
  render ()
  {
   

    return (
      <div className ="App">

        <Student count = {this.state.count} />
        <button onClick = {()=>this.setState({count : this.state.count+1})}>
          Update Count</button>
      </div>

    );
  }
}




// useRef used HOOKS -------  for focus, color and value :)------
// forwardRef use in child components to get value and pass the value with the help of props :)------ 

import React, {useRef} from 'react'

function App ()
{

  let inputRef = useRef(null)
function handleInput(){

  console.warn("Function Call")
  //inputRef.current.value = "100"
  //inputRef.current.focus();
 // inputRef.current.style.color = "red";
}

  return (
    <div className = "App">
      <h1> useRef in React</h1>
      <input type = "text" ref = {inputRef}/>
      <button onClick = {handleInput}>Handle Input</button>
    </div>
  )
}






// CONTROLLED COMPONEMTS MEANS control the input fields or form with the help of states :)-----


import React, {useState} from 'react'

function App ()
{
  let [val, setVal] = useState("");


  return (
    <div className = "App">
      <h1> Controlled Component </h1>
      <input type = "text" value = {val} onChange = {(e)=>setVal(e.target.value)}/>
      <h2>Value is : {val}</h2>
      <button>Click</button>
    </div>
  )
}
export default App;



// UNCONTROLLED COMPONENTS are those components that are controlled through the javascript or through the Ref :)-----

import React, {useRef} from 'react'

function App ()
{
  let inputRef = useRef(null);
  let dataRef = useRef(null);
function submitForm(e){

  e.preventDefault()
  console.warn("Input field value 1 is :", inputRef.current.value)
  console.warn("Input field value 2 is :", dataRef.current.value)

}

  return (
    <div className = "App">
      <h1> Uncontrolled Component </h1>
      <form onSubmit = {submitForm}>

      <input ref = {inputRef} type = "text" />   <br/> <br/>
      <input ref = {dataRef} type = "text" />  <br/>  <br/>

      <button>Click</button>
      </form>
      
    </div>
  )
}
export default App;



// HIGH ORDER COMPONENTS --- take component as an Input and give same as an output component :)-----
// WITH ADD EXTRA FEATURES WITH THE HELP OF HIGH ORDER FUNCTIONS :)------

import React, {useState} from 'react'

function App ()
{
 
  return (
    <div className = "App">
      <h1> High Order Component </h1>
      <HOCRed cmp = {Counter} />
      <HOCGreen cmp = {Counter} />
      <HOCBlue cmp = {Counter} />
      
    </div>
  )
}

function HOCRed (props)
{
 
  return <h2 style = {{backgroundColor : 'red', width :100}}>RED <props.cmp /> </h2>

}

function HOCGreen (props)
{
 
  return <h2 style = {{backgroundColor : 'green', width :100}}>GREEN <props.cmp /> </h2>

}

function HOCBlue (props)
{
 
  return <h2 style = {{backgroundColor : 'blue', width :100}}> BLUE<props.cmp /> </h2>

}



  function Counter (){
    const [count,setCount] = useState(0);
    return <div>
      <h3>{count}</h3>
      <button onClick = {() => setCount(count+1)}>Update</button>
    </div>
  }
export default App;



// React Router --------------------  use BrowserRouter, Routes and Route :)----------^^^^^^^^

// we can use link to go one page to other with the help of Link :)
// Any work we want to do in react Router is under the BrowserRouter :)

// useNavigate hook used to click on button and go on that function :)----
// useLocation provide all data about all pages like state, param, query :)------

import {BrowserRouter, Routes, Route, Navigate, useSearchParams} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/NavBar';
import Page4 from './Component/Page4';
import Para from './Component/Para';
import './App.css';
import Search from './Component/Search';
import Contact from './Component/Contact';
import Company from './Component/Company';

import Other from './Component/Other';

//<Route path = "/*" element = {<Navigate to = "/"/>}/>    navigate use :)----
//import Page4 from './Component/Page4';
function App (){
  return(
      <div className = "App">
        <BrowserRouter>
        <NavBar/>
          <Routes>

            <Route path ="/" element = {<Home/>}/>

            <Route path ="/About" element = {<About/>}/>

            <Route path = "/Para/:name" element = {<Para/>} />

            <Route path = "/Search" element = {<Search/>} />

            <Route path = "/contact/" element = {<Contact/>} >
               <Route path = "company" element = {<Company/>} />
               <Route path = "other" element = {<Other/>} />
            </Route>

          </Routes>

          </BrowserRouter>
      </div>
  )
}

export default App;

*/
// API use to connect the database through backend :)
//Get use to call API  to fetch the data from backend server side language - Javascript, Node.js, Php :)))
//Post use to store the data --------
// Put use update the data in database ------- MODIFY THE DATA :)))
// PATCH are the instruction to modify the data :)
// Delete use to delete the data from the database ------

// useeffect ued to fetch the data or call an API ----

// .THEN USE FOR PROMISE AND RETURN THE PROMISE USE SAME LIKE !!!
// url means put the url of api where we fetch the data ^^^.....


// Postman use to test the API'S .

import { useEffect} from 'react';

function App (){

  const [data, setData] = useState([]);
  useEffect( ()=> {
    fetch ("URL").then((result)=>{

      result.json().then((resp)=>{
      console.warn ("result")
      setData (resp)
      })
    })
  }, [])
  
  return (
    <div className = "App">
      <h1>Get Api Call </h1>
    </div>
  )
}


export default App ;


// Post API ------
/*
fetch ("url", {
Method : 'POST',
header :
{
'Accept' : 'application/json',
'Content- Type' : 'application/json'
},

body :JSON.stringify (data)
}).then((result)=>{
  // console.warn ("result",result)
  result.json ().then((resp)=>{
    console.log("resp",resp)
    })
  })