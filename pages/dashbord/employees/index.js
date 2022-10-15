import { useRouter } from 'next/router.js';
import React, { useContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import  { EditFormSubmitHandler,deleteHanlder } from '../../../Data/E/mployeeData';
// import EmployeeContextProvider from '../../../.next/contex/Employee-Context';
import AddEmploye from '../../../components/AddElment.js'
import Item from '../../../components/Item'
import Menu from '../../../components/Menu';
import Nav from '../../../components/Nav'
import Search from '../../../components/Search';
import { fetchDepartments } from '../../../store/departmentSlice.js';
import { EditEmplooye, EditEmplooyeDb, fetchEmployyes,filter,PushEmplooye,PushEmplooyeDb, remove, RemoveUserDb} from '../../../store/employeeSlice';
import { fetchJobs } from '../../../store/jobsSlice';

function employyes() {
  const {filteredemployees:employeesArr}=useSelector(state=>state.employees);
  const {isLoggedIn}=useSelector(state=>state.authentication);
  // console.log("🚀 ~ file: index.js ~ line 18 ~ employyes ~ isLoggedIn", isLoggedIn)
  const {filtereddepartments:departments}=useSelector(state=>state.departments);
  const {filteredjobs:Jobs}=useSelector(state=>state.jobs)
  const router=useRouter()
  const dispatch=useDispatch();
  useEffect(
    ()=>{
      if(!isLoggedIn)router.push("/")
      // console.log('fetching');
      isLoggedIn && employeesArr.length===0  && dispatch(fetchEmployyes())
      isLoggedIn && Jobs.length===0 && dispatch(fetchJobs())
      isLoggedIn && departments.length===0 && dispatch(fetchDepartments())
    }
    ,[])


  const EmployeesTableHead=(el)=>{
    return (
    <>
      <th scope="row">{el.id}</th>
        <td>{el.name}</td>
        <td>{el.email}</td>
    </>
    
    )
  }
  const idRef = useRef();
const nameRef = useRef();
const joiningDateRef = useRef();
const emailRef = useRef();
const birthdayRef = useRef();
const phoneRef = useRef();
const salaryRef = useRef();
const depratmentNameRef=useRef()
const jobNameRef=useRef()

// const dispatch=useDispatch()

 const deleteHanlder = (e) => {
    const response = confirm(
      `Do you wanna really remove ${e.target.dataset.name} who has the id :${e.target.dataset.id}`
    );
    if (response) {
      dispatch(remove({ id: e.target.dataset.id, employees }));
      dispatch(RemoveUserDb({ id: e.target.dataset.id }));
    }
  };
  // const emp=useContext(EmployeeContext)
  // console.log("🚀 ~ file: index.js ~ line 15 ~ employyes ~ emp", emp)

// console.log(filtereddepartments);
// const departments=[];
// console.log(useSelector(state=>state))

// console.log("🚀 ~ file: index.js ~ line 11 ~ employyes ~ employeesArr", employeesArr)
// const departments=[]
// console.log("🚀 ~ file: index.js ~ line 12 ~ employyes ~ isLoggedIn", isLoggedIn)
  // const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);
  // const deleteHanlder = (e) => {
  //   const response = confirm(
  //     `Do you wanna really remove ${e.target.dataset.name} who has the id :${e.target.dataset.id}`
  //   );

  //   if (response) {
  //     dispatch(remove({ id: e.target.dataset.id, employees }));
  //     dispatch(RemoveUserDb({ id: e.target.dataset.id }));
  //   }
  // };

  //  const DateRef=useRef()
  //  const EmailRef=useRef()

// const PhoneRef=useRef()
// const NameRef=useRef()
// const salaryRef=useRef()

  // const depratmentNameRef = useRef();
  // const jobNameRef = useRef();

  const EditFormSubmitHandler = (el) => {
    const Employee = {
      birthday: birthdayRef.current.value || el.birthday,
      depratmentName: depratmentNameRef.current.value || el.depratmentName,
      email: emailRef.current.value || el.email,
      id: idRef.current.value || el.id,
      jobName: jobNameRef.current.value || el.jobName,
      joiningDate: joiningDateRef.current.value || el. joiningDate,
      name: nameRef.current.value || el.name,
      phone: phoneRef.current.value || el.phone,
      salary: salaryRef.current.value || el.salary,
    };
    dispatch(EditEmplooye(Employee))
    dispatch(EditEmplooyeDb({Employee}))
//  console.log(Employee)
  };
//   useEffect(
//   ()=>{

  
// }
//     ,[isLoggedIn])



    const employeForm=[
      {type:'date',name:'birthday',placeholder:''},
      {type:'text',name:'name',placeholder:'Employee name'},
      {type:'email',name:'email',placeholder:'Employee Email'},
      {type:'number',name:'phone',placeholder:'Employee Phone number'},
      {type:'number',name:'salary',placeholder:'Employee salary '},
    ]
//     const EditFormStructure=
// {
// 'id':{type:'text'},
// 'name':{type:'text'},
// 'joiningDate':{type:'date'},
// 'email':{type:'email'},
// 'birthday':{type:'date'},
// 'phone':{type:'number'},
// 'salary':{type:'number'},
// // 'jobName':{type:'text'},
// // 'depratmentName':{type:'text'},
// }



const refrences={idRef,nameRef,depratmentNameRef,jobNameRef,joiningDateRef,emailRef,birthdayRef,phoneRef,salaryRef}
    const SubmitAddFormHandler=()=>{
     
      // console.log(jobNameRef.current.value)
  const Employee={
      joiningDate:`${(new Date()).getFullYear()}-${(new Date()).getMonth()}-${(new Date()).getDate()}`,
      jobName:jobNameRef.current.value,
      salary:salaryRef.current.value,
      depratmentName:depratmentNameRef.current.value,
      birthday:birthdayRef.current.value,
      name:nameRef.current.value,
      email:emailRef.current.value,
      phone:phoneRef.current.value,
    }
  // console.log(Employee);
  dispatch(PushEmplooye(Employee))
      dispatch(PushEmplooyeDb({Employee}))
  }
  const EditFormStructure = {
    id: { type: "text", ref: idRef },
    name: { type: "text", ref: nameRef },
    joiningDate: { type: "date", ref: joiningDateRef },
    email: { type: "email", ref: emailRef },
    birthday: { type: "date", ref: birthdayRef },
    phone: { type: "number", ref: phoneRef },
    salary: { type: "number", ref: salaryRef },
  };

  const employeeData={
    deleteHanlder,onSubmit:EditFormSubmitHandler,onAdd:SubmitAddFormHandler,refrences,departments
  }
  
     {/* const {employees}=useSelector(state=>state.employees); */}
//     const  searchFormHanlder=(e)=>{
// e.preventDefault();
//     }
   const OnSearchSubmitHander=(searchWord)=>{
dispatch(filter({target:searchWord,employees}))
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

                  </li>
                  <li className="list-group-item text-primary">
                  <a className="text-primary" data-bs-toggle="modal" data-bs-target="#add">
                  All Employees
                  </a>
                  </li>
                  </ul>
                </div> */}

          <Menu>

                <AddEmploye {...employeeData}  Jobs={Jobs} depratmentNameRef={depratmentNameRef} jobNameRef={jobNameRef} AddTemplate={employeForm}/>
          </Menu>
          <div className="col-9  p-0">
              <table className="table  table-striped r m-0">
                  <thead className="bg-primary ">
                    <tr className="text-white">
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">EMAIL ID</th>
                      <th scope="col">Details</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                 
                  <tbody>                                       
                 {
                      employeesArr.map((el,i)=><Item {...employeeData} EditFormStructure={EditFormStructure} key={i} el={el}>

                        <EmployeesTableHead {...el}/>
                      </Item>)  
                      
                 }
                
                  </tbody>
             
             
            </table>

      </div>
      
    </div>
  </div>

 </>
  )
}

export default employyes