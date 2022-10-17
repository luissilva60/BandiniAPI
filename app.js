var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.listen(port, () => {
    console.log(`Servidor rodando na porta de conexão ${port}.`)
})




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoutes');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
