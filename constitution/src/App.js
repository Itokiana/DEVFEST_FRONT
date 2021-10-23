import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Constitution from "./pages/Constitution/Constitution";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShowInfos from "./pages/ShowInfos/ShowInfos";
import ShowInfos from "./pages/Validation/Validation";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/show-infos">
            <ShowInfos />
          </Route>
          
          <Route path="/validation">
            <Validation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}