# javascript

## 사용자 camera 접근

<pre><code>navigator.mediaDevices.getUserMedia(constraints)</code></pre>

### return type

`Promise`

resolve: mediastream  
reject: NotFoundError, NotAllowedError, Security Error. etc.  

[MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

## Object

_Object.assign(newobj, originobj1 [, originobj2, originobj3...])_

한개 이상의 개체를 newobj에 병합합니다. 기존에 있던 값은 새로운 값이 있다면 덮어써집니다.

```js
let obj = {
	prop1: 'a',
	prop2: 'aa'
}

let obj2 = {
	prop1: 'b',
	prop3: 'bb'
}

Object.assign(obj, obj2)

/*
obj = {
	prop1: 'b',
	prop2: 'aa',
	prop3: 'bb'
}
*/
```
<br><br>

_Object.keys_

객체의 키 배열을 반환합니다.

```js
let obj = {
	a: 'aa',
	b: 'bb',
	c: 'cc',
	1: 11
}

Object.keys(obj)
//['1','a','b','c'] 키는 문자열로, 사전식 정렬 순서로 반환됨

```
<br><br>

_Object.values_

객체의 값 배열을 반환합니다.

```js
let obj = {
	a: 'aa',
	b: 'bb',
	c: 'cc',
	1: 11
}

Object.values(obj)
//[11,'aa','bb','cc'] 사전식 정렬 순서로 반환

```
<br><br>

_Object.entries, Object.fromEntries_

객체의 키,값을 이중배열 형태로 반환합니다.
키,값 형태의 이중배열을 객체 형태로 반환합니다.

```js
let obj = {
	a: 'aa',
	b: 'bb',
	c: 'cc',
	1: 11
}

let arr = Object.entries(obj)
//[['1',11],['a','aa'],['b','bb'],['c','cc']] 키,값 형태의 이중배열로 반환됨
Object.fromEntries(arr)
// {a: 'aa',b: 'bb',c: 'cc',1: 11}
```
<br><br>

## Symbol의 사용

Symbol은 라이브러리 등에서 다른 객체가 접근하지 못하도록 하기 위해 사용. 은닉화 패턴과 연관

<br><br>

## canvas resize

js에서 `canvas.width = canvas.width` 등으로 canvas 크기를 수정하면 기존 context는 초기화됨. 이미 그려져 있던 컨텐츠부터, fillStyle같은 속성까지 모두!