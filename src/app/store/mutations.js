export const CREATE_TASK = "CREATE_TASK";
export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";

export const createTask = (taskID, groupID, ownerID) => {
  return {
    type: CREATE_TASK,
    groupID,
    ownerID,
    taskID,
  };
};

export const requestTaskCreation = (groupID) => {
  return {
    type: REQUEST_TASK_CREATION,
    groupID,
  };
};
