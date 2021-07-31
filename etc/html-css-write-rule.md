# html css 코딩 규칙

## html

* DTD를 제외한 모든 html의 태그는 소문자로 작성합니다.
* html 태그의 모든 속성은 큰따옴표(")로 감싸며, 속성값은 소문자로 작성합니다.
* html 태그의 속성값은 snake_case로 작성하되, 각 단어 사이를 언더바(\_)가 아닌 하이픈(-)로 표기합니다. (하이픈 표기법을 사용합니다.)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body class="bg-white">
	<div id="main-wrapper" class="center bg-black"></div>
</body>
</html>
```
<br><br>

### TAG ID

* ID는 스타일 지정을 위해 사용될 수 없으며, DOM 조작을 위해서만 사용해야 합니다.
* ID는 DOM 내에서 유일해야 합니다.
<br><br>

### TAG CLASS

* CLASS는 스타일 지정을 위해서만 사용되어야 합니다.
* Javascript에서 사용하기 위한 Class의 경우 앞에 `js-`의 접두사를 붙여야 합니다.

```html
<div class="active bt-3 js-active"></div>
```
<br><br>

### 들여쓰기

* DTD, html, head, body의 태그는 항상 좌측에 붙여 씁니다.
* 위의 경우에 해당하지 않는 태그는 깊이에 따라 1탭 들여씁니다. 1탭의 크기는 4칸입니다.
* third-party view template(ejs, pug, django template)을 사용하는 경우, 직접 출력을 담당하지 않는 프로그래밍 언어(for, if 등)는 좌측에 붙여 쓰며, 해당 언어의 깊이에 따른 탭을 가집니다.

```ejs
<table>
	<tbody>
		<tr>
<% for (let i = 0; i < items.length; i++) { 
	let item = items[i]
%>

			<td><%= item.idx %></td>
			<td><%= item.title %></td>
			<td><%= item.hit %></td>
	<% if (item.uid = session.uid) { %>
			<td>삭제하기</td>
	<% } else { %>
			<td></td>
	<% } %>
<% } %>
		</tr>
	</tbody>
</table>
```
<br><br>

### 주석

* 주석 기호와 내용 사이에는 반드시 공백 한칸이 존재해야 합니다.
* 주석은 해당 내용의 시작 부분과 끝 부분에 보두 추가해야 합니다.

```html
<!-- 21. 07. 20. 광고 추가 -->

<ul>
	<li><a href="#">제휴사이트</a></li>
	<li><a href="#">협력사</a></li>
</ul>

<!-- 21. 07. 20. 광고 추가 -->
```
<br><br>

### 공백

* 태그 이름과 태그 속성, 태그 속성과 태그 속성 사이에 한개의 공백을 사용하며 그 이상의 공백은 사용하지 않습니다.
<br><br>

### 자바스크립트 선언

* 해당 스크립트가 웹 렌더링 이전에 필요한 정보라면 html의 head 태그 내부에 선언합니다. 하지만 head 태그 내부에 script를 선언하는 것은 지양해야 합니다.
* 해당 스크립트가 body 태그에 선언될 때는 모든 element 최 하단, `</body>`태그 이전에 선언되어야 합니다.

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="/script/jquery-3.2.1.js"></script>
</head>
<body>
	<main class="bg-black"></main>
	<script src="/script/main-page.js"></script>
</body>
</html>
```