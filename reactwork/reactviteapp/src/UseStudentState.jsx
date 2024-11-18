import React,{useState} from "react";

function UseStudentState(){
    const[count,setCount]=useState(20);
    function doIncrement(){
        console.log("Do Increment");
        setCount(count+10);
    }
    function doDecrement(){
        console.log("Do Decrement");
        setCount(count-5);
    }
    return(
        <>
        <div style={{color:'red', border:'2px solid red', width:'400px',height:'400px',marginLeft:'500px',backgroundColor:'rgb(120,200,180)',fontSize:'100px'}}>{count}
        
        <div>
        <button id="btn" onClick={doIncrement} style={{backgroundColor:'#F34CCD',marginTop:'50px'}}>Increment Counter</button>
        <button id="btn" onClick={doDecrement} style={{backgroundColor:'#F34CCD',marginTop:'50px'}}>Decrement Counter</button>
        </div>
        </div>
        </>
    )
}
export default UseStudentState