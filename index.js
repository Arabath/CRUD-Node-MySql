const express = require('express');
const morgan = require('morgan');

//Initializations

const app = express();

//Settings
app.set('Port', process.env.PORT || 4000 )

//Middlewares
app.use(morgan('dev'))

//Global Variables

//Routes

//Public

//Starting the server

app.listen(app.get('Port'), () => {
    console.log(`Server is running on port ${app.get('Port')}`)
})