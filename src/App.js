import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import UserContext from './contexts/userContext'
import Home from './components/home';
import AddMoney from './components/add';
import RemoveMoney from './components/remove';

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

          <Route path='/home' exact >
            <Home />
          </Route>

          <Route path='/add' exact >
            <AddMoney />
          </Route>

          <Route  path='/remove' exact >
            <RemoveMoney />
          </Route>

        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
    
  );
}
