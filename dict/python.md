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


## in을 사용한 list 순회

기본적으로 dict 순회와 동일.

하지만 enumerate를 이용하여 index 번호를 알 수 있음.

<pre>
<code>
for idx, item in enumerate(['a','b','c']):
	print('idx: {}, item: {}'.format(idx,item))
</code>
</pre>


## sleep

time 라이브러리를 사용한다.

<pre>
<code>
from time import sleep

print("wait 5 seconds...")
sleep(5)
print("done!")
</code>
</pre>


## 파이썬 키보드 키값으로 입력받기

keyboard 라이브러리를 사용한다.

<pre>
<code>
import keyboard
import time

while True:
		if keyboard.is_pressed(75):
			print("Left")
			time.sleep(0.1)
		if keyboard.is_pressed(77):
			print("Right")
			time.sleep(0.1)
		if keyboard.is_pressed(80):
			print("Down")
			time.sleep(0.1)
		if keyboard.is_pressed(72):
			print("Up")
			time.sleep(0.1)
		if keyboard.is_pressed(13):
			print("enter")
			time.sleep(0.1)
</code>
</pre>

키보드 입력값은 정수 혹은 문자열이 될 수 있다.
`print(keyboard.key_to_scan_codes('up'))` 메서드를 통해 문자열과 키코드 매핑을 확인할 수 있다.
<br><br>

## 파이썬 push, pop과 list control

```
# push
list.append(x)

# pop (i번째 요소 pop 가능)
list.pop([i])

# i 위치에 x 삽입
list.extend(i,x)

# x 요소를 삭제, 없으면 Error를 던짐
list.remove(x)
```
<br><br>

## 파이썬 대소비교 정확하지 않을 때 팁

대소비교하는 데이터 타입이 문자열은 아닌지 확인해 보자...