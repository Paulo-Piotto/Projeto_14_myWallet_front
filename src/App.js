import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/signIn';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
