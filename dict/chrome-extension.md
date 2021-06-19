# 크롬 확장 프로그램 만들기

## 새 창 열기

_chrome.tabs.create()_ 이용  

`Promise`  

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


*__return/callback__*
__tabid__  
생성된 탭의 id


<pre>
<code>
chrome.tabs.create({
    active: true,
    index: 0,
    url: 'https://www.naver.com',
},(tabid) => {
	
});
</code>
</pre>

## 탭 접근

_chrome.tabs.query()_ 이용

`Promise`  

__active__  
(boolean)  
해당 윈도우에서 active (보여지고 있는) 탭  

__audible__  
(boolean)  
해당 윈도우에서 소리를 재생할수 있는 탭  

__autoDiscardable__  
(boolean)  
리소스 부족시 자동으로 닫을 수 있는 탭  

> auto discarding은 chrome://flags에서 설정할수 있는 실험 기능으로, chrome에서 메모리 부족시 자동으로 사용하지 않는 탭을 메모리로부터 지우는 기능입니다. 사용자가 탭을 다시 클릭하면 새로 load하게 됩니다.


__currentWindow__  
(boolean)  
현재 열려있는 윈도우  

__discarded__  
(boolean)  
discard되어있는 탭 (상단 설명 참고)  

__groupId__  
(number)  
탭이 속해있는 그룹의 ID, 그룹에 속해있지 않은 경우 tabGroups.TAB_GROUP_ID_NONE 상수  

__highlighted__  
(boolean)  
하이라이트 표시된 탭 (여러 윈도우가 있을 경우 모든 active 탭을 선택합니다.)  

__index__  
(number)  
탭의 위치 (여러 윈도우가 있을 경우 해당 index에 위치하는 모든 탭을 선택합니다.)  

__lastFocusedWindow__  
(boolean)  
마지막으로 선택되었던 윈도우의 모든 탭

__muted__  
(boolean)  
음소거 처리된 탭  

__pinned__  
(boolean)  
고정된 탭  

__status__  
(TabStatus)  
탭의 로딩 상태  

__title__  
(string)  
패턴이 tab의 title과 일치하는지 확인합니다. tabs 권한이 없다면 무시됩니다.  

__url__  
(string, string[])  
패턴이 ![URL patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)와 일치하는지 확인합니다. tabs 권한이 없다면 무시됩니다.  


__windowId__  
(number)  
윈도우의 ID  

__windowType__  
(WindowType)  
윈도우의 타입  

> query에 빈 객체를 넣을 경우 모든 탭을 선택합니다.

<pre>
<code>
chrome.tabs.query({
    active: true
}, async (tabid) => {
    console.log(tabid)
})
</code>
</pre>