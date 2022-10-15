"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/store/auth-context.js


const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)({
    token: "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});
const AuthContextProvider = (props)=>{
    const { 0: token , 1: setToken  } = (0,external_react_.useState)(null);
    const isLoggedIn = !!token;
    const loginHandler = (token)=>{
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("currentLoginTime", new Date().getTime());
    };
    const logoutHandler = ()=>{
        setToken(null);
        localStorage.removeItem("token");
    };
    const ContextValue = {
        token,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: ContextValue,
        children: props.children
    });
};
/* harmony default export */ const auth_context = (AuthContextProvider);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/authSlice.js
var authSlice = __webpack_require__(8090);
// EXTERNAL MODULE: ./store/employeeSlice.js
var employeeSlice = __webpack_require__(7797);
// EXTERNAL MODULE: ./store/jobsSlice.js
var jobsSlice = __webpack_require__(8748);
// EXTERNAL MODULE: ./store/departmentSlice.js
var departmentSlice = __webpack_require__(9008);
;// CONCATENATED MODULE: ./store/store.js





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
const store = (0,toolkit_.configureStore)({
    reducer: {
        authentication: authSlice/* default */.ZP,
        employees: employeeSlice/* default */.ZP,
        jobs: jobsSlice/* default */.ZP,
        departments: departmentSlice/* default */.ZP
    }
});
/* harmony default export */ const store_store = (store);

;// CONCATENATED MODULE: ./pages/_app.js





// import bootstrap from 'bootstrap'
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(auth_context, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store_store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports counterSlice, setToken */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "authentication",
    initialState: {
        token: "",
        isLoggedIn: true
    },
    reducers: {
        login: (state, { payload  })=>{
            state.isLoggedIn = true;
            state.token = payload.token;
            localStorage.setItem("token", state.token);
            localStorage.setItem("currentLoginTime", new Date());
        },
        logout: (state)=>{
            state.isLoggedIn = false;
        },
        setToken: (state, { payload  })=>state.token = payload.token
    }
});
// Action creators are generated for each case reducer function
const { login , logout , setToken  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [449], () => (__webpack_exec__(4100)));
module.exports = __webpack_exports__;

})();