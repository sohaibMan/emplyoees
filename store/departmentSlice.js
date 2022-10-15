import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'departments',
  initialState: {
    departments:[],
    filtereddepartments:[], 
  },
  reducers: {

 
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchDepartments.fulfilled,(state,action)=>{
    state.departments=state.filtereddepartments=action.payload;
    }) 
// 
  }

})

export default counterSlice.reducer
export const fetchDepartments=createAsyncThunk('employees/fetchDepartments/',async ()=>{
  const res = await fetch("http://localhost:3000/api/getDepartments");
  return await res.json();

 }
)
