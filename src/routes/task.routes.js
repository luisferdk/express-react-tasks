const express = require('express');
const router = express.Router();

const { getTasks, findTask, createTask, updateTask, deleteTask } = require('../store/tasks');
const { mockTasks } = require('../utils/mocks/tasks');

router.get('/', async (req, res) => {
  const tasks = await getTasks();
  res.json({
    "message": "List Tasks",
    tasks: tasks
  });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const task = await findTask(id);
  res.json({
    "message": `Task ${id}`,
    task: task
  });
});

router.post('/', async (req, res) => {
  const newTask = req.body;
  const task = await createTask(newTask);
  res.json({
    "message": "Task Created",
    task: task
  });
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  const task = await updateTask(id, newData);
  res.json({
    "message": `Task ${id} Updated`,
    task: task
  })
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await deleteTask(id);
  res.json({
    "message": `Task ${id} Deleted`,
    task: id
  })
});

module.exports = router;