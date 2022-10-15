import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StartingPageContent from '../components/StartingPage/StartingPageContent';
import { AuthContext } from '../store/auth-context';

const HomePage = () => {
const ctx=useContext(AuthContext);
const history=useHistory();
useEffect(
  ()=>{
if(!ctx.isLoggedIn)history.push('/auth');
  }
  ,[ctx.isLoggedIn,history]
)
  return <StartingPageContent />;
};

export default HomePage;
