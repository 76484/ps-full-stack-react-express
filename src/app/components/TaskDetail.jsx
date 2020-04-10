import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const TaskDetail = ({ id, comments, groups, match, task, isComplete }) => (
  <div>
    <h2>{task.name}</h2>
    <div>
      <button>Complete / Reopen Task</button>
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
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
