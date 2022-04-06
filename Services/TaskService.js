const TaskDao = require('../Repository/taskDao');
const Task = require('../Models/Task')

const taskDao = new TaskDao();

class TaskService
{
    async getAll()
    {
        let result = await taskDao.getAll();
        return result.recordset;
    }

    async create(request)
    {
        const task = new Task(request.name, request.timeCourse, request.priority, request.status);
        task.validate();
        await taskDao.create(task);
    }
}

module.exports = TaskService;