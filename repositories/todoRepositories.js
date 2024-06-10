const {ToDo} = require('../models');

class todoRepositories {
    static async getAllToDo() {
        const allToDo = await ToDo.findAll();
        return allToDo;
    }
    static async getDetailToDo(params) {
        const detailToDo = await ToDo.findByPk(params);
        return detailToDo;
    }
    static async getToDoByTitle(params) {
        const todo = await ToDo.findOne({
            where : {
                title : params
            }
        });
        return todo;
    }
    static async addToDo(params) {
        const todo = await ToDo.create({
            title : params.title,
            description : params.description,
            duration_minute : params.duration_minute
        })
        return todo;
    }
    static async updateToDo(params) {
        const todo = await ToDo.findByPk(params.id);
        console.log(params.id);
        todo.set({
            title : params.title,
            description : params.description,
            duration_minute : params.duration_minute,
        });
        await todo.save();

        return todo;
    }
    static async deleteToDo(params) {
        const todo = await ToDo.findByPk(params);
        todo.destroy();
        return todo;
    }
}

 
module.exports = todoRepositories;
