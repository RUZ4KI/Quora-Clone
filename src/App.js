import React from 'react';
import './App.css';
import Quora from './component/Quora';
import Login from './component/auth/Login';
import { useDispatch,useSelector } from 'react-redux';
import {login,logout,selectUser} from './features/userSlice'
import {auth} from './firebase';
import { useEffect } from 'react';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);

  return (
    <div className="App">
      {
        user ? (<Quora/>) : (<Login/>)
      }
      
    </div>
  );
}

export default App;
