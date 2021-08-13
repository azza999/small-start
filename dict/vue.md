# Vue.js

몇년만에 다뤄보는 프레임워크

## 기본 구조

Vue는 컴포넌트 기반으로 구성되어 있다. 각 컴포넌트는 template 내부의 `html 부분`과 script 내부의 `script 부분`, 스타일을 표현하는 `style 부분`의 세 부분으로 구성되어 있다.  

<br><br>

## 다른 컴포넌트 사용하기

### 불러오기

1. 경로를 지정하여 해당 컴포넌트를 import 해야 한다.
2. components에 해당 컴포넌트를 정의해야 한다.
3. html 부분에 해당 컴포넌트 이름의 tag를 작성해야 한다.


_부모 컴포넌트_

```html
<template>
	<div>
		<comp1></comp1>
	</div>
</template>

<script>
	import Comp1 from "./components/Comp1"

	export default {
		components: {
			Comp1
		},
		data () {
			return {
				someData: null
			}
		},
		methods : {
			mtd1 () {
				return null
			}
		}
	}
</script>
```

<br><br>

### 데이터 넘겨주기

1.