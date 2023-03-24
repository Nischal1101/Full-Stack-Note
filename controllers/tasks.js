const tasksObj = {
  async getAllTasks(req, res, next) {
    res.send(req.body);
  },
  async createNewTask(req, res, next) {},
  async updateTask(req, res, next) {},
  async getSingleTask(req, res, next) {},
  async deleteTask(req, res, next) {},
};
export default tasksObj;
