"use strict";
exports.id = 449;
exports.ids = [449];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$W": () => (/* binding */ fetchDepartments),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export counterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "departments",
    initialState: {
        departments: [],
        filtereddepartments: []
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchDepartments.fulfilled, (state, action)=>{
            state.departments = state.filtereddepartments = action.payload;
        });
    // 
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);
const fetchDepartments = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/fetchDepartments/", async ()=>{
    const res = await fetch("http://localhost:3000/api/getDepartments");
    return await res.json();
});


/***/ }),

/***/ 7797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$l": () => (/* binding */ EditEmplooyeDb),
/* harmony export */   "CU": () => (/* binding */ fetchEmployyes),
/* harmony export */   "JS": () => (/* binding */ PushEmplooyeDb),
/* harmony export */   "Od": () => (/* binding */ remove),
/* harmony export */   "Uy": () => (/* binding */ EditEmplooye),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hX": () => (/* binding */ filter),
/* harmony export */   "lu": () => (/* binding */ PushEmplooye),
/* harmony export */   "rx": () => (/* binding */ RemoveUserDb)
/* harmony export */ });
/* unused harmony export counterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "employees",
    initialState: {
        employees: [],
        filteredemployees: []
    },
    reducers: {
        filter: (state, { payload  })=>{
            if (payload.target) state.filteredemployees = payload.employees.filter((el)=>el.name.startsWith(payload.target));
            else state.filteredemployees = state.employees;
        },
        remove: (state, { payload  })=>{
            // console.log(payload);
            state.employees = state.filteredemployees = payload.employees.filter((el)=>el.id !== +payload.id);
        },
        PushEmplooye: (state, { payload  })=>{
            console.log(payload);
            state.employees = state.filteredemployees = [
                ...state.employees,
                payload
            ];
        },
        EditEmplooye: (state, { payload  })=>{
            // console.log(state.employees);
            // state.employees=state.filteredemployees=[...state.employees.filter(el=>el.id!==payload.id)]
            //  state.employees=state.filteredemployees=payload 
            // state.employees.find(el=>el.id===payload.id)= state.employees.find(el=>el.id===payload.id)=payload;
            state.employees[state.employees.findIndex((el)=>el.id === payload.id)] = state.filteredemployees[state.employees.findIndex((el)=>el.id === payload.id)] = payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchEmployyes.fulfilled, (state, action)=>{
            state.employees = state.filteredemployees = action.payload;
        });
    //   builder.addCase(RemoveUserDb.fulfilled,(state,{payload})=>{
    // //  state.employees=payload.employees;
    // // console.log(payload);
    //   })
    }
});
// Action creators are generated for each case reducer function
const { filter , remove , PushEmplooye , EditEmplooye  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);
const fetchEmployyes = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/getData/", async ()=>{
    const res = await fetch("http://localhost:3000/api/getEmployyes");
    return await res.json();
});
const RemoveUserDb = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/RemoveUserDb", async ({ id  })=>{
    const res = await fetch("http://localhost:3000/api/removeUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            token: localStorage.getItem("token")
        })
    });
    // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
    return await res.json();
});
const PushEmplooyeDb = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/PushUserDb", async (Employee)=>{
    // console.log(Employee);
    const res = await fetch("http://localhost:3000/api/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Employee)
    });
    // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
    return await res.json();
});
const EditEmplooyeDb = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/EditEmplooyeDb", async (Employee)=>{
    // console.log(Employee);
    const res = await fetch("http://localhost:3000/api/editUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Employee)
    });
    // we should send here an authentication key and verify it in the backend but i am usining firebase so we can't keep it that simple 
    return await res.json();
});


/***/ }),

/***/ 8748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Di": () => (/* binding */ filterJobsbyname),
/* harmony export */   "Ur": () => (/* binding */ filterJobsForDepartments),
/* harmony export */   "WR": () => (/* binding */ removeJobDb),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bG": () => (/* binding */ fetchJobs),
/* harmony export */   "eX": () => (/* binding */ removeJob),
/* harmony export */   "gw": () => (/* binding */ EditJob)
/* harmony export */ });
/* unused harmony exports counterSlice, EditJobDb */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "jobs",
    initialState: {
        jobs: [],
        filteredjobs: []
    },
    reducers: {
        filterJobsForDepartments: (state, { payload  })=>{
            // console.log(payload.jobs);
            // console.log(payload.target);
            if (payload.target) state.jobsForDepartment = state.jobs.filter((el)=>el.DepratmentName === payload.target);
            else state.filteredjobs = state.jobs;
        },
        filterJobsbyname: (state, { payload  })=>{
            // console.log(payload);
            // state.filteredjobs=state.jobs=state.jobs.filter(el=>el.DepratmentName===payload)
            // state.filteredjobs=state.jobs=state.jobs.filter(el=>el.DepratmentName)
            // console.log(payload.target);
            state.filteredjobs = payload.jobs.filter((el)=>el.name.startsWith(payload.target));
        },
        removeJob: (state, { payload  })=>{
            // console.log(payload);
            state.jobs = state.filteredjobs = payload.jobs.filter((el)=>el.name !== payload.name);
        },
        EditJob: (state, { payload  })=>{
            state.jobs[state.jobs.findIndex((el)=>el.name === payload.name)] = state.filteredjobs[state.jobs.findIndex((el)=>el.name === payload.name)] = payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchJobs.fulfilled, (state, action)=>{
            state.jobs = state.filteredjobs = action.payload;
        });
    //  builder.addCase(removeJobDb.fulfilled,(state,action)=>{
    // state.error.hasError=!!action.payload.error;
    // state.error.message="can't remove the job because it has used by An employee";
    //  console.log(action.payload);
    // }) 
    }
});
const { filterJobsbyname , removeJob , filterJobsForDepartments , EditJob  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);
const fetchJobs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/fetchJobs/", async ()=>{
    const res = await fetch("http://localhost:3000/api/getJobs");
    return await res.json();
});
const removeJobDb = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/removeJobDb", async ({ name  })=>{
    // console.log({name:name,token:localStorage.getItem("token")});
    const res = await fetch("http://localhost:3000/api/removeJobDb", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            token: localStorage.getItem("token")
        })
    });
    return await res.json();
});
const EditJobDb = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("employees/EditJobDb", async (job)=>{
    // console.log(Employee);
    const res = await fetch("http://localhost:3000/api/editJob", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    });
    return await res.json();
});


/***/ })

};
;