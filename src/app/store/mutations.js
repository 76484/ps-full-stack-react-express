export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATING = "AUTHENTICATING";
export const CREATE_TASK = "CREATE_TASK";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const SET_STATE = "SET_STATE";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const SET_TASK_GROUP = "SET_TASK_GROUP";
export const SET_TASK_NAME = "SET_TASK_NAME";

export const createTask = (taskID, groupID, ownerID) => {
  return {
    type: CREATE_TASK,
    groupID,
    ownerID,
    taskID,
  };
};

export const processAuthenticateUser = (
  status = AUTHENTICATING,
  session = null
) => {
  return {
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status,
  };
};

export const requestAuthenticateUser = (username, password) => {
  return {
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password,
  };
};

export const requestTaskCreation = (groupID) => {
  return {
    type: REQUEST_TASK_CREATION,
    groupID,
  };
};

export const setTaskCompletion = (id, isComplete) => {
  return {
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete,
  };
};

export const setState = (state = {}) => {
  return {
    type: SET_STATE,
    state,
  };
};

export const setTaskGroup = (id, groupID) => {
  return {
    type: SET_TASK_GROUP,
    taskID: id,
    groupID,
  };
};

export const setTaskName = (id, name) => {
  return {
    type: SET_TASK_NAME,
    taskID: id,
    name,
  };
};
