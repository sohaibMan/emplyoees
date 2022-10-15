import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import employeeSlice from "./employeeSlice";
import jobsSlice from "./jobsSlice";
import departmentSlice from "./departmentSlice";
// const [jobs,setjobs]=useState([]);
// useState(
// async()=>{
// try{

// setemployees(data);
// response=await fetch("http://localhost:3000/api/getJobs");
// data=await response.json();
// setjobs(data);
// }
// catch(e){
// console.error(e);
// }   
// }
//   ,[])

  const store=configureStore(
    {
        reducer:{
            authentication:authSlice,  
            employees:employeeSlice,
            jobs:jobsSlice,
            departments:departmentSlice,
        }
    }
  )

    export default store;