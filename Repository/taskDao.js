const sql = require('mssql');
const config = require('../db_config');

class TaskDao
{   
    async getAll()
    {
        const pool = await sql.connect(config);
        return pool.request().query("SELECT * FROM task");
    }

    async getByTimeCourse(timeCourse)
    {
        const pool = await sql.connect(config);
        return pool.request().query(`SELECT * FROM task WHERE timeCourse ='${timeCourse}'`);
    }

    async create(task)
    {
        const pool = await sql.connect(config);
        const query = `insert into task VALUES ('${task.name}', '${task.timeCourse}', '${task.priority}', '${task.status}')`;
        await pool.request().query(query);
    }
}

module.exports = TaskDao;
