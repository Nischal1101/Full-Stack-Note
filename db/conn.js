import mongoose from "mongoose";
import { CONN_STRING } from "../config";

mongoose
  .connect(CONN_STRING)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((e) => console.log(e));
