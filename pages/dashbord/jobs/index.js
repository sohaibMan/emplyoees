import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddEmploye from '../../../components/AddElment'
import AddJob from '../../../components/AddJobl';
import Item from '../../../components/Item'
import Menu from '../../../components/Menu';
import Nav from '../../../components/Nav'
import Search from '../../../components/Search';
import { fetchDepartments } from '../../../store/departmentSlice';
import { fetchEmployyes,PushEmplooye,PushEmplooyeDb} from '../../../store/employeeSlice';
import { EditJob, fetchJobs, filterJobsbyname, removeJob, removeJobDb } from '../../../store/jobsSlice';

function Jobs() {
  const {filteredjobs:jobs}=useSelector(state=>state.jobs);
  const {jobs:intialjobs}=useSelector(state=>state.jobs);
  const {isLoggedIn}=useSelector(state=>state.authentication);
  const {filtereddepartments}=useSelector(state=>state.departments)
  const {employees}=useSelector(state=>state.employees)
const usedJob=employees.map(el=>el.jobName)
  // console.log("🚀 ~ file: index.js ~ line 21 ~ Jobs ~ usedJob", usedJob)
  // const {error}=useSelector(state=>state.jobs)
  // console.log(error);
  
  // console.log("🚀 ~ file: index.js ~ line 16 ~ Jobs ~ intialjobs", intialjobs)
  useEffect(
    ()=>{
      if(!isLoggedIn)router.push("/")
      // console.log('fetching');
      isLoggedIn && jobs.length===0 && dispatch(fetchJobs())
      isLoggedIn &&   filtereddepartments.length===0 && dispatch(fetchDepartments())
      isLoggedIn &&   employees.length===0 && dispatch(fetchEmployyes())
    }
    ,[])
  const deleteHanlder =(e) => {
    const response = confirm(
      `Do you wanna really remove ${e.target.dataset.name} who has the id :${e.target.dataset.id || e.target.dataset.name}`
    );
    // console.log(usedJob.includes('e.target.dataset.name'));
    if (response && !usedJob.includes(e.target.dataset.name) ) {
     

        dispatch(removeJobDb({  name: e.target.dataset.name}));
        dispatch(removeJob({ name: e.target.dataset.name, jobs }));
      
   
      
    }
    else alert ("cannot delete a used job(in employees)")
  };
  const JobsTableHead=(el)=>{
    return (
      <>
      <th scope="row">{el.name}</th>
        <td>{el.description}</td>
        <td>{el.DepratmentName}</td>
    </>
    
    )
  }
  const router=useRouter();
  // console.log("🚀 ~ file: index.js ~ line 12 ~ Jobs ~ filteredjobs", Jobs)
  const dispatch=useDispatch();

const EditFormStructure=
{
    // 'id':{type:'text'},
// 'name':{type:'text'},
// 'DepratmentName':{type:'text'},
'description':{type:'text'},
// 'birthday':{type:'date'},
// 'phone':{type:'number'},
// 'salary':{type:'number'},
// 'jobName':{type:'text'},
// 'depratmentName':{type:'text'},
}
const jobNameRef= useRef();
// const DepratmentNameRef=useRef()
const descriptionRef=useRef()

// console.log("🚀 ~ file: index.js ~ line 11 ~ employyes ~ filteredemployees", filteredemployees)
// console.log("🚀 ~ file: index.js ~ line 12 ~ employyes ~ isLoggedIn", isLoggedIn)
// const DateRef=useRef()
// const NameRef=useRef()
// const EmailRef=useRef()
// const PhoneRef=useRef()
// const salaryRef=useRef()
const depratmentNameRef=useRef()


/*



const {filteredjobs:Jobs}=useSelector(state=>state.jobs)


*/
// const employeForm=[
//   {type:'date',name:'date',placeholder:'',ref:DateRef},
//   {type:'text',name:'name',placeholder:'Employee name',ref:NameRef},
//   {type:'email',name:'email',placeholder:'Employee Email',ref:EmailRef},
//   {type:'number',name:'phone',placeholder:'Employee Phone number',ref:PhoneRef},
//   {type:'number',name:'salary',placeholder:'Employee salary ',ref:salaryRef},
// ]
    // const SubmitFormHandler=()=>{
     
      // console.log(jobNameRef.current.value)
      //   const Employee={
    //       joiningDate:`${(new Date()).getFullYear()}-${(new Date()).getMonth()}-${(new Date()).getDate()}`,
    //   jobName:jobNameRef.current.value,
    //   salary:salaryRef.current.value,
    //   depratmentName:depratmentNameRef.current.value,
    //   birthday:DateRef.current.value,
    //   name:NameRef.current.value,
    //   email:EmailRef.current.value,
    //   phone:PhoneRef.current.value,
    // }
    // console.log(User);
    // dispatch(PushEmplooye(Employee))
    // dispatch(PushEmplooyeDb({Employee}))
  // }
  // ;}
  // birthday: birthdayRef.current.value || el.birthday,
  // depratmentName: depratmentNameRef.current.value || el.depratmentName,
  // email: emailRef.current.value || el.email,
  // id: idRef.current.value || el.id,
  // joiningDate: joiningDateRef.current.value || el. joiningDate,
  // phone: phoneRef.current.value || el.phone,
  // salary: salaryRef.current.value || el.salary,
  
  const nameRef=useRef();
  const editSubmitHandler=(el)=>{
    // jobName: jobNameRef.current.value || el.jobName,
    const updatedJobs={
      name: jobNameRef.current?.value || el.name,
  DepratmentName:depratmentNameRef.current.value || el.name,
  description:descriptionRef.current.value || el.description,
}

// console.log(updatedJobs);
dispatch(EditJob(updatedJobs))
// dispatch(PushEmplooyeDb({updatedJobs}))
// console.log(updatedJobs.name===el.name && updatedJobs.DepratmentName===el.name)
  }
  const refrences={jobNameRef,depratmentNameRef,descriptionRef}
  const JobsData={
    refrences,deleteHanlder,departments:filtereddepartments,onSubmit:editSubmitHandler
  }

  const OnSearchSubmitHander=(searchWord)=>{
    // console.log(searchWord);
    dispatch(filterJobsbyname({target:searchWord,jobs:intialjobs}))
  }
  return (
 <>
<Nav >
<Search OnSearch={OnSearchSubmitHander}/>
</Nav>

<div className="container pt-5">     
      <div className="row  ">
          {/* <div className="col-3 ">
              <ul className="list-group ">
                  <li className="list-group-item  active" aria-current="true">Employees Data</li>
                  <li className="list-group-item text-primary">

       {/* <AddEmploye onSubmit={SubmitFormHandler} Jobs={Jobs} depratmentNameRef={depratmentNameRef} jobNameRef={jobNameRef} AddTemplate={employeForm}/> 
       <AddJob> AddTemplate</AddJob>
                  </li>
                  <li className="list-group-item text-primary">
                  <a className="text-primary" data-bs-toggle="modal" data-bs-target="#add">
  All Jobs
</a>
                  </li>
                </ul>
          </div> */}
        
<Menu>
    <AddJob></AddJob>
</Menu>
          
          <div className="col-9  p-0">
              <table className="table  table-striped r m-0">
                  <thead className="bg-primary ">
                    <tr className="text-white">
                      <th scope="col">Job NAME</th>
                      <th scope="col">Description</th>
                      <th scope="col">departments Name</th>
                      <th scope="col">Details</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                 
                  <tbody>                                       
                 {
                      jobs.map((el,i)=><Item {...JobsData} EditFormStructure={EditFormStructure} key={i} el={el}>

                  <JobsTableHead {...el}/> 
                      </Item>)  
                      
                 }
                
                  </tbody>
             
             
            </table>

      </div>
      
    </div>
    </div>
    
    </>
    )
// return  <div>test</div>
}
export default Jobs