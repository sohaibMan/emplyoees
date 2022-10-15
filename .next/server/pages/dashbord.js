"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 4340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_dashbord),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Nav.js
var Nav = __webpack_require__(5455);
;// CONCATENATED MODULE: ./components/Dashbord.js



// import { AuthContext } from '../src/store/auth-context'

function Dashbord(props) {
    // const ctx=useContext(AuthContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "page-contain",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashbord/jobs",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "data-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: props.jobsCount
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Jobs"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We have cover the most popluare jobs."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "link-text",
                                    children: [
                                        "View All Providers",
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            width: "25",
                                            height: "16",
                                            viewBox: "0 0 25 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z",
                                                fill: "#753BBD"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashbord/employees",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "data-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: props.employeesCount
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Employees"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "What are waiting for .Became one of Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "link-text",
                                    children: [
                                        "View Information",
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            width: "25",
                                            height: "16",
                                            viewBox: "0 0 25 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z",
                                                fill: "#753BBD"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/dashbord/depratments",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "data-card",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: props.departmentsCount
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Depratments"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "What are waiting for .Became one of Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "link-text",
                                    children: [
                                        "View Information",
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            width: "25",
                                            height: "16",
                                            viewBox: "0 0 25 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z",
                                                fill: "#753BBD"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
// const {employeesCount,jobsCount}=
/* harmony default export */ const components_Dashbord = (Dashbord);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/employeeSlice.js
var employeeSlice = __webpack_require__(7797);
// EXTERNAL MODULE: ./store/jobsSlice.js
var jobsSlice = __webpack_require__(8748);
// EXTERNAL MODULE: ./store/departmentSlice.js
var departmentSlice = __webpack_require__(9008);
;// CONCATENATED MODULE: ./pages/dashbord/index.js




;




function dashbord(props) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const isLoggedIn = (0,external_react_redux_.useSelector)((state)=>state.authentication.isLoggedIn);
    (0,external_react_redux_.useSelector)((state)=>console.log(state));
    (0,external_react_.useEffect)(()=>{
        if (!isLoggedIn) router.push("/");
    }, []);
    (0,external_react_.useEffect)(()=>{
        isLoggedIn && dispatch((0,employeeSlice/* fetchEmployyes */.CU)());
        isLoggedIn && dispatch((0,jobsSlice/* fetchJobs */.bG)());
        isLoggedIn && dispatch((0,departmentSlice/* fetchDepartments */.$W)());
    }, [
        isLoggedIn
    ]);
    return isLoggedIn && /*#__PURE__*/ jsx_runtime_.jsx(components_Dashbord, {
        ...props
    });
}
async function getServerSideProps() {
    const getCounts = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/getCount");
            if (response.status !== 200) throw new Error(response.error);
            const responsejson = await response.json();
            return {
                employeesCount: responsejson.data.employeesCount,
                jobsCount: responsejson.data.jobsCount,
                departmentsCount: responsejson.data.departmentsCount
            };
        } catch (e) {
            console.error(e);
        }
    };
    return {
        props: {
            ...await getCounts()
        }
    };
//will run in the server each reqeust
}
/* harmony default export */ const pages_dashbord = (dashbord);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,449,455], () => (__webpack_exec__(4340)));
module.exports = __webpack_exports__;

})();