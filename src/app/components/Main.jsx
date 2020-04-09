import React from "react";
import { Provider } from "react-redux";

import { ConnectedDashboard } from "./Dashboard";
import { store } from "../store";

export const Main = () => (
  <Provider store={store}>
    <ConnectedDashboard />
  </Provider>
);
