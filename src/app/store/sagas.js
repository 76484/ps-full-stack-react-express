import { put, select, take } from "redux-saga/effects";
import { v4 as uuid } from "uuid";
import axios from "axios";

import * as mutations from "./mutations";

const url = "http://localhost:7777";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = "U1";
    const taskID = uuid();
    yield put(mutations.createTask(taskID, groupID, ownerID));

    const { res } = yield axios.post(`${url}/task/new`, {
      task: {
        id: taskID,
        groupID,
        owner: ownerID,
        isComplete: false,
        name: "New task",
      },
    });

    console.info("Got response,", res);
  }
}
