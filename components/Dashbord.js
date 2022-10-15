import Link from 'next/link';
import React from 'react'
// import { AuthContext } from '../src/store/auth-context'
import Nav from './Nav'

function Dashbord(props) {
// const ctx=useContext(AuthContext);
  return (
    <>
 <Nav/>

    <section className="page-contain">
      
  
        <Link href="/dashbord/jobs" >
        <div className="data-card">
          <h3>{props.jobsCount}</h3>
          <h4>Jobs</h4>
          <p>We have cover the most popluare jobs.</p>
          <span className="link-text">
            View All Providers
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
      </svg>
          </span>
          </div>
        </Link>
        <Link href="/dashbord/employees">
          <div className="data-card">
          <h3>{props.employeesCount}</h3>
          <h4>Employees</h4>
          <p>What are waiting for .Became one of Us</p>
          <span className="link-text">
            View Information
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
      </svg>
          </span>
          </div>
        </Link>     
         <Link href="/dashbord/depratments">
          <div className="data-card">
          <h3>{props.departmentsCount}</h3>
          <h4>Depratments</h4>
          <p>What are waiting for .Became one of Us</p>
          <span className="link-text">
            View Information
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
      </svg>
          </span>
          </div>
        </Link>
        
      </section>

    </>
  )
}

  // const {employeesCount,jobsCount}=
export default Dashbord