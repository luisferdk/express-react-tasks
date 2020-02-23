const express = require('express');
const router = express.Router();
const { db } = require('../database');
const { mockTasks } = require('../utils/mocks/tasks');

router.get('/', async (req, res) => {
  res.json({
    "message": "List Tasks",
    tasks: mockTasks
  });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const task = mockTasks.find(task => task.id == id);
  res.json({
    "message": `Task ${id}`,
    task: task
  });
});

router.post('/', async (req, res) => {
  const task = req.body;
  res.json({
    "message": "Task Created",
    task: task
  });
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  let task = mockTasks.find(task => task.id == id);
  task = { ...task, ...newData };
  res.json({
    "message": `Task ${id} Updated`,
    task: task
  })
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  res.json({
    "message": `Task ${id} Deleted`,
    task: id
  })
});

module.exports = router;