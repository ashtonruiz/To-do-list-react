import './App.css';
import backgroundImage from './background.webp';
import Header from './Components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Items from './Components/Items/Items.js';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='/items' component={Items}/>
        <Route exact path='/'>
          <>
            {user && <Redirect to='/items'/>}
            {!user && <Redirect to='/auth/sign-in'/>} 
          </>
        </Route>
      </Switch>
      <h1>Hello</h1>
    </div>
  );
}

export default App;