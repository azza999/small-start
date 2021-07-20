# 깃 사용법

## git bash에서 아이디 비밀번호 저장

<pre><code>$ git config --global user.name 계정명
$ git config --global user.email 이메일
$ git config credential.helper store</code></pre>

윈도우 검색 > 자격 증명 > window 자격 증명 > github 항목 계정, 패스워드 입력  

or  

제어판 > 사용자 계정 > 자격 증명 > window 자격 증명 > github 항목 계정, 패스워드 입력  

완료 후 push 요청  

## add

### 기본 사용

<pre><code>git add .</code></pre>
<br><br>

### add 취소

<pre><code>git reset HEAD</code></pre>


## remote

### 등록된 remote 확인

<pre><code>git remote -v</code></pre>


### remote 등록

<pre><code>git remote add remote_name git_url</code></pre>

### remote 삭제

<pre><code>git remote remove remote_name</code></pre>
<br>
<br>

## branch

### branch 생성

<pre><code>git branch branch_name</code></pre>

### branch 목록 확인

<pre><code>git branch -v</code></pre>

### branch 이동

<pre><code>git checkout branch_name</code></pre>

### branch 병합

<pre><code> 기준이 되는 branch로 이동 후
git merge branch_name
(fast-forward 방식)</code></pre>

<br>
<br>

## reset & revert

### reset

mixed 모드 리셋

<pre><code>git reset HEAD^
(^: 이전 커밋을 의미, 상대 주소 개념으로 사용 가능 (HEAD^^, HEAD^^^...))</code></pre>
<br>
<br>

### revert

이전 상태로 돌아가는 새로운 commit

<pre><code>git revert HEAD
(되돌아갈 HEAD를 입력)</code></pre>
<br>
<br>

## git 설정 모음

### git 설정 목록 보기

<pre><code>git config -l [ --system | --local | --global | --worktree ]</code></pre>
<br>
<br>

### git 사용 에디터 설정

<pre><code>git config --global core.editor vim | nano | sublimetext | ...</code></pre>
<br>
<br>

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
<br><br>

## git default branch 변경

git의 기본적인 default branch는 master이다. github도 동일하게 이를 사용해왔지만, 요즘 이슈인 pc (political correctness)의 영향인지, master(주인)와 slave(노예)의 뜻을 가졌던 master을 main으로 변경했다. 하지만 git에는 여전히 first commit시 자동으로 master가 default branch가 된다.

<pre><code>git add .
git commit

git branch -m master main</code></pre>

기본적으로 first commit 전에 branch를 바꾸는 방법은 없었다. 대체 방안으로 first commit시 생성되는 branch를 단순히 main으로 바꿔주었다.