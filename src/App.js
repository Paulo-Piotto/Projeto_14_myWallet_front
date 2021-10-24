import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import UserContext from './contexts/userContext'
import Home from './components/home';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Switch>

         <Route path='/' exact >
            <SignIn />
          </Route>

          <Route path='/sign-up'exact >
            <SignUp />
          </Route>

          <Route>
            <Home path='/home' exact />
          </Route>

        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
    
  );
}
