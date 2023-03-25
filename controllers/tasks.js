import User from "../Schema/userSchema";
import CustomErrorHandler from "../middlewares/CustomErrorHandler";
const tasksObj = {
  async getAllTasks(req, res, next) {
    let userDoc;
    try {
      userDoc = await User.find({});
    } catch (err) {
      return next(err);
    }
    res.status(200).json({ userDoc });
  },
  async createNewTask(req, res, next) {
    let userDoc;
    try {
      userDoc = await User.create(req.body);
    } catch (err) {
      return next(err);
    }
    // res.json({ userDoc });
    res.status(200).json({ userDoc });
  },
  async updateTask(req, res, next) {
    try {
      const userDoc = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );
      res.status(200).json({ userDoc });
    } catch (error) {
      return next(error);
    }
  },
  async getSingleTask(req, res, next) {
    try {
      const userDoc = await User.findById(req.params.id);
      if (!userDoc) {
        return next(new Error("User not found Okay"));
      }

      res.status(200).json({ userDoc });
    } catch (err) {
      return next(err);
    }
  },
  async deleteTask(req, res, next) {
    try {
      const userDoc = await User.findByIdAndDelete(req.params.id);
      if (!userDoc) {
        return next(new Error("User not found Okay"));
      }
      res.json({ message: "Successfully deleted" });
    } catch (err) {
      return next(err);
    }
  },
};
export default tasksObj;
