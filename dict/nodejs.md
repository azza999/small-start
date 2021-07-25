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
	query: function(sql) {
		return conn.query(sql, callback)
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