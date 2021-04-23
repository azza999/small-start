# 파이썬

## dictionary 키값 체크

<table>
	<tr>
		<td>방법</td>
		<td>키가 존재한다면</td>
		<td>키가 존재하지 않는다면</td>
	</tr>
	<tr>
		<td>_dict.get('key')</td>
		<td>Value (_dict.key)</td>
		<td>None</td>
	</tr>
	<tr>
		<td>"key" in _dict</td>
		<td>True</td>
		<td>False</td>
	</tr>
</table>

## class 타입 체크

isinstance 사용

<pre>
<code>
isinstance([1,2,3], list)
isinstance("hello", str)
isinstance(1, int)
isinstance(1.5, float)
isinstance({"hi":"hello"}, dict)
</code>
</pre>

반환값 : True, False

## dict 순회

in 사용

<pre>
<code>
for key in _dict:
	print(key)
	print(_dict[key])
</code>
</pre>

## in을 사용한 array 순회

기본적으로 dict 순회와 동일.

하지만 enumerate를 이용하여 index 번호를 알 수 있음.

<pre>
<code>
for idx, item in enumerate(['a','b','c']):
	print('idx: {}, item: {}'.format(idx,item))
</code>
</pre>