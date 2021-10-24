import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import NewInfosCompte from "./pages/NewInfosCompte/NewInfosCompte";
import Register from "./pages/Register/Register";
import ShowInfos from "./pages/ShowInfos/ShowInfos";
import ShowValidation from "./pages/ShowValidation/ShowValidation";
import Story from "./pages/Story/Story";
import Validation from "./pages/Validation/Validation";
// import ShowInfos from "./pages/Validation/Validation";

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
          <Route path="/new-infos-compte"> 
            <NewInfosCompte />
          </Route>
          <Route path="/validation">
            <Validation />
          </Route>
          <Route path="/stories">
            <Story />
          </Route>
          <Route path="/show-validation/:id">
            <ShowValidation />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}