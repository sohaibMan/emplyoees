"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 3977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_jobsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8748);
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6036);







function AddEmploye(props) {
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClose = ()=>setShow(false);
    const addHanlder = ()=>{
        setShow(true);
    };
    const submitHandler = (e)=>{
        e.preventDefault();
        handleClose();
        // console.log(props.refrences);
        // console.log('clicked');
        // Object.keys(props.refrences).map(el=>
        // console.log(props.refrences[el].current))
        props.onAdd();
    };
    //  console.log(props);    
    //  const DummyDepartment=[
    //     {name:'Informatique'},
    //     {name:'industrille'},
    //  ] 
    // CustomFiltedDep.filter(el=>el.DepratmentName!==e.target.value)
    // }
    // let CustomFiltedDep=props.Jobs;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    // let filtedJobs=props.Jobs;
    // const SelctChangeHandler=(e)=>{
    //   if(e.target.value===e.target[0].innerText)setIsSelcted(false)
    //   else  {
    //     setIsSelcted(true)
    //     dispatch(filterJobsbyname(e.target.value))
    //   }
    // }
    // const [isSelcted,setIsSelcted]=useState(false);
    // useEffect(
    //   ()=>{
    //     CustomFiltedDep=CustomFiltedDep.filter(el=>el.DepratmentName===e.target.value)
    //   ,[SelctChangeHandler]
    //   }
    //   )
    // console.log("🚀 ~ file: AddElment.js ~ line 31 ~ AddEmploye ~ CustomFiltedDep", CustomFiltedDep)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: addHanlder,
                className: "btn btn-primary",
                children: "Add Employe"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
                show: show,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Header), {
                        closeButton: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Title), {
                            children: "Add Employee"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Body), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: submitHandler,
                            children: [
                                props.AddTemplate.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            required: true,
                                            type: item.type,
                                            ref: props.refrences[`${item.name}Ref`],
                                            placeholder: item.placeholder,
                                            className: "form-control"
                                        })
                                    }, index)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomSelect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    required: true,
                                    ...props
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3___default().Footer), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            variant: "secondary",
                                            onClick: handleClose,
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            variant: "primary",
                                            type: "submit",
                                            children: "Save Changes"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddEmploye);


/***/ }),

/***/ 6036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_jobsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8748);




// useEffect(
function CustomSelect(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    let { jobsForDepartment: filteredjobs  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.jobs);
    // useSelector(state=>console.log(state))
    const SelctChangeHandler = (e)=>{
        if (e.target.value === e.target[0].innerText) setIsSelcted(false);
        else {
            setIsSelcted(true);
            dispatch((0,_store_jobsSlice__WEBPACK_IMPORTED_MODULE_3__/* .filterJobsForDepartments */ .Ur)({
                target: e.target.value
            }));
        }
    };
    const { 0: isSelcted , 1: setIsSelcted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "depratmentName",
                        className: "mb-1",
                        children: "Depratment"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: props.required,
                        id: "depratmentName",
                        onChange: SelctChangeHandler,
                        ref: props.refrences["depratmentNameRef"],
                        className: "form-select",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                defaultValue: true,
                                children: "Choose a department"
                            }),
                            props.departments.map((el, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    required: true,
                                    value: el.id,
                                    children: el.name
                                }, i))
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "jobName",
                        className: "mb-1",
                        children: "Jobs"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        required: props.required,
                        id: "jobName",
                        ref: props.refrences["jobNameRef"],
                        className: "form-select",
                        "aria-label": "Default select example",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                defaultValue: true,
                                children: "Choose a Job"
                            }),
                            isSelcted && filteredjobs.map((el, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: el.name,
                                    children: el.name
                                }, i))
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSelect);


/***/ }),

/***/ 3980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Item)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/employeeSlice.js
var employeeSlice = __webpack_require__(7797);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(9306);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
;// CONCATENATED MODULE: ./components/DetailsButton.js




function DetailsButton(props) {
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const handleClose = ()=>setShow(false);
    const getId = (e)=>e.target.dataset.id;
    const detailsHanlder = (e)=>{
        setShow(true);
    // console.log(getId(e));
    };
    // console.log(props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: detailsHanlder,
                className: "btn btn-success",
                "data-id": props.id,
                children: "Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                show: show,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                            children: "Details"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
                            className: "table table-bordered",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: Object.keys(props.el).map((key, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "row",
                                                children: key
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "text-muted",
                                                children: props.el[key]
                                            })
                                        ]
                                    }, i))
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Footer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "secondary",
                            onClick: handleClose,
                            children: "Close"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_DetailsButton = (DetailsButton);

// EXTERNAL MODULE: ./components/CustomSelect.js
var CustomSelect = __webpack_require__(6036);
;// CONCATENATED MODULE: ./components/EditButton.js




// import { useSelector } from 'react-redux';

