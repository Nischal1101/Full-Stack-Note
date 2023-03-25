import express from "express";
import "./db/conn.js";
import errorHandler from "./middlewares/ErrorHandler.js";
import { PORT } from "./config";
import router from "./routers/taskRouter.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", router);

app.use((req, res, next) => {
  res.json({ message: "Route not found" });
});
app.use(errorHandler);
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is listening at port address ${PORT}`);
});
