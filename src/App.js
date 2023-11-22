import { useState,useEffect } from "react";
import "./CSS/Home.css"
function App()
{
  
  
  const [city,setcity]=useState(null);
  const [search,setsearch] = useState("delhi");
  useEffect(()=>{
    const fetchApi  = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=37941ef580eff211a7045e9c1d28414d)`
      const response = await fetch(url);
      // console.log(response);
      const resjson = response.json();
      console.log(resjson);
      setcity(resjson )
    }
    fetchApi();
  })
  return(
    <>
    <div className="box"></div>
    <input type="text" placeholder="Enter the name" onChange={(event)=>{
      setsearch(event.target.value)
    }}/>
    <button>Check</button>
    <div className="data">
      <h1>{search}</h1>
      <h2>temp</h2>
      <span>min</span>|<span>max</span>
      <h6>humdity</h6>
      <h6>Air pressure</h6>
    </div>
    </>
  )
}
export default App;