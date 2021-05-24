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

## 로지스틱 회귀 모델 사용

기본적인 로지스틱 회귀 모델의 사용법이다.

<pre>
<code>

from sklearn.linear_model import LogisticRegression

lr = LogisticRegression()

# 훈련용 데이터 값에 fit
lr.fit(train_scaled, train_target)

# lr.score 메서드로 점수를 출력
print(lr.score(train_scaled, train_target))
print(lr.score(test_scaled, test_target))

</code>
</pre>

## 선형 회귀류 모델의 계수와 절편

선형 회귀에서의 계수(기울기)와 절편을 출력한다.

<pre>
<code>

# 선형 회귀 모델의 계수
print(model.coef_)

# 선형 회귀 모델의 계수
print(model.intercept_)

</code>
</pre>

![선형 회귀 모델 이미지](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80#/media/%ED%8C%8C%EC%9D%BC:Normdist_regression.png)  

## 사이킷런 결정 트리 모델 확인하기

사이킷런 결정 트리 모델을 학습한 후에, matplotlib과 연계하여 이 트리를 볼 수 있다.

<pre>
<code>

# matplotlib
import matplotlib.pyplot as plt

# plot_tree
import sklearn.tree import plot_tree

plt.figure(figsize=(10,7))

plot_tree(DecisionTreeClassifier, max_depth=1, filled=True, feature_names['특성1','특성2','특성3'...])

plt.show()


</code>
</pre>

## 지니 불순도

결정 트리 모델에서 이중 분류를 할때 사용하는 불순도 측정 방식

> 지니 불순도 = 1 - (음성 클래스 비율^2 + 양성 클래스 비율^2)

만약 정확하게 50개의 음성 클래스와 50개의 양성 클래스가 있다면

> gini = 1 - ((50/100) ^ 2 + (50/100) ^ 2) = 1 - (0.25 + 0.25) = 0.5

따라서 지니 불순도가 0 혹은 1에 가까울수록 데이터는 순수한 상태이다.

## 결정 트리 모델의 전처리

사이킷런 결정 트리 모델에서 각 노드를 나눌 때, 한번에 한가지의 특성만을 사용하기 때문에 결정 트리 모델에서는 전처리를 할 필요가 없다.  
지니/엔트로피 불순도를 기준으로 분류하기 때문에 전처리 하기 전과 후가 같은 결과가 나온다.
 
## 결정 트리 모델에서 특성 중요도 확인하기

<pre>
<code>
print(DecesionTreeClassifier.feature_importances_)
</code>
</pre>

## 교차 검정

훈련 세트를 한번만 만들어 사용하고, 테스트 세트로만 점수를 평가할 수 있다면 훈련 세트와 테스트 세트에 과대적합된 모델이 될 것이다. 이럴때 주어진 데이터를 K번 분할해서 서로 교차로 훈련 세트와 검증 세트로 사용하는 것이 K-폴드 교차 검증이다. 사이킷전에서는 이를 위한 내장 메서드인 cross_validate를 사용한다.

<pre>
<code>
from sklearn.model_selection import cross_validate

# 교차 검정을 진행할 횟수 지정
n = 10
scores = cross_validate(dt, train_input, train_target, cv=n)
print(scores)
</code>
</pre>

## Splitter

교차 검정을 진행할 때, 기본적으로 cross_validate 메서드는 순서대로 자료를 나눈다. 따라서 교차 검증시 이 자료들을 골고루 섞어줄 필요가 있는데, 이는 cross_validate 메서드의 교차 검증 횟수를 담당하는 cv 매개 변수에 Splitter 객체를 담아서 메서드를 호출하면 된다.

<pre>
<code>
from sklearn.model_selection import cross_validate, StratifiedKFold

cross_validate(dt, train_input, train_target, cv = StratifiedKFold())
</code>
</pre>


## 그리드 서치

훈련 알고리즘을 사용할 때, 각 알고리즘별로 필요한 '사람이 개입하는' 값(하이퍼파라미터)들이 있다. 예를 들면 결정 트리 모델에서의 깊이를 나타내는 max_depth 인자라던지, 최근접 이웃 분류에서 인접 값들의 범위인 n_neighbors, LogisticRegression의 규제를 제어하는 C 등 한번의 알고리즘 수행에도 많은 하이퍼파라미터가 사용된다. 이때 하이퍼 파라미터는 한개씩 개별적으로 설정하지만, 이 값들은 다른 값들에도 영향을 미친다. 따라서 이 값들에 대한 세팅을 그리드처럼 펼쳐놓고, 각각의 시점을 시험해 보아야 한다. 이 과정을 '그리드 서치'라고 한다.

<pre>
<code>
# 그리드 서치 수행

from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier

# min_impurity_decrease : 노드를 분할하기 위한 불순도 감소 최소량
params = {
	'min_impurity_decrease': np.arange(0.0001, 0.001, 0.0001),
	'max_depth': range(5, 20, 1),
	'min_samples_split': range(2, 100 ,10)
}

gs = GridSearchCV(DecisionTreeClassifier(random_state=42), params, n_jobs=-1, cv=5)

gs.fit(train_input, train_target)

#최적의 결과 보기

# 최적의 훈련 알고리즘 (일반 훈련 객체처럼 사용 가능)
print(gs.best_estimator_)

# 인자로 전달한 값들 중 최적의 하이퍼파라미터
print(gs.best_params_)

# 전달한 값들의 평균점수
print(gs.cv_results_['mean_test_score'])

</code>
</pre>

매개변수 | 비고
n_jobs | 병렬 처리에 사용할 CPU 코어 수 (-1은 전부 사용을 의미)
cv | 교차 검증할때 사용할 폴드 수 (기본값은 5)

## 랜덤 서치

그리드 서치를 실행할 때, 하이퍼 파라미터의 범위 또한 결국 인위적으로 설정된 값이다. 따라서 이 값을 보다 랜덤하게 실행하기 위해서 랜덤 서치를 사용한다.

<pre>
<code>
from sklearn.model_selection import RandomizedSearchCV
from sklearn.tree import DecisionTreeClassifier
from scipy.stats import uniform, randint

params = {'min_impurity_decrease': uniform(0.0001, 0.001),
		  'max_depth': randint(20, 50),
		  'min_samples_split': randint(2, 25),
		  'min_samples_leaf': randint(1,25)
		}

gs = RandomizedSearchCV(DicisionTreeClassifier(), params, n_iter=100, n_jobs=-1)
gs.fit(train_input, train_target)

print(gs.best_estimator_.score(test_input, test_target))

'''
최적의 알고리즘	: best_estimator_
최적의 파라미터	: best_params_
결과값			: cv_results_

'''

</code>
</pre>