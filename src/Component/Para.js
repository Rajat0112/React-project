import { useParams } from "react-router-dom";


function Para(){
const params = useParams();
const {name} = params

console.warn (name)

    return(
        <div>
            <h1> This is {name}'s Page  </h1>
            
        </div>
    );
}

export default Para;