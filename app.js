require('dotenv').config();
const express = require('express');
const router = require('./routes/mainRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/API',router);
app.use(errorHandler);

// app.listen(PORT,()=>{
//     console.log(`App is listening on port : ${PORT}`);
// })

module.exports = app;