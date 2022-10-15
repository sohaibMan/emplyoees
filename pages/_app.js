import AuthContextProvider from '../src/store/auth-context';
import '../styles/main.scss';
import { Provider } from 'react-redux'
import store from '../store/store';
// import bootstrap from 'bootstrap'

function MyApp({ Component, pageProps }) {
  return <AuthContextProvider><Provider store={store}><Component {...pageProps} /></Provider></AuthContextProvider>
}

export default MyApp
