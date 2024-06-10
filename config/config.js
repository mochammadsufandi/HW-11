require('dotenv').config();

const config = {
    
    development : {
        username : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PASSWORD,
        database : process.env.POSTGRES_DB,
        host : process.env.HOST,
        dialect : 'postgres',
        port : process.env.POSTGRES_PORT
    },
    
    test : {
        username : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PASSWORD,
        database : process.env.POSTGRES_DB_TEST,
        host : process.env.HOST,
        dialect : 'postgres',
        port : process.env.POSTGRES_PORT
    },

}

module.exports = config;