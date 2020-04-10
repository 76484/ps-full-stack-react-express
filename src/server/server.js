import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connectDB } from "./connect-db";

const port = 7777;

const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

export const addNewTask = async (task) => {
  const db = await connectDB();
  const collection = db.collection("tasks");

  await collection.insertOne(task);
};

app.post("/task/new", async (req, res) => {
  const task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});

app.listen(port, console.log(`Server listening on port: ${port}`));
