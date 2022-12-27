import Booksearch from "./Booksearch";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [data,setdata]=useState();
    useEffect(()=>{
        fetch('https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle')
        .then((response)=>(response.json()))
        .then((res)=>setdata(res))
    },[])
  return (
    <div className="App">
      <Booksearch  search={data}/>
        
    </div>
  );
}

export default App;
