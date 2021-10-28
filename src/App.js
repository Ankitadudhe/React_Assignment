import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth';
import {useSelector} from 'react-redux';
import UserProfiler from './components/UserProfile'
function App() {
 const isAuth= useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
    <Header/>
    {!isAuth &&<Auth/>}
    {isAuth &&<UserProfiler/>}

    <Counter />
    </>
  );
}

export default App;
