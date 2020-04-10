import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { ConnectedDashboard } from "./Dashboard";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { store } from "../store";
import { history } from "../store/history";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
        <Route
          path="/task/:id"
          render={(routeProps) => (
            <ConnectedTaskDetail match={routeProps.match} />
          )}
        />
      </>
    </Provider>
  </Router>
);
