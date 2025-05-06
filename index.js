const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerController = require('./controller/router');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routerController);

app.listen(port, () => {
    console.log(`the web running on localhost:${port}`)
})