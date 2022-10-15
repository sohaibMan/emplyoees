import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../../store/auth-context';
import { useContext } from 'react';
import { useEffect } from 'react';

const UserProfile = () => {
  const ctx=useContext(AuthContext);
  const history=useHistory();
  useEffect(
    ()=>{
  if(!ctx.isLoggedIn)history.replace('/auth');
    }
    ,[ctx.isLoggedIn,history]
  )
  
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
