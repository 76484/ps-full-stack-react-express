import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";

import { ConnectedDashboard } from "./Dashboard";
import { ConnectedLogin } from "./Login";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";
import { store } from "../store";
import { history } from "../store/history";

const RouteGuard = (Component) => ({ match }) => {
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Component match={match} />;
  }
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <>
        <ConnectedNavigation />
        <Route exact path="/" component={ConnectedLogin} />
        <Route
          exact
          path="/dashboard"
          render={RouteGuard(ConnectedDashboard)}
        />
        <Route path="/task/:id" render={RouteGuard(ConnectedTaskDetail)} />
      </>
    </Provider>
  </Router>
);
