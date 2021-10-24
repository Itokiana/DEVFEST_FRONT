import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShowValidation from "./pages/ShowValidation/ShowValidation";
import Validation from "./pages/Validation/Validation";
import Constitution from "./pages/Constitution/Constitution";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExportInfos from "./pages/ExportInfos/ExportInfos";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterConstitution from "./pages/RegisterConstitution/RegisterConstitution";
import ShowInfos from "./pages/ShowInfos/ShowInfos";
import Story from "./pages/Story/Story";

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
          <Route path="/register-constitution">
            <RegisterConstitution />
          </Route>
          <Route path="/constitution">
            <Constitution />
          </Route>
          <Route path="/export-infos">
            <ExportInfos />
          </Route>
          <Route path="/validation">
            <Validation />
          </Route>
          <Route path="/show-validation/:id">
            <ShowValidation />
          </Route>
          <Route path="/stories">
            <Story />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}