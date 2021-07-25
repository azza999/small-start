# MYSQL

## create database

<pre><code>create database database_name;</code></pre>
<br><br>

## create table

<pre><code>create table table_name(
	col1 int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	col2 varchar(20),
	col3 datetime(),
	CONSTRAINT foreign_key col2 REFERENCES table2 column1
);</code></pre>
<br><br>

## ALTER table

__칼럼 추가__

<pre><code>ALTER TABLE table_name ADD COLUMN col1 varchar(10) NOT NULL;</code></pre>
<br><br>

__칼럼 수정__

<pre><code>ALTER TABLE table_name MODIFY COLUMN col1 varchar(20) NULL;</code></pre>
<br><br>

__칼럼 삭제__

<pre><code>ALTER TABLE table_name DROP COLUMN col1;</code></pre>
<br><br>

__칼럼 이름수정__

<pre><code>ALTER TABLE table_name CHANGE COLUMN col1 col2;</code></pre>
<br><br>

__테이블 이름 변경__

<pre><code>ALTER TABLE table_name RENAME new_name;</code></pre>
<br><br>

## Foreign Key

boards 테이블의 user_id와 user 테이블의 user_id에 외래키 설정 및 user 테이블의 user 삭제시 board에 게시글도 삭제되도록 설정

```sql
CREATE TABLE boards (
	board_id int(11) NOT NULL PRIMARY KEY,
	user_id varchar(20) NOT NULL,
	board_content varchar(1000) NOT NULL,
	FOREIGN KEY(user_id) references users(user_id)
	on DELETE CASCADE
)

```

## Ubuntu - Mysql ROOT USER GRANT not working

처음 mysql DB를 설치하고 root 유저에서 새로 유저를 생성 후 GRANT시 다음과 같은 에러가 발생했다.

```plain
ERROR 1410 (42000): You are not allowed to create a user with GRANT
```

다음과 같은 방법으로 해결했다.

```mysql
CREATE USER 'root'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
```

ROOT USER을 다시 정의한 뒤, ROOT에게 권한을 주니 해결되었다.
<br><br>

##