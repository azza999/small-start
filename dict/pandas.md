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