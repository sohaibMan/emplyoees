import Link from 'next/link'
import React from 'react'

function Menu(props) {
  return (
     <div className="col-3 ">
    <ul className="list-group ">
        <li className="list-group-item  active" aria-current="true">Employees Data</li>
        <li className="list-group-item text-primary">
{props.children}
        </li>
        <li className="list-group-item text-primary">
        <Link href="employees" className="text-primary">
      <p>All Employees</p> 
        </Link> 
        <Link href="depratments" className="text-primary">
      <p>All Departments</p> 
        </Link>
        <Link href="jobs" className="text-primary">
      <p>All Jobs</p> 
        </Link>
        </li>
      </ul>
</div>
  )
}

export default Menu