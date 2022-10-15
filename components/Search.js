import React, { useRef } from 'react'
import {logout} from "../store/authSlice"
import {useDispatch, useSelector} from 'react-redux'
// import { filter } from '../store/employeeSlice';

function Search(props) {
    const dispatch=useDispatch();
    const searchRef=useRef();
    // const searchRef=useRef();
//     const {employees}=useSelector(state=>state.employees);
//    const  searchFormHanlder=(e)=>{
// e.preventDefault();
//    }
//   const serachChangeHandler=(e)=>{
// dispatch(filter({target:e.target.value,employees}))
//   }
const Submithandler=(e)=>{
  e.preventDefault()
  props.OnSearch(searchRef.current.value)
}
    return (
    
              <form onSubmit={Submithandler} className="d-flex form">
        <div className="group">
            <svg className="icon_s" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
            <input ref={searchRef} onChange={Submithandler} placeholder="Search name" type="search" className="input"/>
        </div>
           <button  type="button" className="btn text-white btn-warning"onClick={()=>dispatch(logout())}>X</button>
    
</form>
   
  )
}

export default Search