const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.json()); // support json encoded bodies


// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'/dist/index.html'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
