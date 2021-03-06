class Task
{
    constructor(name, priority, status, deliveryDate, description)
    {
        this.name = name;
        this.priority = priority;
        this.status = status;
        this.deliveryDate = deliveryDate;
        this.description = description;
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
