const express = require('express');
const app = express();

const TaskService = require('./Services/TaskService')
const taskService = new TaskService();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/getalltasks', async (_req, res) =>
{
    try
    {
        res.send(await taskService.getAll());
    }
    catch(err)
    {
        res.send(err);
    }
})

app.post('/create', async (req, res)=> {
    let request = req.body;
    try
    {
        await taskService.create(request);
        res.status(200).send('Dados gravados com sucesso!!!')
    }
    catch(err)
    {
        res.status(400).send(`Erro ao salvar os dados no banco: ${err}`)
    }
    
});

app.listen(3001, ()=> {
    console.log('running on port 3001...');
});