/*


function Student(props){
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.email}</h2>
        </div>
    )
}

export default Student; 




// data pases from child to parent component ------

function Student (props){

const data = "rajat"
    return (
        <div>
            <h1>User Name :</h1>
            <button onClick = {()=>props.alert(data)}>Click Me</button>
        </div>
    )
}




// For Props pure Component  -------



import React, {PureComponent} from 'react'

class Student extends React.Component
{
  
  render ()
  {
   

    return (
      <div>
        <h1>Pure Components in React {this.props.count} </h1>
        
      </div>

    );
  }
}

export default Student;

// useMemo we can use to save from unwanted calls :)-------


*/

