# 깃 사용법

## git bash에서 아이디 비밀번호 저장

<pre><code>$ git config --global user.name 계정명
$ git config --global user.email 이메일
$ git config credential.helper store</code></pre>

윈도우 검색 > 자격 증명 > window 자격 증명 > github 항목 계정, 패스워드 입력  

or  

제어판 > 사용자 계정 > 자격 증명 > window 자격 증명 > github 항목 계정, 패스워드 입력  

완료 후 push 요청  


## remote

### 등록된 remote 확인

<pre><code>git remote -v</code></pre>


### remote 등록

<pre><code>git remote add remote_name git_url</code></pre>

### remote 삭제

<pre><code>git remote remove remote_name</code></pre>


## git 스테이징

git은 세가지의 영역이 있다.

__워킹 디렉터리__ : 우리가 직접 만질 수 있는 영역으로 소스 코드를 작성, 수정하는 영역  
**스테이징 영역** : git add를 실행했을 때 이동되는 영역으로 소스 코드의 상태 정보를 볼 수 있는 영역 (added, modified)  
__저장소 영역__ : git commit 명령을 실행했을 때 이동되는 영역으로 최정족으로 코드가 저장되는 영역  

![git staging](https://raw.githubusercontent.com/azza999/small-start/main/assets/210702/git-staging.png)


파일은 4가지의 상태로 관리된다.

__Untracked__ : 파일이 워킹 디렉터리에서 수정중인 상태  
__Unmodified__ : 신규로 파일이 추가되었을 때(new file)  
__Modified__ : 파일이 추가(add, commit)된 이후 스테이징 영역 이상에서 수정되었을 때의 상태  
__Staged__ : 파일이 Staging 영역에 반영된 상태  

위의 내용은 `git status`를 통해 확인할 수 있다.