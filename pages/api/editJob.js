import returnQureryResult from './returnQureryResult'


export default  async function handler(req, res) {
    try {
        // console.log(req.body);
        // joiningDate: '2022-9-5',
        // jobName: 'back end devlopper',
        // salary: '',
        // depratmentName: '',
        // birthday: '',
        // name: '',
        // email: '',
        // phone: ''
        // id | name         | joiningDate | email                 | birthday   | phone      | jobName            | salary | depratmentName 
// const {id,name,joiningDate,email,birthday,phone,jobName,salary,depratmentName}=req.body;
// console.log(birthday);
         
// let query=`insert into employees (name,joiningDate,email,birthday,phone,jobName,salary,depratmentName) values ("${name}","${joiningDate}","${email}","${birthday}","${phone}","${jobName}",${+salary},"${depratmentName}")`
// let query=`
// UPDATE jobs
// SET name = "${name}", description = "${joiningDate}",de="${email}",birthday="${birthday}",phone="${phone}",jobName="${jobName}",salary=${+salary},depratmentName="${depratmentName}"
// WHERE id=${+id};
// `

// let data=await returnQureryResult(query); 
//         //  console.log(res.body.name);
//          query="select * from employees"
//           data=await returnQureryResult(query);      

//         res.status(200).json(data)
    }catch(error){
//         // console.log(error)
        res.status(500).json({error:error.message})
    }


  }
