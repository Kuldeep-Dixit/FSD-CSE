import React, { useState } from 'react'
import Student from './Student';
// import UseStudentState from './UseStudentState';
import Imagemanipulation from './Imagemanipulation';
import MyUseEffect from './MyUseEffect';
import UseFetchAPI from './UseFetchAPI';
import Login from './Login';
import Registration from './Registration';
function App()
{
  const[rdata,setrdata]=useState();
  const h1=<h1>hello world</h1>;
  const mystyle={
    color:'red',
    backgroundColor:'white'
  }
  const studentdata=[{
    college:"ABES engineering college",
    name:"Harshit luanda",
    branch:"cs m",
    roll:"200",
    section:"A"
    
  },{
    college:"gl engineering college",
    name:"Harshit jindabad",
    branch:"cs c",
    roll:"2",
    section:"B"
  },{
    college:"Akg engineering college",
    name:"Harshit bro",
    branch:"cs b",
    roll:"234777",
    section:"b"
  }

  
]
  return (
    
    
    <div >
      <div>{JSON.stringify(rdata)}</div>
      <h2>REGISTRATION FORM</h2>
    {/* <div><UseStudentState /></div> */}
    {/* <Imagemanipulation></Imagemanipulation> */}
    {/* <MyUseEffect /> */}
    {/* <UseFetchAPI /> */}
    {/* <Login />} */}
    

    {<Registration regData={setrdata}/>}
    <div>
      <h2>LOGIN FORM</h2>
      <Login regdata={rdata}/>
    </div>
    </div>
    

    // <div style={{backgroundColor:'blueviolet'}}>
    //   {h1}
    //   <div style={mystyle}> 
    //     ABES Engineering college
    //   </div>
    //   <div style={{display:"flex"}}>
    //     {
    //       studentdata.map(
    //         (ele)=>{
    //          return <Student data ={ele}/>
    //         }
    //       )
    //     }
    //     {/* <Student college="ABES ENGINEERING COLLEGE"
    //     name="harshit"
    //     branch="cse"
    //     Roll="12"
    //     section="a" 
    //     pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100}/>}
    //    />

    //     <Student college="ABES ENGINEERING COLLEGE"
    //     name="sharma"
    //     branch="cse"
    //     Roll="13"
    //     section="b" />
    //      <Student college="ABES ENGINEERING COLLEGE"
    //     name="sharma"
    //     branch="cse"
    //     Roll="13"
    //     section="a" />*/}

    //   </div> 

    // </div>
  )
}
export default App