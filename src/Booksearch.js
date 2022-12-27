// import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import {useHref, useNavigate} from 'react-router-dom'

function Booksearch(props) {
//    let res=props.search.items;
  
   const [state,setState]=useState(false)
   const [val,setVal]=useState('');
   const [searchdata,setsearchdata]=useState({})
   const [click,setClick]=useState(false)
   const handleSearch=()=>{
        setState(true)
      
        if(val!==undefined){
        props.search.items.map((a)=>{
            // console.log(a.volumeInfo.title);
            
            if(a.volumeInfo.title===val){
                setsearchdata(a)
            }
        })
    
        // console.log(searchdata)
    }else{

        alert('book not available')
    }
      
   }
   const handleClick=()=>{
        // console.log( searchdata.volumeInfo.infoLink);
        setClick(true);
   }


    return (
      <div>
          {/* {console.log(props.search.items)} */}
          <div className='container'>
            <div className="header"><h1>BOOK SEARCH</h1></div>
            <div className="section">
                <div className='inputfield'><input type='text'placeholder="search" value={val} onChange={(e)=>setVal(e.target.value)}></input>
                <input type='button' value="search" onClick={handleSearch}></input>
                </div>
            {state &&<div className="book">
                    <div className="bookdisplay" onClick={handleClick}>
                        <div className="row"><div>Title:</div>{searchdata?.volumeInfo.title}</div>
                        <div className="row"><div>Authors</div>{searchdata?.volumeInfo.authors}</div>
                        <div className="row"><div>pageCount:</div>{searchdata?.volumeInfo.pageCount}</div>
                        <div className="row"><div>maturityRating:</div>{searchdata.volumeInfo?.maturityRating}</div>
                        {click && <a href={searchdata?.volumeInfo.infoLink}>more info</a>}
                     </div>
                     
                </div>}
                
            </div>
          </div>
      </div>
    );
  }
  
  export default Booksearch;