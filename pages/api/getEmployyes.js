import returnQureryResult from './returnQureryResult'
export default  async function handler(req, res) {
    try {
        const query="select *  from employees"
        const data=await returnQureryResult(query);
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({error:error.message})
    }


  }
  