import { useRouter } from "next/router";
import {useRef} from "react"
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { login} from "../store/authSlice";

function Home() {


  const dispatch=useDispatch()
  const router=useRouter();
  
    
  const  emailRef=useRef();
  const  passwordRef=useRef();
  const SubmitHandler=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzoVf_bgeA1Pqv51sFPRRTRDX3k_IxeOI",{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
  email:emailRef.current.value,
  password:passwordRef.current.value,
  returnSecureToken:true,
})

})
const data=await response.json();
if(!response.ok){
  const errorMessage=data.error?.message||'authentification failed';
  alert(errorMessage);
  throw new Error(errorMessage);
}
else {

  dispatch(login({token:data.idToken}));
  router.push('/dashbord');
}
}
catch(e){
console.error(e);
}

}

  return (
    <section className="d-flex  aligne-center justify-content-center align-items-center my_container">
      <form  onSubmit={SubmitHandler}  className='bg-white p-5 shadow-lg rounded-3 d-flex  flex-column gap-3 '>
      <div className='Email'>
      <Form.Label htmlFor="inpuEemail">Email</Form.Label>
      <Form.Control
        type="email"
        id="inpuEemail"
        aria-describedby="EmailHelpBlock"
        placeholder='Enter your Email '
        required
        ref={emailRef}
        />
      </div>
      <div className="Password">
      <Form.Label htmlFor="inputPassword">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter your  password'
        required
        minLength="6"
        ref={passwordRef}
        />
        </div>
        <button type='submit' className="cssbuttons-io-button " id="login"> Get started
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
            </div>
         </button>
        </form>
      </section>
 
  );
}

export default Home;