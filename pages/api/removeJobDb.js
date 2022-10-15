import returnQureryResult from './returnQureryResult'


export default  async function handler(req, res) {
    try {
if(req.body.token){
//d o else if you want to verify the token

}

        const query=`DELETE FROM jobs WHERE name="${req.body.name}"` 
        // console.log(query);
        const data=await returnQureryResult(query);    
        
        res.status(200).json(data);
    }catch(error){
        // console.error(error);
        res.status(500).json({error:error.message})
    }


  }
  