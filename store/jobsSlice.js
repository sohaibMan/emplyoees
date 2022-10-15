import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'jobs',
  initialState: {
      jobs:[],
      filteredjobs:[], 
      // jobsForDepartment:[],
      // error:{
      //   hasError:false,
      //   message:''
      // }
  },
  reducers: {
    filterJobsForDepartments:(state,{payload})=>{
      // console.log(payload.jobs);
      // console.log(payload.target);
      if(payload.target)state.jobsForDepartment=state.jobs.filter(el=>el.DepratmentName===payload.target)
      else state.filteredjobs=state.jobs;

    },
    filterJobsbyname:(state,{payload})=>{
      // console.log(payload);
      // state.filteredjobs=state.jobs=state.jobs.filter(el=>el.DepratmentName===payload)
      // state.filteredjobs=state.jobs=state.jobs.filter(el=>el.DepratmentName)
      // console.log(payload.target);
      state.filteredjobs=payload.jobs.filter(el=>el.name.startsWith(payload.target))
    },
    removeJob:(state,{payload})=>{
      // console.log(payload);
state.jobs=state.filteredjobs=payload.jobs.filter(el=>el.name!==payload.name)

    },
    EditJob:(state,{payload})=>{
      state.jobs[state.jobs.findIndex(el=>el.name===payload.name)]=state.filteredjobs[state.jobs.findIndex(el=>el.name===payload.name)]=payload;


    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchJobs.fulfilled,(state,action)=>{
    state.jobs=state.filteredjobs=action.payload;
    }) 
//  builder.addCase(removeJobDb.fulfilled,(state,action)=>{
    // state.error.hasError=!!action.payload.error;
    // state.error.message="can't remove the job because it has used by An employee";
//  console.log(action.payload);
    // }) 

  }

})
export const {filterJobsbyname,removeJob,filterJobsForDepartments,EditJob}=counterSlice.actions
export default counterSlice.reducer
export const fetchJobs=createAsyncThunk('employees/fetchJobs/',async ()=>{
  const res = await fetch("http://localhost:3000/api/getJobs");
  return await res.json();

 }

)
export const removeJobDb=createAsyncThunk('employees/removeJobDb',async ({name})=>{
// console.log({name:name,token:localStorage.getItem("token")});
  const res = await fetch("http://localhost:3000/api/removeJobDb",
   {
    method:"POST",
     headers:{
         "Content-Type":"application/json" ,
       }
     ,body:JSON.stringify({name:name,token:localStorage.getItem("token")})    
    
  
   }
   );
   return await res.json();
  }
  )
  export const EditJobDb=createAsyncThunk('employees/EditJobDb',async (job)=>{
    // console.log(Employee);
      const res = await fetch("http://localhost:3000/api/editJob",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json" ,
        }
        ,body:JSON.stringify(job)    
      }
      )
  
  return await res.json();
    }
  )