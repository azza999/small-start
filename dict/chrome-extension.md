# 크롬 확장 프로그램 만들기

## 새 창 열기

_chrome.tabs.create()_ 이용  

`_Promise_`  

__active__  
(boolean, true)  
생성된 탭을 활성화 할지 여부

__index__  
(number)  
생성할 탭의 위치 (default: 맨 마지막 탭 뒤)

__openerTabId__  
(number)  
같은 윈도우에 위치시킬 탭의 ID  
여러개의 윈도우가 있을때, openerTabid가 지정되면 해당 탭의 window에 새로운 탭을 생성한다.

__url__  
(string)  
새로 생성할 탭의 web 주소

__windowId__  
(number)  
새로 생성할 탭의 윈도우 id


`return/callback`  
__tabid__  
생성된 탭의 id


<pre>
<code>
chrome.tabs.create({
    active: true,
    index: 0,
    url: 'https://www.naver.com',
},(tabid) => {
	console.log(`tabid is ${tabid}`)
});
</code>
</pre>