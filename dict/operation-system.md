# 운영체제

## 포트에 권한 부여

1 ~ 1024 포트는 well-known 포트로, 일반 유저는 사용할 수 없다. 하지만 들어오는 요청을 redirect할 수 있다.

centos 7+)
firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=8080 --permanent