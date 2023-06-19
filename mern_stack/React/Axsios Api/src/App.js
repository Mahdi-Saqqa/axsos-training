import React,{useState,useEffect} from "react";
import Button from "./Components/Button";
import Pokimons from "./Components/Pokimons";
function App() {
  const [responseData, setResponseData] = useState([]);

  const addData = (data)=>{
    setResponseData([data])
  }
  return (
    <div className="App">
        <Button addData={addData}/>
        <Pokimons responseData={responseData}/>
    </div>
  );
}

export default App;