import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'employees',
  initialState: {
      employees:[],
      filteredemployees:[], 
  },
  reducers: {
    filter:(state,{payload})=>{
    if(payload.target)state.filteredemployees=payload.employees.filter(el=>el.name.startsWith(payload.target))
    else state.filteredemployees=state.employees;
    } ,
    remove:(state,{payload})=>{
      // console.log(payload);
state.employees=state.filteredemployees=payload.employees.filter(el=>el.id!==+payload.id)
    },
    PushEmplooye:(state,{payload})=>{
 console.log(payload);
     state.employees=state.filteredemployees=[...state.employees,payload] 
    } ,
     EditEmplooye:(state,{payload})=>{
      // console.log(state.employees);
      // state.employees=state.filteredemployees=[...state.employees.filter(el=>el.id!==payload.id)]
    //  state.employees=state.filteredemployees=payload 
    // state.employees.find(el=>el.id===payload.id)= state.employees.find(el=>el.id===payload.id)=payload;
    state.employees[state.employees.findIndex(el=>el.id===payload.id)]=state.filteredemployees[state.employees.findIndex(el=>el.id===payload.id)]=payload;
    }
 
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchEmployyes.fulfilled,(state,action)=>{
    state.employees=state.filteredemployees=action.payload;
    }) 
  //   builder.addCase(RemoveUserDb.fulfilled,(state,{payload})=>{
  // //  state.employees=payload.employees;

  // // console.log(payload);
 
  //   })
   
  }

})
// Action creators are generated for each case reducer function
export const {filter,remove,PushEmplooye,EditEmplooye} = counterSlice.actions
export default counterSlice.reducer
export const fetchEmployyes=createAsyncThunk('employees/getData/',async ()=>{
  const res = await fetch("http://localhost:3000/api/getEmployyes");
  return await res.json();

 }
)
export const RemoveUserDb=createAsyncThunk('employees/RemoveUserDb',async ({id})=>{
  const res = await fetch("http://localhost:3000/api/removeUser",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json" ,
    }
    ,body:JSON.stringify({id:id,token:localStorage.getItem("token")})    
  }
  )

  // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
  return await res.json();
 }
)
export const PushEmplooyeDb=createAsyncThunk('employees/PushUserDb',async (Employee)=>{
// console.log(Employee);
  const res = await fetch("http://localhost:3000/api/addUser",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json" ,
    }
    ,body:JSON.stringify(Employee)    
  }
  )

  // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
  return await res.json();
 }
)
export const EditEmplooyeDb=createAsyncThunk('employees/EditEmplooyeDb',async (Employee)=>{
// console.log(Employee);
  const res = await fetch("http://localhost:3000/api/editUser",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json" ,
    }
    ,body:JSON.stringify(Employee)    
  }
  )

  // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
  return await res.json();
 }
)

