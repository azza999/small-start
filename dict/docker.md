# Docker

드디어 도커 써본다

[생활코딩](https://www.youtube.com/playlist?list=PLuHgQVnccGMDeMJsGq2O-55Ymtx0IdKWf)에서 입문을 참고했다.

## 설치

[도커 홈페이지](https://www.docker.com/)에서 다운받으면 된다. GUI라 헷갈릴 일 없다. 다만 docker에서 hosts 파일을 바꾸는 것 같은데 백신에서 시스템 파일 변조다! 바이러스다! 그러면서 자꾸 원래대로 되돌릴려고 한다. 각 백신 설정같은 곳에서 잘 달래주자.


## 기초적인 사용

### Image와 Container

Image는 VM에서 자주 쓰던 것처럼 토대가 되는 파일이다. 배포판을 사용할 수도 있고, 배포판을 기반으로 이미지를 생성할 수도 있다. 잠깐 다뤄보니 VM에서는 iso 이미지 파일로 운영체제만 깔고 할 거 하는 게 보통이었지만, docker는 확장성과 이식성을 중시하는 만큼 직접 커스텀 이미지를 빌드할 일이 많은 것 같다.

Container는 이미지를 기반으로 생성된 실제 VM이다. 엄밀히 말하면 VM은 아니고 하나의 가상 실행환경이다.

### hello world!

github에서 pull 해오듯이 docker hub에서 pull 해오면 된다. 일단 생활코딩 예시가 apache2 웹서버 기반이라서 httpd를 설치했다.

```
docker pull httpd
```

pull한 이미지를 실행시킨다. 이미지를 실행시키면 자동으로 컨테이너가 생성되고, 생성된 컨테이너가 실행된다.
```
docker run --name web-server -p 80:80 -d httpd
```
#### 자주 사용하는 옵션들

`--name` 컨테이너의 이m름을 지정한다. 이름을 지정하지 않으면 docker에서 무작위 이름을 부여한다. docker container를 컨트롤 할 때 이름을 사용한다. 추가적으로 고유 ID를 사용할 수도 있는데 외우거나 붙여넣기 매우 번거로울 정도로 길어서 이름을 쓰는 편이 좋다.

`-p LOCAL_PORT:CONTAINER_PORT` docker에 포워딩할 포트를 지정한다. 포트를 지정하지 않으면 컨테이너에 접근할 수 없다.

`-d` docker contaier를 백그라운드로 실행한다. 그냥 실행하면 로그를 계속 띄워줘서 container를 끄지 않고서는 다른 작업을 할 수 없다.

`-v LOCAL_DIR:CONTAINER_DIR` docker container에 동기화할 로컬 디렉터리를 지정한다. 컨테이너를 킨 후에는 바꿀 수 없다. 동기화가 실행되면 처음에는 LOCAL -> container 방향으로 강제 동기화가 되기 때문에 CONTAINER_DIR에 파일을 LOCAL_DIR에 미리 옮겨주고 동기화를 진행하지 않으면 동기화 시작시에 CONTAINER_DIR의 모든 파일이 삭제된다. 그 이후에 생성/수정/삭제되는 파일은 양방향으로 변경된다.

그리고 git bash에서 진행한다면 역슬래쉬를 쓸 수 없다.

--------

### 이미지&컨테이너 조작
```
docker image rm IMAGE_NAME
docker image pull IMAGE_NAME

docker container start CONTAINER_NAME
docker container stop CONTAINER_NAME
docker container rm CONTAINER_NAME
```

## 이미지 빌드

하지만 나는 node를 사용한 웹서버를 사용하고 싶었기에, [NODE 도커라이징](https://nodejs.org/ko/docs/guides/nodejs-docker-webapp)을 참고했다.

```
docker build . -t IMAGE_NAME
```