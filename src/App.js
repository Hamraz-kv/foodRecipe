import './App.css';
import Axios from "axios"
import { useState } from "react";
import RecipeTitle from "./COMPONENTS/RecipeTitle"
function App() {
  const [query,setquery]=useState("");
  const [recipies, setrecipies] = useState([]);
  const [prefer, setprefer] = useState("");
  const YOUR_APP_ID="25901f66"
  const YOUR_APP_KEY="cb50e616cf5d7b946efa322238881b7c"
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=
  ${YOUR_APP_KEY}&health=${prefer}`
  async function GetRecipie(e){
    e.preventDefault();
    console.log(prefer,query)
    var result;
    if(query&&prefer)
    {
    result=await Axios.get(url)
    console.log(result.data)
    setrecipies(result.data.hits)
    }
    else{
      alert("Item is empty!!")
    }
  }
  // const getrecipie=(e)=>{
  //   const rc=e.target.elements.rpename.value
  //   e.preventDefault();
  //   console.log(rc)
  // }
  return <div className="App">
    
     
       <h1 >FooD RecipiE</h1>
      
    <form onSubmit={GetRecipie}className='FOO'>
        <input className="FOO" type="text" name="rpename" placeholder="Enter ingridient"
         value={query} onChange={(e)=>setquery(e.target.value)}/>
       <button className='submit_'>search</button>
       <select className='prefer_' onChange={(e)=>{
         setprefer(e.target.value)
       }
      }>
         <option value="vegan" >vegan</option>
         <option value="diary-free" >diary-free</option>
         <option value="fish-free" >fish-free</option>
         <option value="egg-free" >egg-free</option>
       </select>
    </form>     
    
    <div className='app__reci'>
      
      {recipies.map((x)=>{
       return  <RecipeTitle x={x}/>
      })}

    </div>
    </div>
    
 
}

export default App;
