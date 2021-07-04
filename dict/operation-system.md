# 운영체제

## 포트에 권한 부여

1 ~ 1024 포트는 well-known 포트로, 일반 유저는 사용할 수 없다. 하지만 들어오는 요청을 redirect할 수 있다.

centos 7+)
<pre><code>firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=8080 --permanent</code></pre>



## sort 사용


sort는 입력받은 문자열을 정렬해주는 프로그램이다. 입력은 파일, pipe된 문자열 등이 모두 가능하다.

간단히 사용할 수 있는 sort지만, 몇가지 사항을 더 알면 똑똑한 활용이 가능하다.


<pre><code>-k, --key=KEYDEF</code></pre>


`KEYDEF`에 해당하는 KEY를 사용한다. `KEYDEF`는 다음과 같은 규칙을 지닌다.


> F[.C][OPTS][,F[.C][OPTS]]  
> F : 사용할 필드의 위치 (기본적으로 공백으로 구분) (Default : 1)  
> C : 필드 내의 문자 위치 (Default : 1)  
> 앞의 F[.C]는 정렬에 사용할 시작 위치고, 뒤의 [,F[.C]]는 끝 위치이다. 끝 위치의 기본값은 line-end이다.  


<pre><code>-t, --field-separator=SEPERATOR</code></pre>


SEPERATOR에 해당하는 구분자를 사용한다. -k 옵션의 F(필드의 위치)에 해당하는 값의 구분자를 조절할 수 있다. 기본적인 구분자는 ' '(공백)이다.


<pre><code>--sort=WORD</code></pre>


KEY를 어떻게 취급할 것인지를 정의한다.


WORD | 비고 | 대체 가능한 전달인자
--- | --- | ---
general-numeric | 일반적으로 숫자의 크기를 기준으로 정렬 | -g
human-numeric | 1K(byte), 102M(byte) 등 용량을 인식함 | -h
month | 'Jan', 'Feb' 등 month-word를 인식함. | -M
numeric | 숫자를 문자열로 치환하여 정렬 (1 < 10 < 2 < 231 < 5) | -n
random | random한 기준으로 정렬 | -R
version | 텍스트로 된 version 문자를 인식하여 정렬 | -V

[참고 - What's the difference between --general-numeric-sort and --numeric-sort options in gnu sort](https://stackoverflow.com/questions/1255782/whats-the-difference-between-general-numeric-sort-and-numeric-sort-options)


위의 내용으로 /etc/passwd를 UID 기준으로 정렬해보자.


<pre><code>cat /etc/passwd | sort -t : -k 3 -g</code></pre>


먼저 /etc/passwd 파일의 구분자인 콜론(:)을 구분자로 지정했고, UID에 해당하는 필드인 3번째 필드를 정렬에 사용할 필드로 사용했다. 또 일반 numeric이 아닌 general-numeric을 정렬에 사용함으로써 UID의 크기에 따라 정렬되도록 하였다.

![결과](https://github.com/azza999/small-start/blob/main/assets/210701/sort.png?raw=true)
<p style="text-align: center; color: #999;">결과</p>

## cut 사용

cut은 주어진 문자열을 수정할 때 주로 사용한다.

<pre><code>-c start-end</code></pre>

start : 시작 부분 지정  
end : 끝 부분 지정  

가장 간단한 사용법이다. 시작 부분과 끝 부분을 지적하여 해당 부분만을 출력한다.  
python indexing처럼 start, end중 한 인자를 비워 start-끝, 처음-end 까지 출력이 가능하다.  
<br>
<br>
<pre><code>echo "onetwothreefour" | cut -c 1-2,5,7-</code></pre>

또한 위와 같이 사용하여, 여러 부분을 출력할 수 있다.  
<br>
<br>
<pre><code>-d 'delimiter' -f start-end</code></pre>

-d : 필드 구분자 지정  
-f : 필드 번호 지정  

구분자와 필드 번호를 지정하여 원하는 필드를 출력할 수 있다. `-f` 옵션도 `-c`와 같이 사용할 수 있다.  
<br>
<br>
<pre><code>-b, --bytes</code></pre>

-c 옵션을 byte 단위로 수행한다.  
<br>
<br>
<pre><code>-d 'delimiter' -s</code></pre>

출력시 delimiter을 제외하고 출력한다.  
<br>
<br>
<pre><code>-d 'delimiter' --output-delimiter=delimiter</code></pre>

출력시 사용할 delimiter을 지정한다.
<br>
<br>

## 리눅스 if 조건문

표현식 | 설명
--- | ---
-b file | block 타입 장치 파일이면 참
-c file | character 타입 장치 파일이면 참
-d file | 디렉터리 파일이면 참
-e file | 파일이 존재하면 참
-f file | 해당 파일이 존재하고, 디렉토리 형태가 아니면 참
-L file | 심볼릭 링크 파일이면 참
-h file | 심볼릭 링크 파일이면 참
-p file | named pipe 파일이면 참
-S file | 소켓 파일이면 참
-s file | 파일의 크기가 0보다 크다면 참
-r file | 파일의 읽기 권한이 있다면 참
-w file | 파일의 쓰기 권한이 있다면 참
-x file | 파일의 실행 권한이 있다면 참
file1 -nt file2 | file1이 file2보다 새로운 파일이면 참
file1 -ot file2 | file1이 file2보다 오래된 파일이면 참
file1 -et file2 | file1이 file2과 같은파일이면 참
-z string | 문자열의 길이가 0이면 참
-n string | 문자열의 길이가 0이면 참
string1 = string2 | string1과 string2가 같으면 참
string1 != string2 | string1과 string2가 다르면 참

[ifTest.sh](https://github.com/azza999/small-start/blob/main/assets/210704/iftest.sh)

위의 쉘 스크립트에서 if 구문을 테스트 해볼 수 있다.