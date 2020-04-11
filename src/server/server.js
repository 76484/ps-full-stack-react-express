import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { authenticationRoute } from "./authenticate";
import { connectDB } from "./connect-db";
import "./initialize-db";

const port = 7777;

const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);

export const addNewTask = async (task) => {
  const db = await connectDB();
  const collection = db.collection("tasks");

  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  const { id, group, isComplete, name } = task;
  const db = await connectDB();
  const collection = db.collection("tasks");

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }

  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.post("/task/new", async (req, res) => {
  const task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});

app.post("/task/update", async (req, res) => {
  const task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});

app.listen(port, console.log(`Server listening on port: ${port}`));
