# 사이킷런 정리


## 특성 표준화
각 특성을 비교할 때, 특성을 표준화하지 않으면 각 타겟 도메인간의 차이가 심해져 정확하지 않은 값이 나올 수 있다.  

ex) 강아지의 크기와 무게로 종을 판별하는 모델을 만들었다고 하면, 키와 몸무게의 단위가 다르고, 강아지 종 사이에 격차가 커지기 때문에 이를 표준화 할 필요가 있다.  

<pre>
<code>

from sklearn.preprocessing import StandardScaler
ss = StandardScaler()
ss.fit(inputs)
scaled = ss.transform(inputs)

# input은 pandas DataFrame

</code>
</pre>

## input과 target을 훈련용과 테스트용으로 나누기
input 값들과 (키, 몸무게 등의 특성값) target(시츄, 시바견, 진돗개 등의 결과값)값을 간단하게 나눌 수 있는 방법이 있다.

<pre>
<code>
from sklearn.model_selection import train_test_split

train+input, test_input, train_target, test_target = train_test_split(data, target, test_size=0.2, random_state=0)

# test_size : 검증 모델로 사용할 데이터의 비율 설정
</code>
</pre>