import returnQureryResult from './returnQureryResult'


export default  async function handler(req, res) {
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
const {name,joiningDate,email,birthday,phone,jobName,salary,depratmentName}=req.body.Employee;
// console.log(birthday);
         
let query=`insert into employees (name,joiningDate,email,birthday,phone,jobName,salary,depratmentName) values ("${name}","${joiningDate}","${email}","${birthday}","${phone}","${jobName}",${+salary},"${depratmentName}")`
console.log(query);
let data=await returnQureryResult(query); 
        //  console.log(res.body.name);
         query="select * from employees"
          data=await returnQureryResult(query);      

        res.status(200).json(data)
    }catch(error){
        // console.log(error)
        res.status(500).json({error:error.message})
    }


  }
  