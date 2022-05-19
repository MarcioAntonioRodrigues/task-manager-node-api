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

    async getByStatus(status)
    {
        const result = await taskDao.getByStatus(status)
        return result.recordset;
    }

    async create(request)
    {
        const task = new Task(request.name, request.priority, request.status, request.deliveryDate, request.description);
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

    async updateDescription(taskId, description)
    {
        try
        {
            await taskDao.updateDescription(taskId, description);
        }
        catch(e)
        {
            console.log('erro:', e)
        }
    }
    
    async updatePriority(taskId, priority)
    {
        try
        {
            await taskDao.updatePriority(taskId, priority);
        }
        catch(e)
        {
            console.log('erro:', e)
        }
    }
}

module.exports = TaskService;