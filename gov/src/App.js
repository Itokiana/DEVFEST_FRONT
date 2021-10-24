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
import NewCitoyenInfos from "./pages/NewCitoyenInfos/NewCitoyenInfos";
import Register from "./pages/Register/Register";
import ShowInfos from "./pages/ShowInfos/ShowInfos";
import ShowValidation from "./pages/ShowValidation/ShowValidation";
import Validation from "./pages/Validation/Validation";

export default function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
          <Route path="/show-infos">
            <ShowInfos />
          </Route>
          <Route path="/validation">
            <Validation />
          </Route>
          <Route path="/constitution">
            <Constitution />
          </Route>
          <Route path="/show-validation/:id">
            <ShowValidation />
          </Route>
          <Route path="/new-citoyen-infos">
            <NewCitoyenInfos />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}