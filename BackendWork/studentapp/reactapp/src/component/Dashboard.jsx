import React from 'react'
import {Link,Outlet} from 'react-router-dom'


export default function Dashboard() {
  return (
    <>
        <div style={{bsckground:'brown', color:'white', fontSize:'30px'}}>Dashboard</div>
        <nav>
            <ul>
                <li><Link to ='/login'>Login</Link></li>
                <li><Link to ='/register'>Registration</Link></li>
            </ul>
        </nav>
    </>
  )
}
