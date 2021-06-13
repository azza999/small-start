# pandas, DataFrame 정리

## 데이터프레임 정보 보기

<pre>
<code>
# 기본적인 정보 보기 / 데이터 타입, 빈칸 여부 등
DataFrame.info()

# 값에 대한 정보 보기 / 평균, 중위값, 최대값 등
DataFrame.describe()

</code>
</pre>


## 데이터프레임 컬럼 뽑아내기

<pre>
<code>
# data의 컬럼 : name, age, sex, hobby, job

basic = dt[['name','age']]
# basic : name, age

jobs = dt[['job']]
# jobs : job

</code>
</pre>


## numpy 배열에서 최고값 뽑기

<pre>
<code>
import numpy as np

arr = [1, 2, 3, 4, 5]
np.argmax(arr)
</code>
</pre>


## np.arange 사용하기

파이썬의 range와 같지만 range는 정수만 사용 가능

<pre>
<code>
import numpy as np
small_number = np.arange(0.01, 0.1, 0.01)

# 0.01부터 0.1까지 0.01씩 증가
# small_number : [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09]
</code>
</pre>


## 불리언 인덱싱
---

> arr = [1, 2, 3, 4, 5]
> booleans = [True, False, True, False, False]
> print(arr[booleans])
>
> result : [1, 4]

파이썬 넘파이 배열에서는 타겟 배열에서 같은 차원의 boolean 값을 담은 배열을 인덱스로 사용할 수 있다.

> arr = np.array([
					[1,2,3,4,5],
					[11,22,33,44,55],
					[111,222,333,444,555]
				])
> booleans = np.array([
					[True,False,False,True,False],
					[True,False,False,True,True],
					[True,False,True,True,False]
				])
> print(arr[booleans])
>
> result : [1, 4, 11, 44, 55, 111, 333, 444]

2차원 이상에서도 가능하다.