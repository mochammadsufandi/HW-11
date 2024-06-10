const app = require('../app');
const request = require('supertest');
const {sequelize,Sequelize} = require('../models');
const {queryInterface} = sequelize;
const postBody = require('./postBody.json');
const updateBody = require('./updateBody.json');


describe('GET allToDo', () => {

    it("List All", (done) => {
        request(app)
            .get("/API/allToDos")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                const allToDos = response.body.ToDos;
                expect(allToDos.length).toEqual(5);

                const todo = allToDos[0];
                expect(Object.keys(todo).length).toEqual(3);
                expect(todo.id).toBeTruthy();
                expect(todo.title).toEqual('Get Up');
                expect(todo.description).toEqual('Get Up');

                done()
            })
            .catch(err => {
                console.log(err)
            })
    })

    it('Wrong End Point', async() => {
        try {
            const response = await request(app).get("API/ssdjiw");
            expect(response.status).toEqual(404);
        } catch(err) {
            console.log(err);
        }
    })
})

describe('GET Detail ToDo', () => {
    
    it("Detail", async () => {
        try {
            const response =  await request(app)
                .get("/API/detailToDo/1")
                .set('Accept',/json/)
            expect(response.status).toEqual(200);
            const todo = response.body.ToDo;
            expect(todo.id).toEqual(1);

        } catch(err) {
            console.log(err);
        }
    })

    it("Not Found", (done) => {
        request(app)
            .get("/API/detailToDo/6")
            .expect('Content-Type', /json/)
            .expect(404)
            .then((response) => {
                const message = response.body.message;
                expect(message).toEqual('Error Not Found');

                done()
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe("Add ToDo", () => {
    it("Success AddToDo", (done) => {
        request(app)
            .post("/API/addToDo")
            .send(postBody)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                const message = response.body.message;
                expect(message).toEqual('Add ToDo is success');

                done()
            })
            .catch(err => {
                console.log(err)
            })
    })

    it('Already Exist', (done) => {
        request(app)
            .post("/API/addToDo")
            .send(postBody)
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                const message = response.body.message;
                expect(message).toEqual('Input is Already Exist');

                done()
            })
            .catch(err => {
                console.log(err)
            })
    })
})

describe('Update ToDo', () => {
    
    it('Success Update ToDo', (done) => {
        request(app)
            .put("/API/updateToDo/5")
            .send(updateBody)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                const message = response.body.message;
                expect(message).toEqual('Update ToDo is Success');

                done()
            })
            .catch(err => {
                console.log(err)
            })

    })

    it('Success Update ToDo', (done) => {
        request(app)
            .put("/API/updateToDo/1")
            .send(updateBody)
            .expect('Content-Type', /json/)
            .expect(400)
            .then((response) => {
                const message = response.body.message;
                expect(message).toEqual('Input is Already Exist');

                done()
            })
            .catch(err => {
                console.log(err)
            })

    })
})

describe('Delete ToDo', () => {

    it('Success Delete ToDo', (done) => {
        request(app)
        .delete("/API/deleteToDo/5")
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            const message = response.body.message;
            expect(message).toEqual('Delete ToDo is Success');

            done()
        })
        .catch(err => {
            console.log(err)
        })
    })

    it('Not Found', (done) => {
        request(app)
        .delete("/API/deleteToDo/10")
        .expect('Content-Type', /json/)
        .expect(404)
        .then((response) => {
            const message = response.body.message;
            expect(message).toEqual('Error Not Found');

            done()
        })
        .catch(err => {
            console.log(err)
        })
    })
})