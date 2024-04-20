import React, { useReducer, createContext } from 'react'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingScreen from "./Components/LandingScreen";
import LoginScreen from "./Components/LoginScreen";
import SignupScreen from "./Components/SignupScreen";
import Profile from "./Components/Profile";

export const LoggedUserDetails = createContext();

function App() {

  const initialUserState = {
    email: '',
    name: '',
  };

  const reducerUser = (state, action) => {
    switch (action.type) {
      case 'login':
        return {
          email: action.value.email,
          name: action.value.name,
        }
      // return console.log("loggedIn", action.value);

      case 'setInitialState':
        return initialUserState
      default:
        return initialUserState
    }
  }

  const [loggedUser, dispatchUser] = useReducer(reducerUser, initialUserState);

  return (
    <LoggedUserDetails.Provider value={{ loggedUser: loggedUser, dispatch: dispatchUser }}>

      <div className="text-center h-screen font-sans overflow-hidden md:overflow-hidden lg:overflow-hidden sm:md:overflow-hidden xl:md:overflow-hidden" style={{ backgroundColor: '#F7F8F9' }}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/landingScreen' />} />
            <Route path='/landingScreen' element={<LandingScreen />} />
            <Route path='/loginScreen' element={<LoginScreen />} />
            <Route path='/signupScreen' element={<SignupScreen />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </HashRouter>
      </div>

    </LoggedUserDetails.Provider>
  );
}

export default App;
