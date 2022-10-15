import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterJobsForDepartments } from '../store/jobsSlice';

  // useEffect(
    
function CustomSelect(props) {
    const dispatch=useDispatch()
let {jobsForDepartment:filteredjobs}=useSelector(state=>state.jobs);
// useSelector(state=>console.log(state))
    const SelctChangeHandler=(e)=>{
        if(e.target.value===e.target[0].innerText)setIsSelcted(false)
        else  {
          setIsSelcted(true)
          dispatch(filterJobsForDepartments({target:e.target.value}))
        }
      
      }
      const [isSelcted,setIsSelcted]=useState(false);
  return (
    <>
    <div className="mb-3">
    <label htmlFor='depratmentName' className='mb-1'>Depratment</label>
    <select required={props.required}  id="depratmentName" onChange={SelctChangeHandler} ref={props.refrences['depratmentNameRef']} className="form-select">
      <option value="" defaultValue>Choose a department</option>
          {
            props.departments.map((el,i)=><option required key={i} value={el.id}>{el.name}</option>)
          }
   </select>
   </div>
{
  
  <div className="mb-3">
      <label htmlFor='jobName' className='mb-1'>Jobs</label>
  <select required={props.required} id='jobName' ref={props.refrences['jobNameRef']} className="form-select" aria-label="Default select example">
   <option  value="" defaultValue>Choose a Job</option>
 {isSelcted &&  filteredjobs.map((el,i)=><option key={i} value={el.name}>{el.name}</option>)}
   </select>
  </div>
} 

    </>
  )
}

export default CustomSelect