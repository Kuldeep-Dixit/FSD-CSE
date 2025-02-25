import React, { useEffect, useState } from 'react'

function Dashboard() {
const[data,setData]=useState([]);
function getonlineData(){
    const onlinedata=fetch("https://dummyjson.com/recipes");
    onlinedata.then((response)=>{
      response.json().then((res)=>{
            console.log(res.recipes)
            setData(res.recipes);
      })
    })
}

//useEffect(getonlineData(),[]);
getonlineData();


  return (
    <div>
        Dashboard
        {/* <div>{JSON.stringify(data)}</div> */}
        {
       data.map((ele)=>{
         return(
            <div style={{border:'2px solid black'}}>
                <div><img src={ele.image} height={150} width={150} /></div>
                <div>{ele.name}</div>
            </div>
            
         )

       })

        }
        
        </div>
  )
}

export default Dashboard