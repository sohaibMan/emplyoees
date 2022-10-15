import { useEffect } from 'react';
import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const ctx=useContext(AuthContext);
  const emailInputRef=useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setisloading] = useState(false);
  const passwordInputRef=useRef();
  const history=useHistory();

  useEffect(
    ()=>{
      console.log(ctx.isLoggedIn);
  if(ctx.isLoggedIn)history.replace('/');
    }
    ,[ctx.isLoggedIn,history]
  )

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
const submitHandler=async(e)=>{
  e.preventDefault();
  // chechking inputs 
  setisloading(true);
    try{
      const response=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${isLogin?'signInWithPassword':'signUp'}?key=AIzaSyAa9TYnqufso3QKg9U7P3Mo8OaqkqZ_b78`,{
        method:"POST",
        headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      email:emailInputRef.current.value,
      password:passwordInputRef.current.value,
      returnSecureToken:true,
    })
      }
      )
    const data=await response.json();
    // console.log("??/🚀 ~ file: AuthForm.js ~ line 34 ~ submitHandler ~ data", response)
    if(!response.ok){
      // console.log(data.error.message);
      const errorMessage=data?.error?.message||'authentification failed';
      alert(errorMessage);
    }
    else {
     ctx.login(data.idToken);
     history.replace('/')
    }
    }
    catch (e){
// somthing to do with the error
    }
  

    
    
  setisloading(false);
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button>
            {!isloading && (isLogin  ? 'Login' : 'Create Account')}
            {isloading && "sending"}
           
          </button>
        <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin  ? 'Create new account' : 'Login with existing account'}
          
          </button>
          
      
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
