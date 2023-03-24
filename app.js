import express from "express";
import "./db/conn.js";
import { PORT } from "./config";
import router from "./routers/taskRouter.js";
const app = express();

app.use(express.json());
app.use("/api/v1/tasks", router);

app.listen(PORT, () => {
  console.log(`The server is listening at port address ${PORT}`);
});
