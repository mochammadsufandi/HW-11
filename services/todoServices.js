const todoRepositories = require('../repositories/todoRepositories.js');

class todoServices {
    static async getAllToDo() {
        const getAllToDo = await todoRepositories.getAllToDo();

        if(getAllToDo.length === 0) throw({name : 'Not Found'});
        const allToDo = getAllToDo.map((todo)=>{
            return {
                id : todo.id,
                title : todo.title,
                description : todo.description
            }
        })
        return allToDo;
    }

    static async getDetailToDo(params) {
        if(typeof(+params) !== 'number') throw({name : 'InvalidInput'});
        const detailToDo = await todoRepositories.getDetailToDo(params);

        if(!detailToDo) throw({name : 'Not Found'});
        return detailToDo;
    }
    static async addToDo(params) {
        if(!params.title || !params.description || !params.duration_minute) throw({name : 'InvalidInput'});
        const existingToDo = await todoRepositories.getToDoByTitle(params.title);
       
        if(existingToDo) throw({name : 'AlreadyExist'});
        const todo = await todoRepositories.addToDo(params);

        return todo;
    }
    static async updateToDo(params) {
        if(!params.id) throw({name : 'InvalidInput'});
        const existingToDo = await todoRepositories.getDetailToDo(params.id);

        if(!existingToDo) throw({name : 'Not Found'});
        const checkToDo = await todoRepositories.getToDoByTitle(params.title);

        if(params.title !== existingToDo.title) {
            if(checkToDo) throw({name : 'AlreadyExist'});
        } 

        const updateToDo = await todoRepositories.updateToDo(params);
        const todo = {existingToDo,updateToDo};
        return todo;
    }
    static async deleteToDo(params) {
        if(!params) throw({name : 'InvalidInput'});
        const existingToDo = await todoRepositories.getDetailToDo(params);

        if(!existingToDo) throw({name : 'Not Found'});
        const todo = await todoRepositories.deleteToDo(params);
        return todo;
    }
}

module.exports = todoServices;