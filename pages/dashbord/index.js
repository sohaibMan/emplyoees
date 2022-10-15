
import { useRouter}  from 'next/router';
import React, {useEffect} from 'react'
import Dashbord from '../../components/Dashbord';
;
import {useDispatch, useSelector} from 'react-redux'
import { fetchEmployyes } from '../../store/employeeSlice';
import { fetchJobs } from '../../store/jobsSlice';
import { fetchDepartments } from '../../store/departmentSlice';
function dashbord(props) {
  const dispatch=useDispatch();
  
    const router=useRouter();
    const isLoggedIn =useSelector(state =>state.authentication.isLoggedIn)
   useSelector(state=>console.log(state))
    useEffect(
        ()=>{
          if(!isLoggedIn)router.push("/")
        }
        ,[])
        
        useEffect(
          ()=>{
      isLoggedIn && dispatch(fetchEmployyes())
      isLoggedIn && dispatch(fetchJobs())
      isLoggedIn && dispatch(fetchDepartments())
    }
        ,[isLoggedIn])
  return (
    isLoggedIn && <Dashbord {...props}/>
   
   
  )
}
export async function getServerSideProps(){
  const getCounts=async()=>{
    try{
      const response = await fetch('http://localhost:3000/api/getCount');
  
      if(response.status!==200)throw new Error(response.error);
      const responsejson=await response.json();
      return {employeesCount:responsejson.data.employeesCount,jobsCount:responsejson.data.jobsCount,departmentsCount:responsejson.data.departmentsCount,}
    }
    catch(e){
      console.error(e);
    }
  }
 

    return {
      props:{
  ...(await getCounts())
      },
     
    }
  //will run in the server each reqeust
  }
export default dashbord