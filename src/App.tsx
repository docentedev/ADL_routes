import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from './containers/home/Home'
import PrivateHome from './containers/private-home/PrivateHome'
import NotFound from './containers/not-found/NotFound'
import ContextLogin from './context/ContextLogin'
import PrivateRoute from './containers/private-route/PrivateRoute'

function App() {
  const [login, setLogin] = useState(false);

  const setLogIn = (username: string, cb: () => void) => {
    if (username === 'juan.123') {
      setLogin(true)
      cb()
    }
  }

  const setLogOut = () => {
    setLogin(false)
  }

  return (
    <ContextLogin.Provider value={{
      isLogin: login,
      logIn: setLogIn,
      logOut: setLogOut,
    }}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/private-home">Private Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/private-home" component={PrivateHome} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextLogin.Provider>
  );
}

export default App
