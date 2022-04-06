class Task
{
    constructor(name, timeCourse, priority, status)
    {
        this.name = name;
        this.timeCourse = timeCourse;
        this.priority = priority;
        this.status = status;
    }

    validate()
    {
        if(this.name === undefined || this.name === '')
        {
            throw new Error('Task name is undefined')
        }
    }
}

module.exports = Task;
