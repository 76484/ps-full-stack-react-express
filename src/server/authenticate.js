import { v4 as uuid } from "uuid";
import md5 from "md5";
import { connectDB } from "./connect-db";

const authenticationTokens = [];

async function assembleUserState(user) {
  const db = await connectDB();

  const tasks = await db.collection("tasks").find({ owner: user.id }).toArray();
  const groups = await db
    .collection("groups")
    .find({ owner: user.id })
    .toArray();

  return {
    tasks,
    groups,
    session: { authenticated: "AUTHENTICATED", id: user.id },
  };
}

export const authenticateRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    const { username, password } = req.body;
    const db = await connectDB();
    const collection = db.collection("users");

    const user = await collection.findOne({ name: username });

    if (!user) {
      return res.status(500).send("User not found");
    }

    const hash = md5(password);
    const passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      return res.status(500).send("Password incorrect");
    }

    const token = uuid();

    authenticationTokens.push({
      token,
      userID: user.id,
    });

    const state = await assembleUserState(user);

    res.send({ token, state });
  });
};
