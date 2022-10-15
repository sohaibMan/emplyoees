"use strict";
(() => {
var exports = {};
exports.id = 723;
exports.ids = [723,801];
exports.modules = {

/***/ 6974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _returnQureryResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4523);

async function handler(req, res) {
    try {
        // joiningDate: '2022-9-5',
        // jobName: 'back end devlopper',
        // salary: '',
        // depratmentName: '',
        // birthday: '',
        // name: '',
        // email: '',
        // phone: ''
        // id | name         | joiningDate | email                 | birthday   | phone      | jobName            | salary | depratmentName 
        const { name , joiningDate , email , birthday , phone , jobName , salary , depratmentName  } = req.body.Employee;
        // console.log(birthday);
        let query = `insert into employees (name,joiningDate,email,birthday,phone,jobName,salary,depratmentName) values ("${name}","${joiningDate}","${email}","${birthday}","${phone}","${jobName}",${+salary},"${depratmentName}")`;
        console.log(query);
        let data = await (0,_returnQureryResult__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
        //  console.log(res.body.name);
        query = "select * from employees";
        data = await (0,_returnQureryResult__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
        res.status(200).json(data);
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            error: error.message
        });
    }
}


/***/ }),

/***/ 4523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ returnQureryResult)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/returnQureryResult.js

async function returnQureryResult(query) {
    try {
        const connection = await promise_default().createConnection({
            // host: 'localhost',
            // user: 'root',
            // password:'123jkl;',
            // database: 'mangement' ,
            host: "sql201.epizy.com",
            user: "epiz_32795820",
            password: "ZGTyv7qKhIGZK;",
            database: "epiz_32795820_employees"
        });
        const [queryResult] = await connection.execute(query, []);
        connection.end();
        return queryResult;
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6974));
module.exports = __webpack_exports__;

})();