function EditButton(props) {
    // const getId=(e)=>e.target.dataset.id;
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const handleClose = ()=>setShow(false);
    const editHanlder = (e)=>{
        setShow(true);
    // console.log(getId(e));
    };
    // console.log(props);
    // const DummyDepartment=[
    // {name:'Informatique'},
    // {name:'industrille'},
    // ] 
    // const {filteredjobs}=useSelector(state=>state.jobs)
    const SubmitHanlder = (e)=>{
        e.preventDefault(e);
        // props.refrences['jobNameRef'].current.value 
        // console.log(props.refrences['jobNameRef'].current)
        // props.refrences['jobNameRef'].current &&
        props.onSubmit({
            ...props.el
        });
        // console.log({...props});
        setShow(false);
    // console.log('clicked')
    // console.log(props.refrences.depratmentNameRef.current.value)
    };
    // const EditFormSubmitHandler = (el) => {
    //   const Employee = {
    //     birthday: birthdayRef.current.value || el.birthday,
    //     depratmentName: depratmentNameRef.current.value || el.depratmentName,
    //     email: emailRef.current.value || el.email,
    //     id: idRef.current.value || el.id,
    //     jobName: jobNameRef.current.value || el.jobName,
    //     joiningDate: joiningDateRef.current.value || el. joiningDate,
    //     name: nameRef.current.value || el.name,
    //     phone: phoneRef.current.value || el.phone,
    //     salary: salaryRef.current.value || el.salary,
    //   };
    //   dispatch(EditEmplooye(Employee))
    //   dispatch(EditEmplooyeDb({Employee}))
    // //  console.log(Employee)
    // };
    // console.log(props);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: editHanlder,
                className: "btn btn-primary",
                "data-id": props.id,
                children: "Edit"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()), {
                show: show,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Title, {
                            children: "Edit"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()).Body, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: SubmitHanlder,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "edit-form",
                                    children: [
                                        Object.keys(props.EditFormStructure).map((key, i)=>{
                                            // console.log(key);
                                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        className: "mb-1",
                                                        htmlFor: key,
                                                        children: key
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: key,
                                                        ref: props.refrences[`${key}Ref`],
                                                        type: props.EditFormStructure[key].type,
                                                        disabled: key === "id" ? true : false,
                                                        className: "form-control",
                                                        placeholder: props.el[key]
                                                    })
                                                ]
                                            }, i);
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
                                            ...props
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Modal_default()).Footer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            variant: "secondary",
                                            onClick: handleClose,
                                            children: "Close"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            type: "submit",
                                            variant: "primary",
                                            children: "Save Changes"
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
/* harmony default export */ const components_EditButton = (EditButton);

;// CONCATENATED MODULE: ./components/Item.js






function Item(props) {
    // const dispatch = useDispatch();
    // const { employees } = useSelector((state) => state.employees);
    // const deleteHanlder = (e) => {
    //   const response = confirm(
    //     `Do you wanna really remove ${e.target.dataset.name} who has the id :${e.target.dataset.id}`
    //   );
    //   if (response) {
    //     dispatch(remove({ id: e.target.dataset.id, employees }));
    //     dispatch(RemoveUserDb({ id: e.target.dataset.id }));
    //   }
    // };
    // const idRef = useRef();
    // const nameRef = useRef();
    // const joiningDate = useRef();
    // const email = useRef();
    // const birthday = useRef();
    // const phone = useRef();
    // const salary = useRef();
    // const depratmentNameRef = useRef();
    // const jobNameRef = useRef();
    // const EditFormStructure = {
    //   id: { type: "text", ref: idRef },
    //   name: { type: "text", ref: nameRef },
    //   joiningDate: { type: "date", ref: joiningDate },
    //   email: { type: "email", ref: email },
    //   birthday: { type: "date", ref: birthday },
    //   phone: { type: "number", ref: phone },
    //   salary: { type: "number", ref: salary },
    // };
    // const EditFormSubmitHandler = () => {
    //   const Employee = {
    //     birthday: birthday.current.value || props.birthday,
    //     depratmentName: depratmentNameRef.current.value || props.depratmentName,
    //     email: email.current.value || props.email,
    //     id: idRef.current.value || props.id,
    //     jobName: jobNameRef.current.value || props.jobName,
    //     joiningDate: joiningDate.current.value || props. joiningDate,
    //     name: nameRef.current.value || props.name,
    //     phone: phone.current.value || props.phone,
    //     salary: salary.current.value || props.salary,
    //   };
    //   dispatch(EditEmplooye(Employee))
    //   dispatch(EditEmplooyeDb({Employee}))
    // };
    // console.log(props);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
            id: props.el.id,
            children: [
                props.children,
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_DetailsButton, {
                        ...props
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_EditButton, {
                        ...props
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: props.deleteHanlder,
                        className: "btn btn-danger",
                        "data-name": props.el.name,
                        "data-id": props.el.id,
                        children: "Delete"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_Item = (Item);


/***/ }),

/***/ 9678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Menu(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-3 ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "list-group ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "list-group-item active",
                    "aria-current": "true",
                    children: "Employees Data"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "list-group-item text-primary",
                    children: props.children
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "list-group-item text-primary",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "employees",
                            className: "text-primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "All Employees"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "depratments",
                            className: "text-primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "All Departments"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "jobs",
                            className: "text-primary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "All Jobs"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ 8587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8090);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




// import { filter } from '../store/employeeSlice';
function Search(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    // const searchRef=useRef();
    //     const {employees}=useSelector(state=>state.employees);
    //    const  searchFormHanlder=(e)=>{
    // e.preventDefault();
    //    }
    //   const serachChangeHandler=(e)=>{
    // dispatch(filter({target:e.target.value,employees}))
    //   }
    const Submithandler = (e)=>{
        e.preventDefault();
        props.OnSearch(searchRef.current.value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: Submithandler,
        className: "d-flex form",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: "icon_s",
                        "aria-hidden": "true",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: searchRef,
                        onChange: Submithandler,
                        placeholder: "Search name",
                        type: "search",
                        className: "input"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "btn text-white btn-warning",
                onClick: ()=>dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_2__/* .logout */ .kS)()),
                children: "X"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


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


/***/ })

};
;