import React, { useState } from "react";
import cat from './cat.jpeg'
function Imagemanipulation(){
    const[height,setHeight]=useState(100);
    const[width,setWidth]=useState(100);
    const[rotateImg,setRotate]=useState(0);
    const[bgc,setBGC]=useState(0);

    function enhanceHeight(){
        setHeight(height+30)
    }
    function enhanceWidth(){
        setWidth(width+30)
    }
    function changeBGC(){
        var bg = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        console.log(bg)
        setBGC(bgc)
    }
    function doRotate(){
        setRotate(rotateImg+30)
    }

    return (
        <div style={{border:'2px solid red',height:"300px" , width:"420px",marginLeft:"550px", backgroundColor:'#9694FF'}}>
    <div style={{marginLeft:"100px", backgroundColor:{bgc}, height:"200px", width:"200px", border:"1px solid black",marginTop:"40px"}}>
      <img src={cat} style={{transform:`rotate(${rotateImg}deg)`}} height={height} width={width}  alt="cat image" />
    </div>
        <div style={{marginTop:'100px'}}>
            <button id="btn" onClick={enhanceHeight}>Enhance Height</button>
            <button id="btn" onClick={enhanceWidth}>Enhance width</button>
            <button id="btn" onClick={doRotate}>Rotate</button>
            <button id="btn" onClick={changeBGC}>Change Background</button>
        </div>
        </div>

    )
}
export default Imagemanipulation