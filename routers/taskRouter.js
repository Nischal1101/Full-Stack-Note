import express from "express";
import tasksObj from "./../controllers/tasks";
const router = express.Router();

router.route("/").get(tasksObj.getAllTasks);
router.route("/").post(tasksObj.createNewTask);
router.route("/:id").patch(tasksObj.updateTask);
router.route("/:id").get(tasksObj.getSingleTask);
router.route("/:id").delete(tasksObj.deleteTask);
export default router;
