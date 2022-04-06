const sql = require('mssql');
const config = require('../db_config');

class TaskDao
{   
    async getAll()
    {
        let pool = await sql.connect(config);
        return pool.request().query("SELECT * FROM task")
    }

    async create(task)
    {
        let pool = await sql.connect(config);
        const query = `insert into task VALUES ('${task.name}', '${task.timeCourse}', '${task.priority}', '${task.status}')`;
        await pool.request().query(query);
    }
}

module.exports = TaskDao;
