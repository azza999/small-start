const express = require('express');
const app = express();

const myLogger = function(req, res, next) {
	console.log('LOGGED');
	next();
}

const requestTime = function(req, res, next) {
	req.requestTime = new Date()
	next();
}

const veryLoooongWork = function(req, res, next) {
	console.log('work start!')
	setTimeout(function() {
		console.log('work done!')
		next()
	}, 3000)
}

app.use(myLogger);
app.use(requestTime);
app.use(veryLoooongWork);

app.get('/', function(req, res, next) {

	let text = 'work start at ' + req.requestTime
	text += '<br>work end at' + new Date()

	res.status(200).send(text)
});


app.listen(3000);