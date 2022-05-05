const TaskDao = require('../Repository/taskDao');
const Task = require('../Models/Task')

const taskDao = new TaskDao();

class TaskService
{
    async getAll()
    {
        const result = await taskDao.getAll();
        return result.recordset;
    }

    async getByTimeCourse(timeCourse)
    {
        const result = await taskDao.getByTimeCourse(timeCourse)
        return result.recordset;
    }

    async create(request)
    {
        const task = new Task(request.name, request.timeCourse, request.priority, request.status);
        task.validate();
        try
        {
            await taskDao.create(task);
        }
        catch(e)
        {
            console.log('erro:', e)
        }
    }

    async delete(taskId)
    {
        try
        {
            await taskDao.delete(taskId);
        }
        catch(e)
        {
            console.log('erro:', e)
        }
    }
}

module.exports = TaskService;