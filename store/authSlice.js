import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'authentication',
  initialState: {
      token:'',
      isLoggedIn: true,
  },
  reducers: {
   login:(state,{payload})=>{
    state.isLoggedIn=true;
    state.token=payload.token;
    localStorage.setItem("token",state.token);
    localStorage.setItem("currentLoginTime",new Date());
},
   logout:state=>{state.isLoggedIn=false},
   setToken:(state,{payload})=>state.token=payload.token
  },
})

// Action creators are generated for each case reducer function
export const {login,logout,setToken} = counterSlice.actions

export default counterSlice.reducer