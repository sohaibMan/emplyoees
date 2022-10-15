import mysql from 'mysql2/promise'
export default  async function returnQureryResult(query) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password:'123jkl;',
            database: 'mangement' ,
            // host: 'sql201.epizy.com',
            // user: 'epiz_32795820',
            // password:'ZGTyv7qKhIGZK;',
            // database: 'epiz_32795820_employees'
        });
      
        const [queryResult]= await  connection.execute(query,[]);
        connection.end();
         return queryResult;
    }catch(error){
        res.status(500).json({error:error.message})
    }


  }
  