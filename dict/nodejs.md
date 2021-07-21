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