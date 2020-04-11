import React from "react";
import { connect } from "react-redux";

import * as mutations from "../store/mutations";
import { requestAuthenticateUser } from "../store/mutations";

const Login = ({ authenticated, authenticateUser }) => (
  <div>
    <h2>Please login</h2>
    <form onSubmit={authenticateUser}>
      <input name="username" placeholder="username" type="text" />
      <input name="password" placeholder="password" type="password" />
      {authenticated === mutations.NOT_AUTHENTICATED ? (
        <p>Login incorrect</p>
      ) : null}
      <button type="submit">Login</button>
    </form>
  </div>
);

const mapStateToProps = ({ session }) => {
  return {
    authenticated: session.authenticated,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser(event) {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;

      dispatch(requestAuthenticateUser(username, password));
    },
  };
};

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
