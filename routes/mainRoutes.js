const express = require('express');
const todoController = require('../controllers/todoControllers.js');

const router = express.Router();

router.get('/allToDos',todoController.getAllToDo);
router.get('/detailToDo/:id',todoController.getDetailToDo);

router.post('/addToDo',todoController.addToDo);

router.put('/updateToDo/:id',todoController.updateToDo);

router.delete('/deleteToDo/:id',todoController.deleteToDo);

module.exports = router;