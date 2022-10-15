import React from 'react'
import Link from 'next/link'

function Nav(props) {
   
  return (
    <nav className="navbar navbar-light   sticky-top">
    <div className="container-fluid ">
        <div className="navbar-right">
    <Link className="navbar-brand"  href="/dashbord" >My Dashbord</Link>
      <Link className="text-white"  href="/dashbord/employees" >Employees</Link>
      <Link className="text-white"   href="/dashbord/jobs" >Jobs</Link>
       </div>
 {props.children}
    </div>
  </nav>
  )
}

export default Nav