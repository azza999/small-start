# 싸이파이 사용하기

사이파이는 파이선의 과학 라이브러리로 다양한 수학, 과학적 클래스를 제공한다.

## 랜덤값 뽑기

scipy에서 랜덤한 값을 뽑을 때, 정수값은 `randint`, 실수값은 `uniform`을 사용한다.

<pre>
<code>

from scipy.stats import randint

# 0 이상 10 미만 랜덤한 정수값 생성

# randint 객체 생성
rand = randint(0,10)

# 100개의 난수 생성
result = rand.rvs(100)

# 결과값 확인
np.unique(result, return_counts=True)

'''
결과값
(array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
 array([14,  7,  6, 15, 12, 11, 15,  9,  4,  7]))
'''

# uniform과 randint의 사용법은 유사하다.

</code>
</pre>

