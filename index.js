const express = require('express');
const app = express();
const cors = require('cors');

const TaskService = require('./Services/TaskService')
const taskService = new TaskService();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

app.get('/getalltasks', async (_req, res) =>
{
    try
    {
        res.send(await taskService.getAll());
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})

app.get('/getbystatus/:status', async (req, res) => {
    try
    {
        res.send(await taskService.getByStatus(req.params.status));
    }
    catch(err)
    {
        res.status(400).send(err)
    }
})

app.post('/create', (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let request = req.body;
    try
    {
        taskService.create(request);
        res.status(200).send('Dados gravados com sucesso!!!');
    }
    catch(err)
    {
        res.status(400).send(`Erro ao salvar os dados no banco: ${err}`);
    }
});

app.delete('/delete/:id', (req, res)=> {
    try
    {
        taskService.delete(req.params.id);
        res.status(200).send('Dados apagados com sucesso!!!');
    }
    catch(err)
    {
        res.status(400).send(`Erro ao apagar os dados no banco: ${err}`);
    }
});

app.put('/updateDescription', (req, res) =>
{
    const taskId = req.body.taskId;
    const description = req.body.description;
    try
    {
        taskService.updateDescription(taskId, description);
        res.status(200).send('Dados alterados com sucesso!!!');
    }
    catch(err)
    {
        res.status(400).send(`Erro ao alterar os dados no banco: ${err}`);
    }
})

app.put('/updatePriority', (req, res) =>
{
    const taskId = req.body.taskId;
    const priority = req.body.priority;
    try
    {
        taskService.updatePriority(taskId, priority);
        res.status(200).send('Dados alterados com sucesso!!!');
    }
    catch(err)
    {
        res.status(400).send(`Erro ao alterar os dados no banco: ${err}`);
    }
})

app.put('/updateStatus', (req, res) =>
{
    const taskId = req.body.taskId;
    const status = req.body.status;
    try
    {
        taskService.updateStatus(taskId, status);
        res.status(200).send('Dados alterados com sucesso!!!');
    }
    catch(err)
    {
        res.status(400).send(`Erro ao alterar os dados no banco: ${err}`);
    }
})


app.listen(3001, ()=> {
    console.log('running on port 3001...');
});