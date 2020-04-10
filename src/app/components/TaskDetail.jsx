import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as mutations from "../store/mutations";

const TaskDetail = ({
  id,
  comments,
  groups,
  match,
  task,
  isComplete,
  setTaskCompletion,
}) => (
  <div>
    <h2>{task.name}</h2>
    <div>
      <button onClick={() => setTaskCompletion(id, !isComplete)}>
        {isComplete ? "Reopen" : "Complete"}
      </button>
    </div>
    <div>
      <select>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <Link to="/dashboard">Done</Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const task = state.tasks.find((task) => task.id === id);
  const groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

const mapDisptachToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDisptachToProps
)(TaskDetail);
