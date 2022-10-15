import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import  { AuthContext } from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef=useRef();
  const ctx=useContext(AuthContext);
  const history=useHistory()

const SubmitHandler=async (e)=>{
e.preventDefault();
const response=await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAa9TYnqufso3QKg9U7P3Mo8OaqkqZ_b78`,
{
  method:"POST",
  headers:{
  'Content-type':'application/json'
},
body:JSON.stringify({
idToken:ctx.token,
password:newPasswordInputRef.current.value,
returnSecureToken:true,
})
}
)
const data=await response.json();
// console.log("🚀 ~ file: ProfileForm.js ~ line 14 ~ SubmitHandler ~ data", data)
if(!response.ok){
  alert(data.error.message);
}
else {
ctx.login(data.idToken);
history.push('/')

}

}

  return (
    <form onSubmit={SubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInputRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
