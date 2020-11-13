import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import {AuthRouter} from './AuthRouter'

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route path = "/auth" component = {AuthRouter} />
                <Route exact path = "/" component = {JournalScreen}/>
            </Switch>
        </div>
         
    </Router>
  );
};
