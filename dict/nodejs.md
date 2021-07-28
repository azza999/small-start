# Node.js

## mysql 연동

```javascript

const mysql = require('mysql')
var db_info = {
	host: 'localhost',
	port: '3306', //default
	user: 'web',
	password: 'password',
	database: 'db_name'
}

const DBcon = {
	init: function() {
		return connection mysql.createConnection(db_info);
	},
	connect: function(conn) {
		conn.connect(function(err) {
			if (err) {console.log(err)}
		})
	},
	query: function(sql, params, callback) {
		return conn.query(sql, params, callback)
	}
}

// 사용
const conn = DBcon.init()
conn.connect()

let sql = 'SELECT * FROM users WHERE user_name = ? AND user_age < ?'

conn.query(sql, [name, age], function(err, rows, fields) {
	console.log(err, rows, fields)
})

```
<br><br>

## express에서 데이터를 전달받는 법

__req.query__

```javascript
router.get('/', function(req, res, next) {
	console.log(req.query.id)
})
```

사용자 요청 : http://localhost?id=user_id
결과값 : user_id

<br><br>
__req.params__

```js
router.get('/:category/:boardId', function(req, res, next) {
	console.log(req.params.category, req.params.boardId)
})
```

사용자 요청 : http://localhost/fun/100
결과값 : fun, 100

<br><br>
__req.body__

```js
router.post('/login_process', function(req, res, next) {
	console.log(req.body.password)
})
```

사용자 요청 : http://localhost/login_process
결과값 : my_passowrd

req.body는 body parser가 설치되어 있어야 사용 가능하다. form에서 method=post로 설정했을 때 사용할 수 있다.
<br><br>

## 미들웨어가 도대체 뭐야?

미들웨어는 express에서 결과를 내기 전까지 거쳐가는 말 그대로 middle에 위치하는 software 이다. 최종 결과값을 내기 전까지 전까지 프로그래머가 정의한 미들웨어를 거쳐간다. 미들웨어는 app.use 혹은 app.METHOD(app.get, app.post 등)처럼 선언할 수 있다. app.use를 사용한다면 모든 요청에 대해 해당 미들웨어를 거쳐가고, app.METHOD와 경로를 정의하면 해당 경로로 요청이 올때만 처리하는 방식이다. 같은 경로로 여러개의 미들웨어를 정의할 수도 있다. 각각의 미들웨어는 다음 미들웨어로 작업을 toss할 수도 있고, 자신이 완료할 수도 있다.

간단한 예시를 통해 알아보자.

```js
const express = require('express');
const app = express();

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
app.use(requestTime);
app.use(veryLoooongWork);

app.get('/', function(req, res, next) {

	let text = 'work start at ' + req.requestTime
	text += '<br>work end at' + new Date()

	res.status(200).send(text)
});


app.listen(3000);
```

요청을 받아들이면, `requestTime`, `veryLoooongWork`라는 미들웨어를 거치고, http://localhost:3000/라는 경로로 요청을 했을 경우 `app.get('/')`라는 미들웨어에 진입하게 된다. veryLoooongWork 미들웨어는 다음 미들웨어로 넘어가기 전에 3초의 시간을 가진다. 또 한가지 주의깊게 봐야할 점은, __한 요청 내에서 req, res 객체는 공유된다는 것이다.__
<br><br>

## REQUEST 객체

