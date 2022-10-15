import returnQureryResult from './returnQureryResult'


export default  async function handler(req, res) {
    try {
if(req.body.token){
//d o else if you want to verify the token

}
        let query=`DELETE FROM employees WHERE id=${req.body.id}` 
        let data=await returnQureryResult(query);    
        //  query="select * from employees"
        //  data=await returnQureryResult(query);      
      
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({error:error.message})
    }


  }
  