import returnQureryResult from './returnQureryResult'
export default  async function handler(req, res) {
    try {
    
      
        const query1="select count(*) as employeesCount from employees"
        const [{employeesCount}]=await returnQureryResult(query1);;
        // console.log("🚀 ~ file: getCount.js ~ line 8 ~ handler ~ employeesCount", employeesCount)
        const query2="select count(*) as jobsCount from jobs"
        const [{jobsCount}]=await returnQureryResult(query2);        
        const query3="select count(*) as departmentsCount from department"
        const [{departmentsCount}]=await returnQureryResult(query3);        
        res.status(200).json({data:{employeesCount,jobsCount,departmentsCount}})
      
     


    }catch(error){
        res.status(500).json({error:error.message})
    }


  }
  