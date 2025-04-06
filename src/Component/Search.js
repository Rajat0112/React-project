import { useSearchParams } from "react-router-dom"

function Search()
{
    const [ searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))

    const age = searchParams.get('age');
    const city = searchParams.get('city');

    return(
        <div>
      <h1>Search Param </h1>
      <h3> age is : {age}</h3>
      <h3> city is : {city}</h3>

      <button>Set age in query Params </button>

      </div>
    )
}

export default Search;