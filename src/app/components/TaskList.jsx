import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { requestTaskCreation } from "../store/mutations";

export const TaskList = ({ createNewTask, tasks, name, id }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <Link key={task.id} to={`/task/${task.id}`}>
          <div>{task.name}</div>
        </Link>
      ))}
    </div>
    <button onClick={() => createNewTask(id)}>Add New</button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Creating new task...", id);
      dispatch(requestTaskCreation(id));
    },
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
