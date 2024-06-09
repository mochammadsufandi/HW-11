const todoServices = require('../services/todoServices.js');

class todoController {
    static async getAllToDo (req,res,next) {
        try {
            const allToDo = await todoServices.getAllToDo();
            res.status(200).json({
                message : 'Request Accepted',
                ToDos : allToDo
            })

        } catch(err) {
            next(err)
        }
    }
    static async getDetailToDo (req,res,next) {
        try {
            const id = req.params.id;
            console.log(req.body);
            const detailToDo = await todoServices.getDetailToDo(id)
            res.status(200).json({
                message : `Request Accepted, id : ${id}`,
                ToDo : detailToDo
            })

        } catch(err) {
            next(err)
        }
    }
    static async addToDo (req,res,next) {
        try {
            const{title,description,duration_minute} = req.body;
            const objectAddToDo = {title,description,duration_minute}
            console.log(objectAddToDo);
            const todo = await todoServices.addToDo(objectAddToDo);
    
            res.status(200).json({
                message : 'Add ToDo is success',
                ToDo : todo
            })

        } catch(err) {
            next(err);
        }
    }
    static async updateToDo (req,res,next) {
        try {
            const id = req.params.id; 
            const {title,description,duration_minute} = req.body;
            const updateTodo = await todoServices.updateToDo({
                id,title,description,duration_minute
            });
            
            res.status(200).json({
                message : 'Update ToDo is Success',
                previousToDO : updateTodo.existingToDo,
                nextToDO : updateTodo.updateToDo
            })

        } catch(err) {
            next(err);
        }
    }
    static async deleteToDo (req,res,next) {
        try  {
            const id = req.params.id;
            const todo = await todoServices.deleteToDo(id);

            res.status(200).json({
                message : 'Delete ToDo is Success',
                todoDelete : todo
            })

        } catch(err) {
            next(err);
        }
    }
}


module.exports = todoController;